import { useState } from 'react';
import './App.css';

import Header from './components/header/header';
import MainSection from './components/main-section/main-section';
import SecondarySection from './components/secondary-section/secondary-section';

function App() {
  const [theme, setTheme] = useState(false)

  const lightTheme = `
  :root{
    --blue: #0065FF;
}

.App{
  background-color: white;
}

.big-color, .title, .colored{
    color: var(--blue);
}

.fill{
    fill: var(--blue);
}

.break{
    background-color: var(--blue);
}

.border{
    border: 1px solid var(--blue);
}
  `

  const darkTheme = `
  :root{
    --dark: #FAF4E6;
}

.App{
    color: var(--dark);
    background-color: #222222;
}

.big-color, .title, .colored{
    color: var(--dark);
}

.fill{
    fill: var(--dark);
}

.break{
    background-color: var(--dark);
}

.border{
    border: 1px solid var(--dark);
}

.backgrounder{
    background-color: #3C3B3A;
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
        <MainSection />
        <SecondarySection />
      </div>
    </>
  );
}

export default App;
