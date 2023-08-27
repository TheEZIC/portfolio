"use client";

import { useLocalStorage } from "@hooks/useLocalStorage";
import { Theme } from "@t/Theme";
import { ThemeProvider } from "./ThemeContext";
import CustomHTMLElement from "./CustomHTMLElement";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MobileMenuProvider } from "@components/MobileMenu/MobileMenuContext";
import { useWindowDimension } from "@hooks/useWindowDemension";

export type MainWrapperProps = PropsWithChildren;

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  const [windowWidth] = useWindowDimension();

  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);
  const toggleMobileMenu = () => setMobileMenuOpened((value) => !value);

  useEffect(() => {
    if (windowWidth > 700) {
      setMobileMenuOpened(false);
    }
  }, [windowWidth]);

  return (
    <MobileMenuProvider value={{
      opened: mobileMenuOpened,
      toggle: toggleMobileMenu,
    }}>
      <ThemeProvider value={{ theme, toggleTheme }}>
        <CustomHTMLElement>
          {children}
        </CustomHTMLElement>
      </ThemeProvider>
    </MobileMenuProvider>
  );
};

export default dynamic(() => Promise.resolve(MainWrapper), {
  ssr: false,
});
