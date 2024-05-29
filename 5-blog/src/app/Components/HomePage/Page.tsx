import astrounaut from './imgHome/Astronaut.png'
import Image from 'next/image'
import styles from './Page.module.css'
import Post from '../Post/Page'

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
                <h1> Últimas postagens </h1>
            </article>
            <article className={styles.lastPosts}>
                <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
                <Post widthPost={302} heightPost={370} flexPost={'column'} widthImg={302} heightImg={156} padding ={[34, 25]} />
            </article>
            <article style={{padding: 12, marginTop: 20}}>
                <h1> Mais Acessadas </h1>
            </article>
            <article className={styles.mostVisitedPosts}>
                <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding={[0, 0]} />
                <Post widthPost={543} heightPost={245} flexPost={'row-reverse'} widthImg={186} heightImg={245} padding={[0, 0]} />
            </article>
        </section>
        </>
    )
}