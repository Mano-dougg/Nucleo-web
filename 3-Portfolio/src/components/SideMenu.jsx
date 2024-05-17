import styles from './SideMenu.module.css';
import { TwitterFill, FigmaFill, InstagramFill } from 'akar-icons';

// eslint-disable-next-line react/prop-types
export function SideMenu({ menuOpen }) {
  return (
    <>
      <aside className={menuOpen ? styles.sideMenuOpen : styles.sideMenuClosed}>
        <div className={styles.menuContainer}>
          <ul className={styles.navLinks}>
            <li><a href="#" className={styles.nav_link}>Section two</a></li>
            <li><a href="#" className={styles.nav_link}>Section three</a></li>
            <li><a href="#" className={styles.nav_link}>Section four</a></li>
          </ul>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.social_link}><TwitterFill size={20} /></a>
            <a href="#" className={styles.social_link}><FigmaFill size={20} /></a>
            <a href="#" className={styles.social_link}><InstagramFill size={20} /></a>
          </div>
        </div>
      </aside>
    </>

  );
}
