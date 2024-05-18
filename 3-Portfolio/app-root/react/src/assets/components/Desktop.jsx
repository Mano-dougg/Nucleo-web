import LinkSection from "./nav-items/LinkSection"
import IconSection from "./nav-items/IconSection"
import ToggleSwitch from "./nav-items/ToggleSwitch"
import Section1 from "./content-items/Section1"
import Section2 from "./content-items/Section2"
import open from "./../icons/menu-open-icon.png"
import close from "./../icons/menu-close-icon.png"
import './../css-files/Desktop.css'
import { useState } from "react"

export  default function Desktop () {
    const [menu,setMenu] = useState(open)
    
    function handleClick () {
        if (menu == open){
            return setMenu(close)
        }
            return setMenu(open)
    }

    return(
    <div className="container">
        <div className="nav">
            <div className="left-nav"> 
                <h1 className="name">Cristiano Santos</h1>
                <LinkSection/>
            </div>
            <div className="right-nav">
                <IconSection/>
                <ToggleSwitch/>
            </div>
        </div> 
        <div className="content">
            <div className="menu-ribbon">
                <button className="menu-button" onClick={handleClick} ><img className='menu-img' src={menu}/></button>
                <div className="menu-show">
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
