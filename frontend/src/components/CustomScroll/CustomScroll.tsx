"use client";

import React, {
  Dispatch,
  FC,
  HTMLProps,
  MutableRefObject,
  PropsWithChildren, ReactNode, SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Property } from "csstype";
import { createPortal } from "react-dom";
import { combineStyles } from "@utils/combineStyles";
import { clamp } from "@utils/clamp";
import Scrollbar from "@components/CustomScroll/Scrollbar";
import { css } from "@emotion/css";
import styles from "./index.module.scss";
import { useWindowEvent } from "@hooks/useWindowEvent";

export type CustomScrollProps = {
  overflowX?: Property.OverflowX;
  overflowY?: Property.OverflowY;
  attachXTo?: string;
  attachYTo?: string;
} & PropsWithChildren & HTMLProps<HTMLDivElement>;

type SetBoundaryCallback = Dispatch<SetStateAction<number>>;

const CustomScroll: FC<CustomScrollProps> = ({
  children,
  overflowX = "auto",
  overflowY = "auto",
  attachXTo,
  attachYTo,
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
    }
  }));

  const baseScrollbarProps = {
    outerWidth,
    outerHeight,
    innerWidth,
    innerHeight,
    maxScrollXDistance,
    maxScrollYDistance,
    scrollX,
    scrollY,
  };

  useEffect(() => {
    return () => {
      unobserveElement(outerRef);
      resizeObserver.current.disconnect();
    };
  }, []);

  useWindowEvent("resize", () => {
    setBoundary(outerRef, setOuterWidth, setOuterHeight);
    setBoundary(innerRef, setInnerWidth, setInnerHeight);
  });

  const renderXScrollbarPortal = () => renderScrollbarPortal(renderXScrollBar, attachXTo);
  const renderYScrollbarPortal = () => renderScrollbarPortal(renderYScrollBar, attachYTo);

  const renderScrollbarPortal = (renderer: () => ReactNode, attachTo?: string) => {
    if (!attachTo) {
      return null;
    }

    const element = document.querySelector(attachTo);

    if (!element) {
      return null;
    }

    return createPortal(renderer(), element);
  }

  const renderXScrollBar = () => (
    <Scrollbar
      {...baseScrollbarProps}
      overflow={overflowX}
      horizontal={true}
    />
  );

  const renderYScrollBar = () => (
    <Scrollbar
      {...baseScrollbarProps}
      overflow={overflowY}
      horizontal={false}
    />
  );

  useEffect(() => {
    setBoundary(outerRef, setOuterWidth, setOuterHeight);
    observeElement(outerRef);
  }, [outerRef.current]);

  useEffect(() => {
    setBoundary(innerRef, setInnerWidth, setInnerHeight);
    observeElement(innerRef);
  }, [innerRef.current]);

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

    onScroll();
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

  const onScroll = () => {
    if (!outerRef.current) {
      return;
    }

    if (overflowX !== "hidden" && innerWidth !== null && outerWidth !== null) {
      setScrollX(clamp(outerRef.current!.scrollLeft, 0, maxScrollXDistance));
    }

    if (overflowY !== "hidden" && innerHeight !== null && outerHeight !== null) {
      setScrollY(clamp(outerRef.current!.scrollTop, 0, maxScrollYDistance));
    }
  };

  const scrollbarContainerClassName = css({
    left: `${scrollX}px`,
    top: `${scrollY}px`,
    width: `${outerWidth}px`,
    height: `${outerHeight}px`,
  });

  const scrollbarContainerClassNames = combineStyles([styles.scrollbarContainer, scrollbarContainerClassName]);
  const scrollContainerClassNames = combineStyles([className, styles.container]);
  const innerContainerClassNames = combineStyles([styles.inner]);

  return (
    <div
      ref={outerRef}
      className={scrollContainerClassNames}
      onScroll={onScroll}
      {...rest}
    >
      <div className={scrollbarContainerClassNames}>
        {!attachXTo ? renderXScrollBar() : renderXScrollbarPortal()}
        {!attachYTo ? renderYScrollBar() : renderYScrollbarPortal()}
      </div>
      <div
        ref={innerRef}
        className={innerContainerClassNames}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomScroll;
