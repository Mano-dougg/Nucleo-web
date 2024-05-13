import figma from '../../../public/img/NavIcons/figma.svg'
import twitter from '../../../public/img/NavIcons/twitter.svg'
import instagram from '../../../public/img/NavIcons/instagram.svg'
import MobileNav from '../mobileNav'
import './style.css'

export default function Nav(){
    return(
        <>
        <nav>
          <div className="nav_links">
            <h1>Jaedson Barbosa Macedo</h1>
            <div className="nav_links-group">
                <a href="">Section two</a> 
                <a href="">Section three</a> 
                <a href="">Section four</a> 
            </div>
          </div>
          <div className="nav_actions">
          <div className="nav_actions-imgs">
                <img src={twitter} alt="Logo twitter" /> 
                <img src={figma} alt="Logo figma" /> 
                <img src={instagram} alt="Logo instagram" /> 
            </div>
            <p className='nav_actions-btn'>
                Dark mode:
                <div className="btn">
                    <div className="btn_circle"></div>
                </div>
            </p>
          </div>
        </nav>
       <MobileNav></MobileNav>
        </>
    )
}