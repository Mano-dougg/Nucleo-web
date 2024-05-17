import LinkSection from "./nav-items/LinkSection"
import IconSection from "./nav-items/IconSection"
import ToggleSwitch from "./nav-items/ToggleSwitch"
import Section1 from "./content-items/Section1"
import Section2 from "./content-items/Section2"
import close from "./../icons/menu-close-icon.png"
import open from "./../icons/menu-open-icon.png"
import './../css-files/Mobile.css'

const menu_icon = {
    closed: close,
    opened: open
}

export  default function Mobile () {
    let show_icon = document.querySelector('div.icons')
    let show_links = document.querySelector('div.links')
    let trigger = document.querySelector('img#menu-icon')
    show_icon.style.display = 'none'
    show_links.style.display = 'none'
    trigger.src = menu_icon.closed
    function handleMenu (){
        if (trigger.src == menu_icon.closed) {
            show_icon.style.display = 'flex'
            show_links.style.display = 'flex'
            trigger.src = menu_icon.opened      
        }
            show_icon.style.display = 'none'
            show_links.style.display = 'none'    
    }

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
                <button className="menu-button" onClick={handleMenu}><img id="menu-icon" src={menu_icon.closed}/></button>
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