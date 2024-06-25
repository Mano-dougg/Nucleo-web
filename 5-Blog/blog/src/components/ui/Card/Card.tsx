import Link from "next/link";
import Image from "next/image";
import { Carde, Text, CardTextContent } from "./style";

interface CardProps {
  CardTitulo: string;
  CardDescricao: string;
  CardImage: string;
  CardLink:string;
}

const Card: React.FC<CardProps> = ({
  CardTitulo,
  CardDescricao,
  CardImage,
  CardLink
}) => {
  return (
    <Link href={CardLink}>
      <Carde>
        <CardTextContent>
          <span>AUGust 13, 2021</span>
          <Text>
            <h3>{CardTitulo}</h3>
            <p>{CardDescricao}</p>
          </Text>
        </CardTextContent>
        <img src={CardImage} alt="" />
      </Carde>
    </Link>
  );
};

export default Card;
