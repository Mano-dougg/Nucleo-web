import exampleImage from '../../assets/ImagePlaceholder-light.svg';
import s from './ProjectDescription.module.css';

export default function ProjectDescription({reverse = false}) {
    return(
        <div className={s.container} style={{flexDirection: reverse? 'row-reverse' :'row'}}>
            <div className={s.text}>
                <h2 className={s.title}>Title</h2>
                <p className={s.paragraphDescription}>
                    Leading, implementing and evolving engaging customer experiences and UI 
                    foundations for every touch-point across various platforms.
                </p>
                <button className={s.button}> Button Primary Light </button>
            </div>
            <div className={s.image}>
                <img src={exampleImage} />
            </div>

        </div>
    )
}