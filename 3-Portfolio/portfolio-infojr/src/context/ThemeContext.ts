import { createContext } from "react";

type ThemeContextType = {
  isDarkThemed: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;
