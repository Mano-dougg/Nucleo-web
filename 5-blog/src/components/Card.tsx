import Image from "next/image"
import cardImage from "@/assets/imagem-cards.png"
import authorImage from "@/assets/imagem-autor.png"
import Tag from "./Tag"

export default function Card() {
    return (
        <div className="card">
            <div className="cardImage">
                <Image src={cardImage} alt="Imagem da notícia" width={337} height={186}></Image>
            </div>
            <Tag/>
            <div className="cardText">
                <h1>Que vontade de comer um bolo</h1>
                <p>Designer de jogos diz que comer um bolo de pote além de manter a consistência no trabalho auxilia na concentração</p>
            </div>
            <div className="cardAuthorContainer">
                <div className="cardAuthor">
                    <Image src={authorImage} alt="Foto do autor" width={32} height={32}></Image>
                    <p>Ruan correa</p>
                    <p>24/05/2024</p>
                </div>
            </div>

        </div>
    )
};
