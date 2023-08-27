import React, {createElement, FC, PropsWithChildren} from 'react';
import {Size} from "@t/Size";
import styles from "./index.module.scss";
import {combineStyles} from "../../utils/combineStyles";

export type HeadingProps = {
  s?: Size,
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.HTMLProps<HTMLHeadingElement> & PropsWithChildren;

const getHeadingSize = (size: Size): string => {
  switch (size) {
    case "xs":
      return "16px";
    case "sm":
      return "20px";
    case "md": return "34px";
    case "lg": return "48px";
    case "xl": return "62px";
  }
};

const Heading: FC<HeadingProps> = ({
  className,
  style,
  s = "md",
  as = "h6",
  children,
  ...rest
}) => {
  const classString = combineStyles([className, styles.heading]);
  style = {
    ...style,
    fontSize: getHeadingSize(s as Size),
  };

  return createElement(as, {
    className: classString,
    style,
    ...rest,
  }, children);
};

export default Heading;
