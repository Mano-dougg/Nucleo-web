import './sectionone.css'
import { FaCheckCircle } from "react-icons/fa";

const SectionOne = () => {
    return (
      <>
      <section className="sectionone">
        
        <div className="sectionone title">
          <h2>Hello.</h2>
          <h2>My name is Rian.</h2>
        </div>

        <hr className='sectionone title line'></hr>

        <div className="sectionone text">
          <p> I'm a computer science student at the Federal University of Bahia, and I'm starting my studies and career in programming, learning more and more concepts in the technology field every day.
          </p>
          <br></br>
          <p>
          At the moment, I'm a trainee in the selection process for the Junior Company "InfoJR", which is why I've put together this portfolio. For this project, I'm using Javascripit as the main programming language, with React as a library to help build animations and features, such as implementing dark mode on the site. As a "base" for the code, of course, there's HTML and CSS.
          </p>
          <br></br>
          <p>
          I've just turned 18, so I don't have any professional experience in tech, but I've been studying to improve my knowledge, networking and taking part in outreach projects.
          </p>
        </div>

        <div className="sectionone available">
          <FaCheckCircle className='checkcircle'/>

          <p>Available for work and general design.</p><a href='' className='a-contact'>Contact Me!</a>
        </div>

        <hr></hr>
      </section>
      </>
    )
}

export default SectionOne