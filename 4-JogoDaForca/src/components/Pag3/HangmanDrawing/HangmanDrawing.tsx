
import styles from './HangmanDraw.module.css'

export const HangmanDrawing = () => {
    return(
        <>
        <section className={styles.sectionHangman}>
            <div className={styles.horizontalLine}></div>
            <article className={styles.verticalLine}>
                <div className={styles.verticalBigLine}></div>  
                <div className={styles.verticalSmallLine}></div>
                <div className={styles.headMan}></div>
                <div className={styles.bodyMan}></div>
                <div className={styles.rightArm}></div>
                <div className={styles.leftArm}></div>
                <div className={styles.rightLeg}></div>
                <div className={styles.leftLeg}></div>
            </article>
            <div className={styles.base}></div>
        </section>    
        </>
    )
}


