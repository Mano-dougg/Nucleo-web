import astrounaut from './imgHome/Astronaut.png'
import Image from 'next/image'

export default function HomePage(){
    return(
        <>
        <section>
            <article>
                <h1>Sua dose diária de informação</h1>
            </article>
            <article>
                <div>
                    <h2>Incrível crescimento das IAs</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo,
                        lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus,
                        nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros,
                        nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus,
                        a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero,
                        ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. 
                        Proin malesuada ex luctus accumsan maximus. 
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