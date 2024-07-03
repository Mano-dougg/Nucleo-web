import axios from "axios";
import Image, { ImageProps } from "next/image";
import styles from "./SaleCard.module.css";

interface SaleCardProps {
  id: number;
  Name: string;
  Breads: number;
  Value: number;
  Icon: ImageProps['src'];
  onRemove: (id: number) => void;
}

const SaleCard: React.FC<SaleCardProps> = ({id, Name, Breads, Value, Icon, onRemove}) => {
  const Price = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits:2
  }).format(Value);

  const handleDelete = () => {
    onRemove(id);
  }
  return (
    <div className={styles.saleCard}>
      <div className={styles.saleInformation}>
        <div><span className={styles.bold}>{Name}</span></div>
        <div><span className={styles.bold}>Total de pães:</span> {Breads} pães</div>
        <div><span className={styles.bold}>Total a pagar:</span> R$ {Price}</div>
      </div>

      <Image className={styles.remove} src={Icon} alt="Remover" onClick={handleDelete} />
    </div>
  );
}

export default SaleCard;