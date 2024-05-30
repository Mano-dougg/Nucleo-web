import Header from "../Components/Header";
import Footer from "../Components/footer";
import Pages from "../Components/pageslinks";
import Image from "next/image";
import Robo from "../Components/imagens-paginas-Post-Autor/Robo.png"
import Autor from "../Components/imagens-paginas-Post-Autor/imagem-autor.png"
import "./post.css";
import Link from "next/link";


export default function Post(){
    return(
        <>
            <Header/>
            <Pages/>
            <div className="main-post">
                <h1>Incrível crescimento das IAs</h1>
                <div className="imagem-texto">
                    <section>
                        <h2>Incrível crescimento das IAs</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                            posuere, turpis cursus elementum commodo, lorem leo 
                            dignissim mi, eget tempus elit metus vel libero. Quisque
                            finibus, tellus nec tempor cursus, nisi lorem vulputate 
                            quam, eu sodales orci ligula et metus. Ut eget posuere
                            metus. Mauris porttitor consequat eros, nec 
                            porttitor libero egestas sed. Nullam laoreet enim ac risus semper 
                            convallis. Integer efficitur viverra purus, a bibendum 
                            magna commodo non. Aliquam tempus mauris scelerisque 
                            scelerisque vestibulum. Curabitur metus libero, 
                            ullamcorper a euismod a, maximus non felis. Praesent eget 
                            est venenatis, malesuada ipsum non, lacinia lorem. Proin 
                            malesuada ex luctus accumsan maximus.
                        </p>
                    </section>
                    <Image src={Robo} alt="imagem-robo"/>
                </div> 
            </div>

            <div className="main-post2">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo 
                    dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu 
                    sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. 
                    Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus 
                    mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est 
                    venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, 
                    tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, 
                    nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum 
                    magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, 
                    maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.
                    Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. 
                    Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur 
                    viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, 
                    ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus.
                </p>
            </div>

            <div className="imagens">
                <Image src={Robo} alt="imagem-robo"/>
                <Image src={Robo} alt="imagem-robo"/>
            </div>

            <div className="main-post3">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo 
                    dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu 
                    sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. 
                    Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus 
                    mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est 
                    venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero. Quisque finibus, 
                    tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, 
                    nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum 
                    magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, 
                    maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.
                    Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula et metus. Ut eget posuere metus. 
                    Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus semper convallis. Integer efficitur 
                    viverra purus, a bibendum magna commodo non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, 
                    ullamcorper a euismod a, maximus non felis. Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus.
                </p>
            </div>

            <div className="autor">
                <Link href="/Autor">
                    <Image src={Autor} alt="image-perfil-autor"/>
                </Link>
                <section>
                    <h1>Fulano das IAs</h1>
                    <h2>01/01/2024</h2>
                </section>
            </div>
            <Footer/>

        </> 
    )
}