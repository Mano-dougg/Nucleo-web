import placeholder from './imagesSection3/placeholder.png'
import styles from './Section3.module.css'

function Section3(){
    return(
        <>
        <section className={styles.section3}>
            <img className={styles.imgPlaceholder} src={placeholder} alt="" />
            <article>
                <div className={styles.center}>
                    <h4>Title</h4>
                </div>
                <p>
                        Leading, implementing and
                     evolving engaging customer
                     experiences and UI foundations
                     for every touch-point across
                     various platforms.
                </p>
                <div className={styles.center}>
                    <div className={styles.BtnPrimarylight}>
                        <h5>Button Primary Light</h5>
                    </div>
                </div>
                </article>
            </section>
        </>
    )
}

export default Section3