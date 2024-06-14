import Image from "next/image";
import styles from "./page.module.css";
import Order from "./order";
import Tophalfcontent from "./top-content";
import Tophalfcomplete from "./topcontent2";

export default function Home() {
  return (
    <main>
      <>
        <div className={styles.top}>
        <Tophalfcontent />
        </div>
        <div className={styles.bottom}>
        <Tophalfcomplete />
        <Order nome="matheus dias" quantidade={5}/>
        </div>
      </>
    </main>
  );
}
