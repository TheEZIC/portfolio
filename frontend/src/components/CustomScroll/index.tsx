"use client";

import React, {
  Dispatch,
  FC,
  HTMLProps,
  MutableRefObject,
  PropsWithChildren, SetStateAction,
  useEffect,
  useRef,
  useState,
  WheelEvent
} from "react";
import { Property } from "csstype";
import { useEvent } from "@hooks/useEvent";
import { combineStyles } from "@utils/combineStyles";
import styles from "./index.module.scss";
import { clamp } from "@utils/clamp";

export type CustomScrollProps = {
  overflowX?: Property.OverflowX;
  overflowY?: Property.OverflowY;
} & PropsWithChildren & HTMLProps<HTMLDivElement>;

type SetBoundaryCallback = Dispatch<SetStateAction<number>>;

const CustomScroll: FC<CustomScrollProps> = ({
  children,
  overflowX,
  overflowY,
  className,
  ...rest
}) => {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const [scrollX, setScrollX] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  const [outerWidth, setOuterWidth] = useState<number | null>(null);
  const [outerHeight, setOuterHeight] = useState<number | null>(null);

  const [innerWidth, setInnerWidth] = useState<number | null>(null);
  const [innerHeight, setInnerHeight] = useState<number | null>(null);

  const maxScrollXDistance = Math.max(0, innerWidth - outerWidth);
  const maxScrollYDistance = Math.max(0, innerHeight - outerHeight);

  const resizeObserver = useRef<ResizeObserver>(new ResizeObserver((entries) => {
    for (const entry of entries) {
      onElementResize(outerRef, entry, setOuterHeight, setOuterHeight);
      onElementResize(innerRef, entry, setInnerWidth, setInnerHeight);

      setScrollX((v) => clamp(v, 0, maxScrollXDistance));
      setScrollY((v) => clamp(v, 0, maxScrollYDistance));
    }
  }));

  useEffect(() => {
    return () => {
      unobserveElement(outerRef);
      resizeObserver.current.disconnect();
    };
  }, []);

  useEffect(() => {
    setBoundary(outerRef, setOuterWidth, setOuterHeight);
    observeElement(outerRef);
  }, [outerRef.current]);

  useEffect(() => {
    setBoundary(innerRef, setInnerWidth, setInnerHeight);
    observeElement(innerRef);
  }, [innerRef.current]);

  const onScroll = useEvent((e: WheelEvent) => {
    if (overflowX !== "hidden" && innerWidth !== null && outerWidth !== null) {
      setScrollX((v) => {
        return clamp(v + e.deltaX, 0, maxScrollXDistance);
      });
    }

    if (overflowY !== "hidden" && innerHeight !== null && outerHeight !== null) {
      setScrollY((v) => {
        return clamp(v + e.deltaY, 0, maxScrollYDistance);
      });
    }
  });

  const observeElement = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (!ref.current) {
      return;
    }

    resizeObserver.current.observe(innerRef.current!);
  };

  const unobserveElement = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (!ref.current) {
      return;
    }

    resizeObserver.current.unobserve(ref.current!);
  };

  const onElementResize = (
    ref: MutableRefObject<HTMLDivElement | null>,
    entry: ResizeObserverEntry,
    setWidth: SetBoundaryCallback,
    setHeight: SetBoundaryCallback
  ) => {
    if (entry.target === ref.current) {
      setBoundary(ref, setWidth, setHeight);
    }
  };

  const setBoundary = (
    ref: MutableRefObject<HTMLDivElement | null>,
    setWidth: SetBoundaryCallback,
    setHeight: SetBoundaryCallback
  ) => {
    if (!ref.current) {
      return;
    }

    const { width, height } = ref.current!.getBoundingClientRect();

    setWidth(() => width);
    setHeight(() => height);
  };

  const scrollContainerClassNames = combineStyles([className, styles.container]);
  const innerContainerClassNames = combineStyles([className, styles.inner]);

  const transformString = `translate(${scrollX}px, -${scrollY}px)`;

  return (
    <div
      ref={outerRef}
      className={scrollContainerClassNames}
      onWheel={onScroll}
      {...rest}
    >
      <div
        ref={innerRef}
        style={{
          transform: transformString,
        }}
        className={innerContainerClassNames}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomScroll;
