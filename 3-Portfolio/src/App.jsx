import Header from './components/Header/Header'
import FirstPage from './components/FirstPage/FirstPage'
import s from './App.module.css'
import SecondPage from './components/SecondPage/SecondPage'
import HamburguerMenu from './components/HamburguerMenu/HamburguerMenu'
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
      const setDarkMode = () => {
          document.querySelector("body").setAttribute("data-theme", "dark")
          localStorage.setItem("theme", "dark")
          setTheme("dark")
      }
      
      const setLightMode = () => {
          document.querySelector("body").setAttribute("data-theme", "light")
          localStorage.setItem("theme", "light")
          setTheme("light")
      }

      if(theme === "dark") setDarkMode();
      if(theme === "light") setLightMode();

      // Change favicon dinamically
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = `${theme === "dark" ? "logo-dark.png" : "/logo.png"}`;
  }, [theme])

  return (
    <>
      <section className={s.header}>
        <Header theme={theme} setTheme={setTheme}  />
      </section>
      <section className={s.main}>
        <HamburguerMenu theme={theme} />
        <FirstPage theme={theme} />
        <SecondPage />
      </section>
    </>
  )
}

export default App
