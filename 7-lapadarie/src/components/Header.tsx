import Image from "next/image";
import logoImage from '../../public/Logo.svg';
import ContentCard from "./ContentCard";
import queueImage from "../../public/queue.svg";
import marketImage from "../../public/market.svg";
import moneyImage from "../../public/money.svg";

interface HeaderProps {
  queueCount: number;
  totalBreads: number;
  totalPay: number;
}

export default function Header({ queueCount, totalBreads, totalPay }: HeaderProps) {
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
                    contentText="Pessoas na fila" 
                    imageSrc={queueImage} 
                    imageAlt="Ícone de fila" 
                    numberText={queueCount.toString()} 
                />
                <ContentCard 
                    contentText="Pães vendidos" 
                    imageSrc={marketImage} 
                    imageAlt="Ícone de atendimento" 
                    numberText={totalBreads.toString()} 
                />
                <ContentCard 
                    contentText="Entrada" 
                    imageSrc={moneyImage} 
                    imageAlt="Ícone de tickets" 
                    numberText={`R$ ${totalPay.toFixed(2)}`} 
                    customClass="highlight"
                />
            </div>
        </header>
    );
}
