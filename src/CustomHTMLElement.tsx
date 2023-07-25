"use client";

import React, {FC, PropsWithChildren, useEffect, useRef} from 'react';
import {useThemeContext} from "./ThemeContext";
import {Theme} from "./types/Theme";
import {ColorUtil} from "./utils/ColorUtil";
import {LightTheme} from "./themes/Light";
import {DarkTheme} from "./themes/Dark";
import {pascalToKebab} from "./utils/pascalToKebab";

type CustomHtmlElementProps = PropsWithChildren;

const applyTheme = (htmlElement: HTMLElement, currentTheme: Theme) => {
  const currentThemeObject = currentTheme === "light"
    ? LightTheme
    : DarkTheme;

  for (const [key, value] of Object.entries(currentThemeObject)) {
    setCssVariable(htmlElement, key, value);
  }
};

const setCssVariable = (htmlElement: HTMLElement, key: string, value: string) => {
  htmlElement.style.setProperty(processCssKey(key), processCssValue(value));
};

const processCssKey = (key: string) => {
  return "--" + pascalToKebab(key);
};

const processCssValue = (value: string) => {
  let result: string = value;

  if (value.startsWith("#") || value.startsWith("rgb")) {
    result = processCssColorValue(result);
  }

  return result;
};

const processCssColorValue = (color: string) => {
  if (color.startsWith("#")) {
    color = ColorUtil.toRgb(color);
  }

  return color;
};

const CustomHtmlElement: FC<CustomHtmlElementProps> = ({ children }) => {
  const { theme } = useThemeContext();
  const htmlElement = useRef<HTMLElement>(document.querySelector("html"));

  useEffect(() => {
    applyTheme(htmlElement.current!, theme);
  }, [theme]);

  return <>{children}</>;
};

export default CustomHtmlElement;
