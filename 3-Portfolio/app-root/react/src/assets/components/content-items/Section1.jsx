import "./../../css-files/content-styles/Section1.css"
import avatar from "./../../images/avatar-img.jpg"
import Callout from "./Callout"
export default function Section1(){
    return(
    <>
        <div className="section1">
            <img  className ="avatar-fyp" src={avatar} alt="Avatar"/>
            <h1 className="main-title">Hello.</h1>
            <h2 className="subtitle">My name is Cristiano Santos.</h2>
            <span className="hr"></span>
            <div className="textf">
                <p>I am a Digital Product and UI Designer creating digital experiences that are intuitive for real people and making complex processes easy to use.
Right now, I am Design Lead at <strong>Holiday Extras</strong>, covering all our digital platforms across a whole load of brands leading a great team across <strong>design</strong>, UI engineering, accessibility and customer experience. I am lucky to be part of a great team of designers, writers, engineers, PMs and data specialists, amongst others, testing, iterating and optimising our platforms and products.
I have got some <strong>work on Dribbble</strong>, some previous work at <strong>Saga</strong> and you can find me over on twitter and sometimes <strong>on Medium too</strong>. I also take <strong>too many photos</strong>.</p>
            </div>
            <Callout/>
        </div>
    </>
    )
}