"use client";

import React from 'react';
import {VscColorMode} from "react-icons/vsc";
import IconBtn from "@uikit/IconBtn";
import { useThemeContext } from "../../MainWrapper/ThemeContext";
import styles from "../index.module.scss";

const ToggleThemeButton = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <IconBtn className={styles.hubIcon} icon={<VscColorMode size={24}/>} onClick={toggleTheme}/>
  );
};

export default ToggleThemeButton;
