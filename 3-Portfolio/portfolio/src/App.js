import { useState } from 'react';
import './App.css';

import Hamburguer from './components/Hamburguer/Hamburguer';
import Header from './components/header/header';
import MainSection from './components/main-section/main-section';
import SecondarySection from './components/secondary-section/secondary-section';

function App() {
  const [theme, setTheme] = useState(false)

  const lightTheme = `
  :root{
    --blue: #0065FF;
}

.App, .menu{
  background-color: white;
  transition: background-color .4s ease;
}

.big-color, .title, .colored{
    color: var(--blue);
    transition: color .4s ease;
}

.fill{
    fill: var(--blue);
    transition: fill .4s ease;
}

.hambutton-color{
  background-color: var(--blue);
}

.break{
    background-color: var(--blue);
    transition: background-color .4s ease;
}

.border{
    border: 1px solid var(--blue);
}

  `

  const darkTheme = `
  :root{
    --dark: #FAF4E6;
}

.App, .menu{
    color: var(--dark);
    background-color: #222222;
    transition: background-color .4s ease, color .4s ease;
}

.big-color, .title, .colored{
    color: var(--dark);
    transition: color .4s ease;
}

.fill{
    fill: var(--dark);
    transition: fill .4s ease;
}

.hambutton-color{
  background-color: var(--dark);
}

.break{
    background-color: var(--dark);
    transition: background-color .4s ease;
}

.border{
    border: 1px solid var(--dark);
}

.backgrounder{
    background-color: #3C3B3A;
    transition: background-color .4s ease;
}`;

  const themeChanger = ()=>{
    setTheme(!theme)
  }

  return (
    <>  
      <style>
        {theme?
        darkTheme:
        lightTheme}
      </style>
      <div className="App flexer">
        <Header onClick={themeChanger} />
        <Hamburguer />
        <MainSection />
        <SecondarySection />
      </div>
    </>
  );
}

export default App;
