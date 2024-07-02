import Image, { ImageProps } from "next/image";
import styles from "./SaleCard.module.css";

interface SaleCardProps {
  Name: string;
  Breads: number;
  Value: number;
  Icon: ImageProps['src'];
}

const SaleCard: React.FC<SaleCardProps> = ({Name, Breads, Value, Icon}) => {
  const Price = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits:2
  }).format(Value);

  const removePerson = () => {

  }

  return (
    <div className={styles.saleCard}>
      <div className={styles.saleInformation}>
        <div><span className={styles.bold}>{Name}</span></div>
        <div><span className={styles.bold}>Total de pães:</span> {Breads} pães</div>
        <div><span className={styles.bold}>Total a pagar:</span> R$ {Price}</div>
      </div>

      <Image className={styles.remove} src={Icon} alt="Remover" onClick={removePerson} />
    </div>
  );
}

export default SaleCard;