import ImagemCard2 from "../Components/imagens-cards/imagem-card2.png"
import Image from "next/image"

export default function Card2 (){
    return(
        <div className="card2">
            <Image src={ImagemCard2} alt="imagem-ia"/>
            <div className="titulo-texto">
                <h1>Notícia de muito importante </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In posuere, turpis cursus elementum commodo, lorem leo
                    dignissim mi, eget tempus elit metus vel libero.
                </p>
            </div>
        </div>
    )
}