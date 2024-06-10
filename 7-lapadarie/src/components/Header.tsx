import Image from "next/image";
import logoImage from '../../public/Logo.svg';
import ContentCard from "./ContentCard";
import queueImage from "../../public/queue.svg";
import marketImage from "../../public/market.svg";
import moneyImage from "../../public/money.svg"

export default function Header() {
    return (
        <header>
            <div className="logoContainer">
                <Image
                    src={logoImage}
                    alt="Imagem da Logo"
                    height={113}
                    width={155}
                />
            </div>
            <div className="contentCardContainer">
                <ContentCard 
                    queueText="Pessoas na fila" 
                    imageSrc={queueImage} 
                    imageAlt="Ícone de fila" 
                    numberText="7" 
                />
                <ContentCard 
                    queueText="Pães vendidos" 
                    imageSrc={marketImage} 
                    imageAlt="Ícone de atendimento" 
                    numberText="20" 
                />
                <ContentCard 
                    queueText="Entrada" 
                    imageSrc={moneyImage} 
                    imageAlt="Ícone de tickets" 
                    numberText="R$ 175,00" 
                    customClass="highlight"
                />
            </div>
        </header>
    );
}
