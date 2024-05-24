import profileImage from '../../assets/profileImage.jpg';
import checkIcon from '../../assets/check-circle-solid-light.svg';
import checkIconDark from '../../assets/check-dark.svg';
import s from './FirstPage.module.css';

export default function FirstPage({theme}) {

    return (
        <div className={s.container}>
            <img src={profileImage} alt="profile" className={s.profileImage} />
            <div className={s.title}>
                <h1 >
                    Hello.
                </h1>
                <h1> 
                    My name is Israel.
                </h1>
            </div>

            <div className={s.description}>
                <p>
                    I'm a Digital Product and UI Designer – creating digital experiences that
                    are intuitive for real people and making complex processes easy to use.
                </p>
                <p>
                    Right now, I'm Design Lead at <span className={s.blueText}>Holiday Extras</span>, covering all our digital 
                    platforms across a whole load of brands – leading a great team across <span className={s.blueText}>design</span>, UI engineering, accessibility and customer experience. I'm lucky 
                    to be part of a great team of designers, writers, engineers, PMs and data 
                    specialists – amongst others – testing, iterating and optimising our platforms 
                    and products.
                </p>
                <p>
                    I've got some <span className={s.blueText}>work on Dribbble</span>, some previous work at <span className={s.blueText}>Saga</span> and you 
                    can find me over on twitter and sometimes <span className={s.blueText}>on Medium too</span>. I also take <span className={s.blueText}>too many photos</span>.
                </p>
            </div>

            <div className={s.availableForWork}>
                <img src={theme === 'dark'? checkIconDark : checkIcon} alt='check icon' />
                <p>Available for work and general design goodness – <span className={s.blueText}>say hello</span></p>
            </div>
        </div>
    )
}