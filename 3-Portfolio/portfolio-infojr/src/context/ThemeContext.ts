import { createContext } from "react";

export type ThemeContextType = {
  isDarkThemed?: boolean;
  toggleTheme: () => void;
  theme: "dark" | "light";
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;
