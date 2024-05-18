import { TwitterFill, FigmaFill, InstagramFill } from 'akar-icons'
import styles from './Header.module.css';

function toggleDarkTheme() {
  document.body.classList.add('dark');
}

export function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_left}>
        <span className={styles.brand}>Brian Lucas</span>
        <ul className={styles.nav_links}>
          <li><a href="#" className={styles.nav_link}>Section two</a></li>
          <li><a href="#" className={styles.nav_link}>Section three</a></li>
          <li><a href="#" className={styles.nav_link}>Section four</a></li>
        </ul>
      </div>
      <div className={styles.navbar_right}>
        <div className={styles.social_links}>
          <a href="#" className={styles.social_link}><TwitterFill size={20} /></a>
          <a href="#" className={styles.social_link}><FigmaFill size={20}  /></a>
          <a href="#" className={styles.social_link}><InstagramFill size={20}  /></a>
        </div>
        <span className={styles.theme_toggle}>Dark mode: <button id={styles.togglebutton} onClick={toggleDarkTheme}>Toggle</button></span>
      </div>
    </nav>
  );
}