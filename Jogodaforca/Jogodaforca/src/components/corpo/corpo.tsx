import { Link } from 'react-router-dom'
import Botao2 from '../Botao2/botao2'
import styles3 from './corpo.module.css'
import excl from '/excl.svg'
import { useState } from 'react';


function Corpo(){
  const [nome, setnome] = useState<string>('');

  const mudando = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setnome(event.target.value);
  };

  const btn = () => {
    if (nome.length<=8){
    console.log('Textarea value:', nome);
    alert(`Textarea value: ${nome}`);
    }
    else{
        alert(`Insira novamente`)
        window.location.reload()
    }
  };
    return(
        <>
        <div className={styles3.div}>
            <h1>Digite uma palavra ou frase</h1>
            <textarea wrap="soft"  value={nome} onChange={mudando} ></textarea>
            <figure className="exla">
                <img src={excl}/>
                <h2 className="me">Máx. de 8 letras</h2>
            </figure>
        </div>
            <Link to={'/pag3'}>
                <Botao2 onButtonClick={btn} backgroundColor="#0A3871" text0="Salvar e começar"></Botao2>
            </Link>
            <Link to={'/pag2'}>
                <Botao2 onButtonClick={btn}  backgroundColor="white" text0="Cancelar"></Botao2>
            </Link>
        </>
    )
}

export default Corpo