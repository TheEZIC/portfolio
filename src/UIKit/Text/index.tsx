import React, {FC, PropsWithChildren} from 'react';
import {Size} from "../../types/Size";
import {combineStyles} from "../../utils/combineStyles";
import styles from "./index.module.scss";

export type TextProps = {
  s?: Size;
  as?: "p" | "span" | "b";
} & React.HTMLProps<HTMLParagraphElement | HTMLSpanElement> & PropsWithChildren;

const getTextSize = (size: Size) => {
  switch (size) {
    case "sm": return "16px";
    case "md": return "20px";
    case "lg": return "25px";
    case "xl": return "31.25px";
  }
};

const Text: FC<TextProps> = ({
  className,
  style,
  children,
  s= "sm",
  as = "span",
  ...rest
}) => {
  const classString = combineStyles([className, styles.text]);
  style = {
    ...style,
    fontSize: getTextSize(s),
  };

  switch (as) {
    case "p":
      return (
        <p
          className={classString}
          style={style}
          {...rest as React.HTMLProps<HTMLParagraphElement>}
        >
          {children}
        </p>
      );
    case "span":
      return (
        <span
          className={classString}
          style={style}
          {...rest as React.HTMLProps<HTMLSpanElement>}
        >
          {children}
        </span>
      );
    case "b":
      return (
        <b
          className={classString}
          style={style}
          {...rest as React.HTMLProps<HTMLSpanElement>}
        >
          {children}
        </b>
      );
  }
};

export default Text;
