import placeholder from './imagesSection3/placeholder.png'
import styles from './Section3.module.css'

function Section3(){
    return(
        <>
        <section className={styles.section3}>
            <img className={styles.imgPlaceholder} src={placeholder} alt="" />
            <article>
                <h4>Title</h4>
                <p>
                        Leading, implementing and
                    <br /> evolving engaging customer
                    <br /> experiences and UI foundations
                    <br /> for every touch-point across
                    <br /> various platforms.
                </p>
                <div className={styles.BtnPrimarylight}>
                    <h5>Button Primary Light</h5>
                </div>
                </article>
            </section>
        </>
    )
}

export default Section3