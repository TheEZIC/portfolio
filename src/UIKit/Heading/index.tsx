import React, {FC, PropsWithChildren} from 'react';
import {Size} from "../../types/Size";
import styles from "./index.module.scss";
import {combineStyles} from "../../utils/combineStyles";

export type HeadingProps = {
  s?: Size,
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.HTMLProps<HTMLHeadingElement> & PropsWithChildren;

const getHeadingSize = (size: Size): string => {
  switch (size) {
    case "sm": return "20px";
    case "md": return "34px";
    case "lg": return "48px";
    case "xl": return "62px";
  }
};

const Heading: FC<HeadingProps> = ({
  className,
  style,
  s= "md",
  as= "h6",
  children,
  ...rest
}) => {
  const classString = combineStyles([className, styles.heading]);
  style = {
    ...style,
    fontSize: getHeadingSize(s),
  };

  switch (as) {
    case "h1":
      return (
        <h1 className={classString} style={style} {...rest}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={classString} style={style} {...rest}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={classString} style={style} {...rest}>{children}</h3>
      );
    case "h4":
      return (
        <h4 className={classString} style={style} {...rest}>{children}</h4>
      );
    case "h5":
      return (
        <h5 className={classString} style={style} {...rest}>{children}</h5>
      );
    case "h6":
      return (
        <h6 className={classString} style={style} {...rest}>{children}</h6>
      );
  }
};

export default Heading;
