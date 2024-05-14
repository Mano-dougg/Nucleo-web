import placeholder from './imagesSection4/placeholder.png'
import styles from './Section4.module.css'

function Section4() {
    return(
        <>
        <section className={styles.section4}>
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
            <img className={styles.imgPlaceholder} src={placeholder} alt="" />
        </section>
        </>
    )
    
}

export default Section4