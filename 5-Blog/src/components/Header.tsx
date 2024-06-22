import Image from "next/image";
import LogoHeader from "@/assets/logo-ror2.png";

import styles from './Header.module.css'


export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/"><Image className={styles.image} src={LogoHeader} alt="" /></a>
      <nav className={styles.nav}>
        <ul className={styles.options}>
          <li><a href="/">HOME</a></li>
          <li><a href="/author">AUTHOR</a></li>
          <li><a href="/posts">POSTS</a></li>
        </ul>
      </nav>
    </header>
  );
}