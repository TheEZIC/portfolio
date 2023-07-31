import React, {FC, PropsWithChildren} from "react";
import styles from "./index.module.scss"
import {combineStyles} from "../../utils/combineStyles";

export type StackProps = {
  horizontal?: boolean;
  spacing?: number;
} & React.HTMLProps<HTMLDivElement> & PropsWithChildren;

const Stack: FC<StackProps> = ({
  className,
  horizontal = false,
  spacing= 0,
  children,
  ...rest
}) => {
  const classes = [styles.stack, className];
  classes.push(horizontal ? styles.row : styles.col);

  const styleString = combineStyles(classes);

  return (
    <div
      className={styleString}
      style={{
        gap: `${spacing * 4}px`,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Stack;
