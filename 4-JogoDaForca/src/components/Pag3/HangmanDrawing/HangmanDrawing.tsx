import styles from './HangmanDraw.module.css';

interface HangmanDrawingProps{
    numberOfGuesses: number
}

const HeadMan = () => <div className={styles.headMan}></div>;
const BodyMan = () => <div className={styles.bodyMan}></div>;
const LeftArm = () => <div className={styles.leftArm}></div>;
const RightArm = () => <div className={styles.rightArm}></div>;
const LeftLeg = () => <div className={styles.leftLeg}></div>;
const RightLeg = () => <div className={styles.rightLeg}></div>;

const bodyParts = [HeadMan, BodyMan, LeftArm, RightArm, LeftLeg, RightLeg];

export const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
    return(
        <>
        <section className={styles.sectionHangman}>
            <div className={styles.horizontalLine}></div>
            <article className={styles.verticalLine}>
                <div className={styles.verticalBigLine}></div>  
                <div className={styles.verticalSmallLine}></div>
            {bodyParts.slice(0, numberOfGuesses).map((BodyPart, index) => {
                return <BodyPart key={index} />;
            })}
            </article>
            <div className={styles.base}></div>
        </section>    
        </>
    )
}


