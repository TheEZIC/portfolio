"use client";

import React from "react";
import styles from "./index.module.scss";
import { combineStyles } from "@utils/combineStyles";
import { useMobileMenuContext } from "@components/MobileMenu/MobileMenuContext";

const Hamburger = () => {
  const { toggle, opened } = useMobileMenuContext();

  const classes = [styles.hamburger];

  if (opened) {
    classes.push("opened");
  }

  return (
    <div className={combineStyles(classes)} onClick={toggle}>
      <div className={styles.hamburgerItem}></div>
      <div className={styles.hamburgerItem}></div>
      <div className={styles.hamburgerItem}></div>
    </div>
  );
};

export default Hamburger;
