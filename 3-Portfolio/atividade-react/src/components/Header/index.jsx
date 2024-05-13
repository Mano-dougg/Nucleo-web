import styles from './Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.navbar}>
            <div className={styles.itens_nav1}>
                <a className={styles.logo} href="#">Eder Natan</a>
                <a href="#">Section Segund</a>
                <a href="#">Section three</a>
                <a href="#">Section four</a>
            </div>
            <div >
                <ul className={styles.itens_nav2} >
                    <div className={styles.itens_img} >
                        <li><a href="#"><img src="/src/assets/img/twitter-icon.svg" alt="Twitter" /></a>
                            
                        </li>
                        
                        <li><a href="#"><img src="/src/assets/img/Vector(1).svg" alt="" /></a>
                        </li>
                        
                        <li><a href="#"><img src="/src/assets/img/instagram-icon.svg" alt="" /></a>
                    
                        </li>
                    </div>

                    <div className={styles.itens_dark}>
                        <li>Dark Mode : </li>
                            <div className={styles.itens_checkbox}>
                                <input type="checkbox" className={styles.checkbox} id='chk'/>
                                <label className={styles.label} >
                               
                                    <div className={styles.ball}></div>
                                     </label>
                            </div>
                    </div>
                    
                    
                    
                </ul>
            </div>
            

        </nav>

        </header>

    )
}

export default Header