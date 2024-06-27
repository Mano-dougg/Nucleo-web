import './../../css-files/content-styles/IconSectionC.css'
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
    <div className='icons-c'>
        <img className= "img-c" src={icon.twitter} />
        <img className= "img-c" src={icon.figma} />
        <img className= "img-c" src={icon.instagram}/>
    </div>
    )
}