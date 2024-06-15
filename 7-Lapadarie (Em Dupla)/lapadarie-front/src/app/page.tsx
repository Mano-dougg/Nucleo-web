import Image from "next/image";
import styles from "./page.module.css";
import Order from "./order";
import Topcontent from "./top-content";
import CriadorPedidos from "./criador";

export default function Home() {
  return (
    <main>
      <>
        <div className={styles.top}>
        <Topcontent 
        pedidos={1}
        total={3}
        />
        </div>
        <div className={styles.bottom}>
        <CriadorPedidos/>
        </div>
      </>
    </main>
  );
}
