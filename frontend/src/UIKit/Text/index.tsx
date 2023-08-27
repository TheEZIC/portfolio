import React, {createElement, FC, PropsWithChildren} from 'react';
import {Size} from "../../types/Size";
import {combineStyles} from "../../utils/combineStyles";
import styles from "./index.module.scss";

export type TextProps = {
  s?: Size;
  as?: "p" | "span" | "b";
} & React.HTMLProps<HTMLParagraphElement | HTMLSpanElement> & PropsWithChildren;

const getTextSize = (size: Size) => {
  switch (size) {
    case "xs":
      return "14px";
    case "sm":
      return "16px";
    case "md": return "20px";
    case "lg": return "25px";
    case "xl": return "31.25px";
  }
};

const Text: FC<TextProps> = ({
  className,
  style,
  children,
  s = "sm",
  as = "span",
  ...rest
}) => {
  const classString = combineStyles([className, styles.text]);
  style = {
    ...style,
    fontSize: getTextSize(s),
  };

  return createElement(as, {
    className: classString,
    style,
    ...rest,
  }, children);
};

export default Text;
