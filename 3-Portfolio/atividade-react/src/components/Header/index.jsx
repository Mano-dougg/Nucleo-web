/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <header className={darkMode ? `${styles.header} ${styles.dark}` : styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.itens_nav1}>
          <a className={styles.logo} href="#">
            Eder Natan
          </a>
          <a href="#section1">Section Segund</a>
          <a href="#section2">Section three</a>
          <a href="#">Section four</a>
        </div>
        <div>
          <ul className={styles.itens_nav2}>
            <div className={styles.itens_img}>
              <li>
                <a href="#">
                  <img
                    src="/src/assets/img/twitter-icon.svg"
                    alt="Twitter"
                    className={darkMode ? styles.iconDark : ''}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    src="/src/assets/img/Vector(1).svg"
                    alt=""
                    className={darkMode ? styles.iconDark : ''}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    src="/src/assets/img/instagram-icon.svg"
                    alt=""
                    className={darkMode ? styles.iconDark : ''}
                  />
                </a>
              </li>
            </div>

            <div className={styles.itens_dark}>
              <li>Dark Mode :</li>
              <div className={styles.itens_checkbox}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="chk"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <label className={styles.label} htmlFor="chk">
                  <div className={styles.ball}></div>
                </label>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
