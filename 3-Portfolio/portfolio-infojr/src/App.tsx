import NavBar from "./components/navBar/index.tsx";
import ResponsiveContext from "./context/ResponsiveContext.ts";
import ThemeContext from "./context/ThemeContext.ts";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'


export default function App() {
  const [ isDarkThemed, setTheme ] = useState(false);
  const toggleTheme = () => {
    setTheme(!isDarkThemed);
  }
  const toggleClassName = (darkTheme: boolean) => darkTheme ? "dark" : ""
  const darkClassName = toggleClassName(isDarkThemed);

  const handleMediaQueryChange = (matches: boolean) => {
    // matches will be true or false based on the value for the media query
    matches ? !isMobile : undefined;
  }
  const isMobile = useMediaQuery(
    { maxWidth: 730 },
    undefined,
    handleMediaQueryChange
  )

  return (
    <ThemeContext.Provider value={{ isDarkThemed, toggleTheme, darkClassName }}>
      <ResponsiveContext.Provider value={{ isMobile }}>
        <NavBar />
      </ResponsiveContext.Provider>
    </ThemeContext.Provider>
  )
}
