"use client";

import React, {FC, HTMLProps, PropsWithChildren} from 'react';
import {combineStyles} from "../../utils/combineStyles";
import VStack from "../Stack/VStack";
import {useCursorPosition} from "../../hooks/useCursorPosition";
import styles from "./index.module.scss";
import {css} from "@emotion/css";

export type CardProps = HTMLProps<HTMLDivElement> & PropsWithChildren;

const Card: FC<CardProps> = ({
  className,
  children,
  ...rest
}) => {
  const [[x, y], mouseEvents] = useCursorPosition();
  const glowPositionStyle = css({
    "--glow-x": `${x}px`,
    "--glow-y": `${y}px`,
  });

  const cardStyles = combineStyles([className, glowPositionStyle, styles.card]);

  return (
    <VStack className={cardStyles} {...mouseEvents} {...rest}>{children}</VStack>
  );
};

export default Card;
