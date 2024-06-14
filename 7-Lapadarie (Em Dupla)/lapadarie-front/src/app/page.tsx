import Image from "next/image";
import styles from "./page.module.css";
import Order from "./order";
import Topcontent from "./top-content";

export default function Home() {
  return (
    <main>
      <>
        <div className={styles.top}>
        <Topcontent />
        </div>
        <div className={styles.bottom}>
        <Order nome="matheus dias" quantidade={5}/>
        </div>
      </>
    </main>
  );
}
