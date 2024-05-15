import styles from './Section2.module.css'

function Section2(){
    return(
        <>
        <section id='Section2' className={styles.Section2}>
            <hr className={styles.hrSection2} />       
            <div className={styles.divTitle}>
                <h2>Title</h2>
            </div>
            <p>
                    Line of copy in here to decribe this section. Line of copy in here to decribe this section.Line of copy in here to decribe
                <br /> this section. Line of copy in here to decribe this section. 
            </p>
        </section>
        </>
    )
}

export default Section2