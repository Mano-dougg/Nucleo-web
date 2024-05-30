import Image from "next/image";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import Pages from "../Components/pageslinks";
import Robo2 from "../Components/imagens-paginas-Post-Autor/imagem-autor2.png"
import Instagram from "../Components/logos/instagram-autor.png"
import LinkedIn from "../Components/logos/linkedIn-autor.png"
import Github from  "../Components/logos/github-autor.png"
import "./autor.css"

export default function Autor(){
    return(
        <>
            <Header />
            <Pages />
            <div className="texto-autor">
                <h1>Fulano das IAs</h1>
                <div className="autor-text">
                    <Image src={Robo2} alt="imagem-perfil-autor"/>
                    <section>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis 
                            cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus 
                            vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, 
                            eu sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor 
                            consequat eros, nec porttitor libero egestas sed. Nullam laoreet enim ac risus 
                            semper convallis. Integer efficitur viverra purus, a bibendum magna commodo 
                            non. Aliquam tempus mauris scelerisque scelerisque vestibulum. Curabitur 
                            metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget est 
                            venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus 
                            accumsan maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In 
                            posuere, turpis cursus elementum commodo.
                        </p>
                        <div className="social-images">
                            <Image src={Instagram} alt="intagram-logo"/>
                            <Image src={LinkedIn} alt="linkedin-logo"/>
                            <Image src={Github} alt="github-logo" />
                        </div>
                    </section>
                </div>
            </div>
            <div className="paragrafo">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo 
                    dignissim mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu 
                    sodales orci ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. 
                    Nullam laoreet enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam 
                    tempus mauris scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. 
                    Praesent eget est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem 
                    ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim 
                    mi, eget tempus elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci 
                    ligula et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet 
                    enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris 
                    scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget 
                    est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus. Lorem ipsum dolor sit 
                    amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus 
                    elit metus vel libero. Quisque finibus, tellus nec tempor cursus, nisi lorem vulputate quam, eu sodales orci ligula 
                    et metus. Ut eget posuere metus. Mauris porttitor consequat eros, nec porttitor libero egestas sed. Nullam laoreet 
                    enim ac risus semper convallis. Integer efficitur viverra purus, a bibendum magna commodo non. Aliquam tempus mauris 
                    scelerisque scelerisque vestibulum. Curabitur metus libero, ullamcorper a euismod a, maximus non felis. Praesent eget
                    est venenatis, malesuada ipsum non, lacinia lorem. Proin malesuada ex luctus accumsan maximus.
                </p>
            </div>
            <Footer />
        </>
    )
}