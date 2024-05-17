import facebookLogo from '../assets/img/facebook.svg'
import twitterLogo from '../assets/img/twitter.svg'
import instagramLogo from '../assets/img/instagram.svg'

function UlSection() {
    return (
        <ul>
            <li><a href="">Section two</a></li>
            <li><a href="">Section three</a></li>
            <li><a href="">Section four</a></li>
        </ul>
    )
}

function UlSocialMedia() {
    return (
        <ul>
            <li><img src={twitterLogo} alt="logo do twitter" /></li>
            <li><img src={facebookLogo} alt="logo do facebook" /></li>
            <li><img src={instagramLogo} alt="logo do instagram" /></li>
        </ul>
    )
}

export { UlSection, UlSocialMedia }