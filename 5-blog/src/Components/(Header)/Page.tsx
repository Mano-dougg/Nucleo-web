import search from './imgHeader/Search.png'
import Image from 'next/image';
import styles from './Page.module.css'
import { Italianno } from 'next/font/google';
import ThemeSwicher from '../ThemeSwicher/theme.swicher';
import Link from 'next/link';

export default function Header() {
    return (
      <>
      <header className={styles.header}>
          <section>
            <Link href="/HomePage">
            <h1 className={styles.h1Header}><strong>AI</strong><i>TODAY</i></h1>
            </Link>
          </section>
          <section className={styles.sectionBar}>
            <article className={styles.searchBar}>
              <input className={styles.inputSearchBar} type="search" placeholder='Pesquisar'/>
              <Image
                src={search}
                width={32}
                height={32}
                alt="Search Bar icon"
              />
            </article>
            <article>
            <ThemeSwicher/>
            </article>
          </section>
      </header>
      </>
    );
}
  