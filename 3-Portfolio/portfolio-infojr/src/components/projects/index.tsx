import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';
import ResponsiveContext from '../../context/ResponsiveContext';
import "./projects.css"


const Projects = () => {
  const { isDarkThemed, darkClassName } = useContext(ThemeContext);
  const { mobileClassName } = useContext(ResponsiveContext)

  return (
    <section id="projects" className={`projects-section ${mobileClassName} ${darkClassName}`}>
      <header className="projects-header">
        <h1 className={`eb-garamond-bold projects-title ${mobileClassName} ${darkClassName}`}>Projects</h1>
        <p className="projects-description be-vietnam-pro-regular">Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section.</p>
      </header>
      <div className={`projects-container ${mobileClassName} ${darkClassName}`}>
        <div className={`project-image ${mobileClassName} ${darkClassName}`}>
          <img src={`/images/${isDarkThemed ? "dark-" : ""}imagePlaceholder.png`} alt="Project image" />
        </div>
        <div className={`be-vietnam-pro-regular project-content ${mobileClassName} ${darkClassName}`}>
          <h2 className="project-title be-vietnam-pro-bold">Title</h2>
          <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button id="project-button" className={`${mobileClassName}`}>GitHub</button>
        </div>
      </div>
      <div className={`projects-container flipped ${mobileClassName} ${darkClassName}`}>
        <div className={`project-image ${mobileClassName} ${darkClassName}`}>
          <img src={`/images/${isDarkThemed ? "dark-" : ""}imagePlaceholder.png`} alt="Project image" />
        </div>
        <div className={`be-vietnam-pro-regular project-content ${mobileClassName} ${darkClassName}`}>
          <h2 className="project-title be-vietnam-pro-bold">Title</h2>
          <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
          <button id="project-button" className={`${mobileClassName}`}>GitHub</button>
        </div>
      </div>
    </section>
  )
}

export default Projects