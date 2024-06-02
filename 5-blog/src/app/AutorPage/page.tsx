import BigMiniRobot from './imgAutor/BigMiniRobot.png'
import instaIconBlack from './imgAutor/InstaIconBlack.png'
import linkdinIconBlack from './imgAutor/LinkedinIconBlack.png'
import githubIconBlack from './imgAutor/GithubIconBlack.png'
import arrowLeft from '../../Components/Post/ImgPost/ArrowLeft.png'
import arrowRight from '../../Components/Post/ImgPost/ArrowRight.png'
import Image from 'next/image'
import Post from '../../Components/Post/Page'
import { CaroulselRow } from '@/Components/CaroulselSwiper/Page'
import Link from 'next/link'
import styles from './Page.module.css'

export default function AutorPage() {
    return(
        <article className={styles.pageAutor}>
        <section>
            <h1> Fulano das IAs </h1>
        </section>
        <section className={styles.presentationContent}>
            <article>
            <Image
                src={BigMiniRobot}
                width={352}
                height={350}
                alt="Picture of a BigMiniRobot"
                />
            </article>
            <article className={styles.textPresentationContent}>
                <div>
                <p style={{maxWidth: '675px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis
                    cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus
                    vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam,
                    eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor
                    consequat eros, nec porttito libero egestas sed. Nullam laoreet enim ac risus
                    semper convallis. Integer efficitur viverra purus, a bibendum magna commodo
                    non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur
                    metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est
                    venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus
                    accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In posuere, turpis cursus elementum commodo.
                </p>
                </div>
                <div className={styles.icons}>
                    <a target="_blank" href="https://www.instagram.com/p/C7hoJrLPztV/?utm_source=ig_web_copy_link&img_index=2">
                        <Image 
                            src={instaIconBlack}
                            width={50}
                            height={50}
                            alt="Picture of an instaIconBlack"
                            />
                    </a>    
                    <a target="_blank" href="https://www.linkedin.com/feed/">
                        <Image
                            src={linkdinIconBlack}
                            width={50}
                            height={50}
                            alt="Picture of a linkdinIconBlack"
                            />
                    </a>
                    <a target="_blank" href="https://github.com">
                        <Image
                            src={githubIconBlack}
                            width={50}
                            height={50}
                            alt="Picture of a githubIconBlack"
                            />
                    </a>
                </div>
            </article>
        </section>
        <section>
            <p style={{maxWidth: '1120px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo
                dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu
                sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed.
                Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam
                tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis.
                Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi,
                eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci
                ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet
                enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris
                scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget
                est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus
                elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus.
                Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus
                semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque
                vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis,
                malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. 
            </p>
        </section>
        <section>
            <h1> Mais do Autor </h1>    
        </section>        
        <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px'}}>
               <div className={styles.arrows}>
                  <Image
                     src={arrowLeft}
                     width={30}
                     height={60}
                     alt="Image of a small robot"
                     />
               </div>
               <div className={styles.post1}>
                  <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
               </div>
               <div className={styles.post2}>
                  <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
               </div>
               <div>
                  <Post widthPost={302} heightPost={430} flexPost={'column'} widthImg={302} heightImg={156} />
               </div>
               <div className={styles.arrows}>
                  <Image
                     src={arrowRight}
                     width={30}
                     height={60}
                     alt="Image of a small robot"
                     />
               </div>
            </section>
        </article>
    )
}