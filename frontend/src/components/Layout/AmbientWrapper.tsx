import React, { FC, PropsWithChildren } from "react";
import styles from "@components/Layout/index.module.scss";

export type AmbientWrapperProps = PropsWithChildren;

const AmbientWrapper: FC<AmbientWrapperProps> = ({ children }) => {
  return (
    <div className={styles.ambientWrapper}>
      {children}
    </div>
  );
};

export default AmbientWrapper;
