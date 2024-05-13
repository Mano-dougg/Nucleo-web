import './sectionone.css'
import { FaCheckCircle } from "react-icons/fa";
import RianLogo from "../../assets/Rian.jpg";

const SectionOne = () => {
    return (
      <>
      <section className="sectionone">
        
        <img className='sectionone-logo' src={RianLogo}/>
        <div className="sectionone title">
          <h2>Hello.</h2>
          <h2>My name is Rian.</h2>
        </div>

        <hr className='line'></hr>

        <div className="sectionone text">
          <p> I'm a <span>computer science student</span> at the <span>Federal University of Bahia</span>, and I'm starting my studies and career in programming, learning more and more concepts in the technology field every day.
          </p>
          <br></br>
          <p>
          Right now, <span>I'm a trainee</span> in the selection process for the <span>Junior Company "InfoJR"</span>, which is why I've put together this portfolio. For this project, I'm using <span>Javascript</span> as the <span>main programming language</span>, with <span>React</span> as a library to help build animations and features, such as implementing dark mode on the site. As a "base" for the code, of course, there's HTML and CSS.
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

        <hr className='secondline'></hr>
      </section>
      </>
    )
}

export default SectionOne