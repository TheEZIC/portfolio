"use client";

import React, {FC, HTMLProps, PropsWithChildren, useEffect, useRef} from 'react';
import {combineStyles} from "../../utils/combineStyles";
import VStack from "../Stack/VStack";
import {useCursorPosition} from "../../hooks/useCursorPosition";
import styles from "./index.module.scss";

export type CardProps = HTMLProps<HTMLDivElement> & PropsWithChildren;

const Card: FC<CardProps> = ({
  className,
  children,
  ...rest
}) => {
  const [[x, y], mouseEvents] = useCursorPosition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.style.setProperty("--glow-x", `${x}px`);
    ref.current?.style.setProperty("--glow-y", `${y}px`);
  }, [x, y]);

  const cardStyles = combineStyles([className,  styles.card]);

  return (
    <VStack ref={ref} className={cardStyles} {...mouseEvents}>{children}</VStack>
  );
};

export default Card;
