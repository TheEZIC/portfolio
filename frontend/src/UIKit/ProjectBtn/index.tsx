import React, { FC, HTMLProps, PropsWithChildren } from "react";
import { combineStyles } from "@utils/combineStyles";
import styles from "./index.module.scss";

export type ProjectBtnProps = HTMLProps<HTMLDivElement> & PropsWithChildren;

const ProjectBtn: FC<ProjectBtnProps> = ({ className, children }) => {
  const classNames = combineStyles([className, styles.btn]);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default ProjectBtn;
