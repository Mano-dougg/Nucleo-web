import { TwitterFill, FigmaFill, InstagramFill } from 'akar-icons'
import styles from './Header.module.css';
import { useState } from 'react';

function toggleDarkTheme() {
  document.body.classList.add('dark');
}

export function Header() {
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_left}>
        <span className={styles.brand}>Brian Lucas</span>
        <ul className={styles.nav_links}>
          <li><a href="#" className={styles.nav_link}>Link 1</a></li>
          <li><a href="#" className={styles.nav_link}>Link 2</a></li>
          <li><a href="#" className={styles.nav_link}>Link 3</a></li>
        </ul>
      </div>
      <div className={styles.navbar_right}>
        <div className={styles.social_links}>
          <a href="#" className={styles.social_link}><TwitterFill /></a>
          <a href="#" className={styles.social_link}><FigmaFill /></a>
          <a href="#" className={styles.social_link}><InstagramFill /></a>
        </div>
        <span className={styles.theme_toggle}>Dark mode: <button id={styles.togglebutton} onClick={toggleDarkTheme}>Toggle</button></span>
      </div>
    </nav>
  );
}