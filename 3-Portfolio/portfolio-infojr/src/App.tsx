import About from "./components/about/index.tsx";
import NavBar from "./components/navBar/index.tsx";
import Projects from "./components/projects/index.tsx";
import ResponsiveContext from "./context/ResponsiveContext.ts";
import ThemeContext from "./context/ThemeContext.ts";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';


export default function App() {
  const [ theme, setTheme ] = useState(
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: light").matches ? "dark" : "light")
  );
  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme)
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDarkThemed = theme === "dark";

  const handleMediaQueryChange = (matches: boolean) => {
    // matches will be true or false based on the value for the media query
    matches ? !isMobile : undefined;
  }
  const isMobile = useMediaQuery({ maxWidth: 730 }, undefined, handleMediaQueryChange);

  return (
    <ThemeContext.Provider value={{ theme: theme as "dark" | "light", isDarkThemed, toggleTheme }}>
      <ResponsiveContext.Provider value={{ isMobile, mobileClassName: isMobile ? "mobile" : "" }}>
        <NavBar />
        <About />
        <Projects />
      </ResponsiveContext.Provider>
    </ThemeContext.Provider>
  )
}
