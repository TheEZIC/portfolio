import {useThemeContext} from "../ThemeContext";

export const useThemeColor = (lightColor: string, darkColor: string): string => {
  const { theme } = useThemeContext();

  return theme === "light"
    ? lightColor
    : darkColor;
}
