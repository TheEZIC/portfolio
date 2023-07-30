"use client";

import {useLocalStorage} from "@hooks/useLocalStorage";
import {Theme} from "@t/Theme";
import {ThemeProvider} from "./ThemeContext";
import CustomHTMLElement from "./CustomHTMLElement";
import {FC, PropsWithChildren} from "react";
import dynamic from "next/dynamic";

export type MainWrapperProps = PropsWithChildren;

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <CustomHTMLElement>
        {children}
      </CustomHTMLElement>
    </ThemeProvider>
  );
};

export default dynamic(() => Promise.resolve(MainWrapper), {
  ssr: false,
});
