import styles from "./page.module.css";
import { getServerSession } from "next-auth"
import OptionsButton from "./components/OptionsButton/OptionsButton";

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className={styles.main}>
      <div className={styles.mainCardOptions}>
        <h1>
          Olá{session? ", " + session.user?.name:", visitante"}
        </h1>
          <OptionsButton />
      </div>
    </main>
  );
}
