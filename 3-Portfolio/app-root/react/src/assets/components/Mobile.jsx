import LinkSection from "./nav-items/LinkSection"
import IconSection from "./nav-items/IconSection"
import ToggleSwitch from "./nav-items/ToggleSwitch"
import Section1 from "./content-items/Section1"
import Section2 from "./content-items/Section2"
import open from "./../icons/menu-open-icon.png"
import './../css-files/Mobile.css'
import './../css-files/nav-styles/IconSection.css'
import './../css-files/nav-styles/LinkSection.css'

export  default function Mobile () {
    return(
    <div className="container">
        <div className="nav">
            <div className="left-nav"> 
                <h1 className="name">Cristiano Santos</h1>
            </div>
            <div className="right-nav">
                <ToggleSwitch/>
            </div>
        </div> 
        <div className="content">
            <div className="menu-ribbon">
                <button className="menu-button" ><img className='menu-img' src={open}/></button>
                <div className="menu">
                    <LinkSection/>
                    <IconSection/>
                </div>
            </div>
            <Section1/>
            <Section2/>
        </div>
    </div>
    ) 
}