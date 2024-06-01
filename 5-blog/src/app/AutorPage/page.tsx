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

export default function AutorPage() {
    return(
        <article style={{ marginTop: '36px', display:'flex', flexDirection: 'column', alignItems:'center', gap: '32px', padding: '0px 11.11% 0px 11.11%'}}>
        <section>
            <h1> Fulano das IAs </h1>
        </section>
        <section style={{display: 'flex'}}>
            <article>
            <Image
                src={BigMiniRobot}
                width={352}
                height={350}
                alt="Picture of a BigMiniRobot"
                />
            </article>
            <article style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
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
                <div style={{display: 'flex' , gap: '32px'}}>
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
        <section style={{display: 'flex', alignItems: 'center',gap: '32px'}}>
              <CaroulselRow/>
        </section>
        </article>
    )
}