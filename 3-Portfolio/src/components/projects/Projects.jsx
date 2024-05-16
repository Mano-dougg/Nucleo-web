import './style.css';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <>
        <section className="container-projects">
            <section className="projects">
                <hr />
                <h2>Projects</h2>
                <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>

                <ProjectItem
                title="Rock Paper Scissors"
                text="Project created to pass the time, a simple game of rock paper scissors that I made to test my knowledge in HTML, CSS and Javascript. created in 2020"
                image="https://arthur-batista.github.io/portfolio/assets/pedra-papel-tesoura.png"
                alt="Rock Paper Scissors Image"
                href="https://arthur-batista.github.io/pedra-papel-tesoura/"
                />

                <ProjectItem 
                title="Hangman Game"
                text="Final project made for a training course offered by UFBA. Developed in pairs, my first experience coding with someone else. Used JavaScript, HTML and CSS. Created in January 2024."
                image="https://arthur-batista.github.io/portfolio/assets/forca.png"
                alt="Hangman Game"
                href="https://beatrizx2.github.io/Projeto-Final-Forca/"
                className="project-reverse"
                />
            </section>
        </section>
    </>
  );
}

export default Projects;
