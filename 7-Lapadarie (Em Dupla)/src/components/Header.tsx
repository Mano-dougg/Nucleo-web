import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "@/assets/Logo.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={Logo} priority={true} alt="La Padarie - Ron Pão | Pão Pão" />
    </header>
  );
}
