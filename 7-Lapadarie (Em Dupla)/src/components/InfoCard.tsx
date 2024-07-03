import Image, { ImageProps } from "next/image";
import styles from "./InfoCard.module.css";

interface InfoCardProps {
  Text: string;
  Icon: ImageProps['src'];
  Value: string;
  Highlight?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({Text, Icon, Value, Highlight}) => {
  return (
    <div className={`${styles.infoCard} ${Highlight? styles.highlight : ''}`}>
      <div className={styles.name_icon}>
        <span>{Text}</span>
        <Image src={Icon} alt={Text} />
      </div>
      <div className={styles.value}>
        <span>{Value}</span>
      </div>
    </div>
  );
}

export default InfoCard;