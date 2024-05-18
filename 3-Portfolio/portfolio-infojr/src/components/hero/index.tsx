import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';
import ResponsiveContext from '../../context/ResponsiveContext';
import "./hero.css"

const Hero: React.FC = () => {
  const { darkClassName } = useContext(ThemeContext);
  const { mobileClassName } = useContext(ResponsiveContext)

  return (
    <section className={`hero-section ${mobileClassName} ${darkClassName}`}>
      <header className={`hero-header ${mobileClassName} ${darkClassName}`}>
        <img src="/images/FernandoRoundClose.svg" alt="Fernando's picture" />
        <h1 className={`eb-garamond-bold ${darkClassName}`}>Hello.<br />My name is Fernando.</h1>
        <hr className={`${darkClassName}`} />
      </header>
    </section>
  )
}

export default Hero
