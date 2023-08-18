import React, { FC, memo } from "react";
import { css } from "@emotion/css";
import { Property } from "csstype";
import { combineStyles } from "@utils/combineStyles";
import { clamp } from "@utils/clamp";
import styles from "./index.module.scss";

export type ScrollbarProps = {
  outerWidth?: number | null;
  outerHeight?: number | null;
  innerWidth?: number | null;
  innerHeight?: number | null;
  scrollX: number;
  scrollY: number;
  overflow: Property.Overflow;
  horizontal: boolean;
};

const Scrollbar: FC<ScrollbarProps> = memo(({
  outerWidth,
  outerHeight,
  innerWidth,
  innerHeight,
  maxScrollXDistance,
  maxScrollYDistance,
  scrollX,
  scrollY,
  overflow,
  horizontal,
}) => {
  const scrollNeeded = horizontal
    ? innerWidth > outerWidth
    : innerHeight > outerHeight;

  const thumbPercentSize = horizontal
    ? outerWidth / innerWidth
    : outerHeight / innerHeight;

  const thumbPercentClampedSize = clamp(thumbPercentSize, 0.3, 1);
  const thumbSize = (thumbPercentClampedSize * 100).toFixed(2);

  const percentScrollDistance = horizontal
    ? (scrollX) / maxScrollXDistance
    : (scrollY) / maxScrollYDistance;

  const test = (1 - thumbPercentClampedSize) * percentScrollDistance;
  const scrollDistance = (test * 100).toFixed(2);

  const scrollbarClassName = css(horizontal
    ? {
      left: `0px`,
      bottom: `0px`,
      width: "100%",
      height: "5px",
    }
    : {
      top: `0px`,
      right: `0px`,
      width: "5px",
      height: "100%",
    });

  const thumbClassName = css(horizontal
    ? {
      top: "0px",
      left: `${scrollDistance}%`,
      width: `${thumbSize}%`,
      height: "100%",
    }
    : {
      top: `${scrollDistance}%`,
      left: "0px",
      width: "100%",
      height: `${thumbSize}%`,
    });

  const scrollbarClassNames = combineStyles([styles.scrollbar, scrollbarClassName]);
  const thumbClassNames = combineStyles([styles.thumb, thumbClassName]);

  if (overflow === "hidden" || (overflow === "auto" && !scrollNeeded)) {
    return null;
  }

  return (
    <div className={scrollbarClassNames}>
      <div className={thumbClassNames}></div>
    </div>
  );
});

export default Scrollbar;
