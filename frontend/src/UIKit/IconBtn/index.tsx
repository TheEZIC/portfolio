import React, {FC, ReactNode} from "react";
import styles from "./index.module.scss";
import {combineStyles} from "../../utils/combineStyles";

export type IconBtnProps = {
  icon: ReactNode;
} & React.HTMLProps<HTMLDivElement>;

const IconBtn: FC<IconBtnProps> = ({className, icon, ...rest}) => {
  const iconStyles = combineStyles([className, styles.icon]);

  return (
    <div className={iconStyles} {...rest}>{icon}</div>
  );
};

export default IconBtn;
