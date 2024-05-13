import placeholder from './imagesSection4/placeholder.png'
import styles from './Section4.module.css'

function Section4() {
    return(
        <>
        <section className={styles.section4}>
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
            <img className={styles.imgPlaceholder} src={placeholder} alt="" />
        </section>
        </>
    )
    
}

export default Section4