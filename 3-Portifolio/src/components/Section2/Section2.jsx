import styles from './Section2.module.css'

function Section2(){
    return(
        <>
        <section className={styles.Section2}>
            <hr />       
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