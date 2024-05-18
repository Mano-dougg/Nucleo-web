import { createContext } from "react";

type ThemeContextType = {
  isDarkThemed: boolean;
  toggleTheme: () => void;
  darkClassName: "dark" | "";
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;
