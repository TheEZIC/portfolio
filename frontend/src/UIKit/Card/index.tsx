"use client";

import React, {FC, HTMLProps, PropsWithChildren} from 'react';
import {combineStyles} from "../../utils/combineStyles";
import VStack from "../Stack/VStack";
import {useCursorPosition} from "../../hooks/useCursorPosition";
import styles from "./index.module.scss";
import { css } from "@emotion/css";
import { StackProps } from "@uikit/Stack";

export type CardProps = HTMLProps<HTMLDivElement> & StackProps & PropsWithChildren;

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

  const cardStyles = combineStyles([glowPositionStyle, styles.card]);
  const cardContentStyles = combineStyles([className, styles.cardContent]);

  return (
    <div className={cardStyles}>
      <div className={styles.cardBorder}/>
      <VStack className={cardContentStyles} {...mouseEvents} {...rest}>{children}</VStack>
    </div>
  );
};

export default Card;
