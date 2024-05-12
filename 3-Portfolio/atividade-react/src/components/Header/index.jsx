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
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABj0lEQVRIS7WVi1HDMBBEkw6gAkwHUEFMBSQVEDqAChIqgA6SDiAVJB1AB5gKoAT2ZXQzZ6NI8mDfzI5/0u3e6iRPJyPHdOT8kxzBmQQshTthJ6z7CkoR1Er2KkBC/AjnQxGgdBWSNbpWwodwPQTBPChH8ZMAAZUchJv/EmDHZ7DlUdcX4Up4H8qiZyV6EN6ERVAL6fcQBD4RVuC5xV43tWBVFTvlu8isiC3mUhk3YT0ui7NroCfAGizCd5R2g3VAhLcvy+UJUIjSe2EbmVnpHQ1A8B0RdFoyPIEtcMrnWtlYD4LkjKWik0SewPo/ZwE2sS+oyKLRDWvHO5qFHEebPUHfdmTNbgWq6gaEx2bonkV4jIq+7QgJArGZ+ZwA6xgBA/EYTzl3UFIa1oWtubHT1LoJT9nNJSQIs5O3VX2MgFKpgsUkUnYxllMX9cSfPZT6H1glTKRsOuNLoDLIZ+EKCd/xHYJW5P5olA5R1Z3ong+6Z3M2sTE5ApvDHkH1hWCKqYaqqOhklBKkciS/jU7wC4SkVxmT1A2IAAAAAElFTkSuQmCC"/>
                                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABaElEQVRIS7WVgU0DMQxFrxvABrABI1w3gA06AkzAMQFlAroBbFBGYANuA9gA/pNsKck5zR3qWbJ6Spz/7e843XQr22Zl/G4pwa8lNPvc7EADPhvBIMC9/KeQsEZwobh7Oecyiyog6FH+Kd8GJCUG4K/yW0vqIQ2ICDhwlN/ICaaSU0bmz5bQnX7HFgH7kOzkB6ugt6pYx6nuyX6JHyw2A2djTpPJEMkALq1ZYYuAzN8MlYw/rCL0RhaMPrEeWosAcMAAR4bUXPt3LaJ9k8CvIIFO/KXvK/m1fCwQkOxbzlW+tL0JRlrB6gRRiS5R1EyXCP3pQ1OiKKDXIjOBOQnSeJP5Rn/68C8CDg1yrmlkDGE2uWVQ7RZ5lgc7wFRzLamIpjJoL0nmyEUse5nVngp/W5qDJLT0qZi8XRHBybcl0Cl9uybzUpMI3Sl5LABbzzU9yWRqTXKZ8Nn+cCqXpludoEZcXV8q0WKCPznTUBmdtucAAAAAAElFTkSuQmCC"/>
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