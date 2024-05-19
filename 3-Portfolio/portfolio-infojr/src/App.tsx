import About from "./components/about/index.tsx";
import NavBar from "./components/navBar/index.tsx";
import Projects from "./components/projects/index.tsx";
import ResponsiveContext from "./context/ResponsiveContext.ts";
import ThemeContext from "./context/ThemeContext.ts";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';


export default function App() {
  const [ isDarkThemed, setTheme ] = useState(false);
  const toggleTheme = () => {
    setTheme(!isDarkThemed);
  }

  const handleMediaQueryChange = (matches: boolean) => {
    // matches will be true or false based on the value for the media query
    matches ? !isMobile : undefined;
  }
  const isMobile = useMediaQuery({ maxWidth: 730 }, undefined, handleMediaQueryChange);

  return (
    <ThemeContext.Provider value={{ isDarkThemed, toggleTheme, darkClassName: isDarkThemed ? "dark" : "" }}>
      <ResponsiveContext.Provider value={{ isMobile, mobileClassName: isMobile ? "mobile" : "" }}>
        <NavBar />
        <About />
        <Projects />
      </ResponsiveContext.Provider>
    </ThemeContext.Provider>
  )
}
