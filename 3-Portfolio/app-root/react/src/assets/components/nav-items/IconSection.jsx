import './../../css-files/nav-styles/IconSection.css'
import twitter from "./../../icons/twitter-icon.png"
import figma from "./../../icons/figma-icon.png"
import instagram from "./../../icons/instagram-icon.png"

const icon = {
    twitter: twitter,
    figma: figma,
    instagram: instagram
}

export default function IconSection () {
    return(
    <div className='icons'>
        <img className= "img" src={icon.twitter} />
        <img className= "img" src={icon.figma} />
        <img className= "img" src={icon.instagram}/>
    </div>
    )
}