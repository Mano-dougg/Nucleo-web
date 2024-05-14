import chekIcon from '../../../../public/img/Main/HeaderIcons/checkIcon.svg'
import jaedson from '../../../../public/img/Main/HeaderIcons/jaedson.jpg'
import './style.css'

export default function Header() {
  return (
    <header>
      <div className="header_userInfo">  
      <img src={jaedson} alt="" className="header_img"/>
      <h1 className="header_title">
        Hello.
        <br />
        My name is Jaedson.
      </h1>
      </div>
      <hr className="row"/>
      <p className="header_textContainer">
        <p className='header_text'>I am a Digital Product and UI Designer – creating digital experiences
        that are intuitive for real people and making complex processes easy to
        use.</p>
        <br />
        <p className='header_text'>Right now, I am Design Lead at <span>Holiday Extras</span>, covering all
        our digital platforms across a whole load of brands – leading a great
        team across <span>design</span>, UI engineering, accessibility and
        customer experience. I am lucky to be part of a great team of designers,
        writers, engineers, PMs and data specialists – amongst others – testing,
        iterating and optimising our platforms and products.
        </p>
        <br />
        <p className='header_text'>I`ve got some <span>work on Dribbble</span>, some previous work at
        <span>Saga</span> and you can find me over on twitter and sometimes
        <span>on Medium too</span>. I also take <span>too many photos</span>.</p>
      </p>

      <div className='header_checkIcon'>
        <img src={chekIcon} alt="" className="header_checkIcon-img"/>
        <p className="header_text">Available for work and general design goodness – <span>say hello</span></p>
      </div>
    </header>
  );
}
