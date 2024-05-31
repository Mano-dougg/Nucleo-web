import Image from "next/image";
const Card = () => {
    return(
        <div className="card">
            <h2>Notícia muito importante</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere, turpis cursus elementum commodo, lorem leo dignissim mi, eget tempus elit metus vel libero.</p>
            <div className="pessoal">
                <Image
                src="/fulano.svg"
                width={44}
                height={44}
                alt="fulano"
                />
                <div className="descricao">
                    <p>Fulano das IAs</p>
                    <p>01/01/2024</p>
                </div>
                <button className="compartilhar">
                    <Image
                    src="/share.svg"
                    width={32}
                    height={32}
                    alt="compartilhar"
                    />
                </button>
            </div>
        </div>
    )
}
export default Card;