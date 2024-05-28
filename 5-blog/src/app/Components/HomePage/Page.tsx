import astrounaut from './imgHome/Astronaut.png'
import Image from 'next/image'
import styles from './Page.module.css'

export default function HomePage(){
    return(
        <>
        <section className={styles.homePage}>
            <article>
                <h1>Sua dose diária de informação</h1>
            </article>
            <article className={styles.mainContent}>
                <div className={styles.textMainContent}>
                    <h2>Incrível crescimento das IAs</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        <br /> posuere, turpis cursus elementum commodo, lorem leo 
                        <br /> dignissim mi, eget tempus elit metus vel libero. Quisque
                        <br /> finibus, tellus nec tempor cursus, nisi lorem vulputate
                        <br /> quam, eu sodales orci ligula et metus. Ut eget posuere 
                        <br /> metus. Mauris porttitor consequat eros, nec porttitor
                        <br /> libero egestas sed. Nullam laoreet enim ac risus semper
                        <br /> convallis. Integer efficitur viverra purus, a bibendum
                        <br /> magna commodo non. Aliquam tempus mauris scelerisque
                        <br /> scelerisque vestibulum. Curabitur metus libero,
                        <br />ullamcorper a euismod a, maximus non felis. Praesent eget
                        <br /> est venenatis, malesuada ipsum non, lacinia lorem. Proin
                        <br /> malesuada ex luctus accumsan maximus. 
                    </p>
                </div>
                <div>
                    <Image
                    src={astrounaut}
                    width={544}
                    height={374}
                    alt="Image of an Astronaut"
                    />
                </div>
            </article>
            <article>
                <h1>Últimas postagens</h1>
            </article>
        </section>
        </>
    )
}