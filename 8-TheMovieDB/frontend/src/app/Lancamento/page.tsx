import Image from "next/image";
import "./lancamento.css";

export default function Lancamento() {

    return (
        <section className="lancamento-page">

            <div className="informacoes-movie">
                <h1>Inside Out 2</h1>
                <p>
                    Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, 
                    aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.
                </p>
                <p>Lançamento: 2024-06-11</p>
            </div>

            <div className="image-container">
                <Image src="/insideout.jpg" alt="Exemplo" width={827} height={424} />
            </div>
        </section>

    );
}