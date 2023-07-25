import {Theme} from "./types/Theme";
import {createContext} from "./utils/context";

export type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

export const [ThemeProvider, useThemeContext] = createContext<ThemeContext>("ThemeContext");
