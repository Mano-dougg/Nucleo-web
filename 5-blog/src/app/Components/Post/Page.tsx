import robot from './ImgPost/Robot.png'
import miniRobot from './ImgPost/MiniRobot.png'
import share from './ImgPost/Share.png'
import Image from 'next/image'
import styles from './Page.module.css'
import { Hedvig_Letters_Sans } from 'next/font/google'

interface PostProps {
    widthPost: number,
    heightPost: number,
    flexPost: string,
    padding: number[],
    widthImg: number,
    heightImg: number,
}

export default function Post({widthPost, heightPost, flexPost, padding, widthImg, heightImg}: PostProps) {
    return(
        <>
        <section className={styles.post} style={{width: widthPost, height: heightPost, flexDirection: flexPost,  padding: `${padding}px` }}>
            <section className={styles.mainPost}>
                <article className={styles.textPost}>
                    <h2>Notícia muito importante </h2>
                    <p className={styles.paragPost}>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. In posuere, turpis cursus elementum commodo,
                        lorem leo dignissim mi, eget tempus elit metus vel libero.
                    </p>
                </article>
                <article className={styles.articleFulano}>
                    <aside className={styles.asideFulano}>
                        <div className={styles.divFulano}>
                            <Image
                            src={miniRobot}
                            width={44}
                            height={44}
                            alt="Image of an small robot"
                            />
                            <div>
                                <h4>Fulano das IAs</h4>
                                <p> 01/01/2024 </p>
                            </div>
                        </div>
                    </aside>
                    <aside>
                        <Image
                        src={share}
                        width={32}
                        height={32}
                        alt="Image of an small robot"
                        />
                    </aside>
                </article>
            </section>
            <section>
                <Image
                src={robot}
                width={widthImg}
                height={heightImg}
                alt="Image of an small robot"
                />
            </section>
        </section>
        </>
    )
}