"use client";

import React, { FC, ReactNode } from "react";
import { useMobileMenuContext } from "@components/MobileMenu/MobileMenuContext";
import Navigation from "@components/Navigation";
import ButtonsHub from "@components/ButtonsHub";
import styles from "./index.module.scss";

export type MobileMenuProps = {
  ambient?: ReactNode;
};

const MobileMenu: FC<MobileMenuProps> = ({ ambient }) => {
  const { opened } = useMobileMenuContext();

  return (
    <div
      className={styles.mobileMenu}
      style={{
        display: opened ? "flex" : "none",
      }}
    >
      {ambient}
      <Navigation/>
      <ButtonsHub className={styles.buttons}/>
    </div>
  );
};

export default MobileMenu;
