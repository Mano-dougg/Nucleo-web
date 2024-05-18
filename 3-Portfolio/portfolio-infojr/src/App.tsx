import About from "./components/about/index.tsx";
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
  const toggleDarkClass = () => isDarkThemed ? "dark" : ""
  const darkClassName = toggleDarkClass();

  const handleMediaQueryChange = (matches: boolean) => {
    // matches will be true or false based on the value for the media query
    matches ? !isMobile : undefined;
  }
  const isMobile = useMediaQuery(
    { maxWidth: 730 },
    undefined,
    handleMediaQueryChange
  )
  const toggleMobileClass = () => isMobile ? "mobile" : ""
  const mobileClassName = toggleMobileClass();

  return (
    <ThemeContext.Provider value={{ isDarkThemed, toggleTheme, darkClassName }}>
      <ResponsiveContext.Provider value={{ isMobile, mobileClassName }}>
        <NavBar />
        <About />
      </ResponsiveContext.Provider>
    </ThemeContext.Provider>
  )
}
