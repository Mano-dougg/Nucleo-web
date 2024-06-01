"use client";//torna o componente um "Client Component".

import Image from 'next/image';
import Logo from './img/logo.svg';
import Lupa from './img/lupa.svg';
import Sol from './img/sol.svg';
import styles from './header.module.css';
import {useState} from 'react';
import Link from 'next/link';


export default function Cabecalho(){
    const [pesquisa, setPesquisa] = useState('');

    const barraPesquisa = (event) =>{ //evento de mudança que acontece ao entrar dados.
        setPesquisa(event.target.value);
    };

    const barraPesquisaSubmit = (event) => { //evento de formulário.
        event.preventDefault();
        console.log('Pesquisa:', pesquisa );
    };

    return(
        <div className={styles.cabecalho}>

            <Link href='/'><Image className={styles.logo} src={Logo} alt="Logo" /></Link>

            <div className={styles.elements}>
                <form className={styles.formPesquisa} onSubmit={barraPesquisaSubmit}>
                    <input
                        type="text"
                        value={pesquisa}
                        onChange={barraPesquisa}
                        placeholder="Pesquisar"
                        className={styles.inputPesquisa}
                    
                    />
                    <Image className={styles.lupa} src={Lupa} alt="Lupa" />
                    
                </form>
                <Image className={styles.sol} src={Sol} alt="Sol" />
            </div>

        </div>
    )
}