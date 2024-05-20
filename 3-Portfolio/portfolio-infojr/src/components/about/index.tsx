import { useContext } from 'react'
import ResponsiveContext from '../../context/ResponsiveContext';
import "./about.css"

const About: React.FC = () => {
  const { mobileClassName } = useContext(ResponsiveContext)

  return (
    <section id="about" className={`hero-section ${mobileClassName}`}>
      <header className={`hero-header ${mobileClassName}`}>
        <img src="/images/FernandoRoundClose.svg" alt="Fernando's picture" />
        <h1 className={`eb-garamond-bold`}>Hello.<br />My name is Fernando.</h1>
      </header>
      <hr />
      <article className={`hero-article`}>
        <p className={"be-vietnam-pro-regular "}>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use. Right now, I'm Design Lead at <a href="#">Holiday Extras</a>, covering all our digital platforms across a whole load of brands – leading a great team across <a href="#">design</a>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products. I've got some <a href="#">work on Dribbble</a>, some previous work at <a href="#">Saga</a> and you can find me over on twitter and sometimes on <a href="#">Medium too</a>. I also take <a href="#">too many photos</a>.</p>
        <div className={`call-out be-vietnam-pro-regular  ${mobileClassName}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0_10_0)">
              <path d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z" fill="var(--special-text-color)" />
            </g>
            <defs>
              <clipPath id="clip0_10_0">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Available for work and general design goodness – <a href="#">say hello</a></p>
        </div>
      </article>
      <hr id="long-hr" />
    </section>
  )
}

export default About
