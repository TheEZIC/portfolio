"use client";

import React from 'react';
import {VscColorMode} from "react-icons/vsc";
import IconBtn from "@uikit/IconBtn";
import {useThemeContext} from "../../../ThemeContext";

const ToggleThemeButton = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <IconBtn icon={<VscColorMode size={24}/>} onClick={toggleTheme}/>
  );
};

export default ToggleThemeButton;
