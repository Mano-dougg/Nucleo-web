import './navbar.css'
import TwitterIcon from "../../assets/twitter-icon.svg"
import FigmaIcon from "../../assets/figma-icon.svg"
import InstagramIcon from "../../assets/instagram-icon.svg"
import { FaTwitter } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";



const NavBar = () => {
    return (
    <>
        <nav className='nav'>
            <div className="left-aligned"> 
                <p>Rian Victor</p> 
                <div className="nav-links"> 
                    <ol className="nav-links list"> 
                        <li>Section Two</li> 
                        <li>Section Three</li>
                        <li>Section Four</li>
                    </ol>
                </div>
            </div>
            <div className="right-aligned">
                <div className="social-icons">
                    <a href=''><FaTwitter className='social-icons icon'/></a>
                    <a href=''><IoLogoFigma className='social-icons icon'/></a>
                    <a href=''><FaInstagram className='social-icons icon'/></a>
                </div>
            </div>
        </nav>
    </>
    )
}

  
export default NavBar