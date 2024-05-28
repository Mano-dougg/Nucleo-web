import sun from './imgHeader/Sun.png'
import search from './imgHeader/Search.png'
import Image from 'next/image';
import styles from './Page.module.css'
import { Italianno } from 'next/font/google';

export default function Header() {
    return (
      <>
      <header className={styles.header}>
          <section>
            <h1 className={styles.h1Header}><strong>AI</strong><i>TODAY</i></h1>
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
            <Image
                src={sun}
                width={40}
                height={40}
                alt="Picture of a Sun"
              />
            </article>
          </section>
      </header>
      </>
    );
}
  