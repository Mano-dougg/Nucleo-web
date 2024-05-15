import { useState } from "react";
import ThemeContext from "./context/ThemeContext";

export default function App() {
  const [ isDarkThemed, toggleDarkTheme ] = useState<boolean>(false)
  function toggleTheme() {
    toggleDarkTheme(!isDarkThemed)
  }
  return (
    <ThemeContext.Provider value={{ isDarkThemed, toggleTheme }}>
    </ThemeContext.Provider>
  )
}
