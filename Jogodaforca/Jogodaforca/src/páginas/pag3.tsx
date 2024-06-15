import { KeyboardEvent, useEffect, useState } from 'react'
import './App.css'
import Icone from '../components/icone/icone'
import { Link } from 'react-router-dom';
import Hangman from '../components/Hangman-desen/Hangman';
import Escrever from '../components/Teclado/teclado';
import Botao2 from '../components/Botao2/botao2';
import PalavraESCRITA from '../components/palavra/palavra';
import Placar from '../components/placar/placar';


/* Buscando o store */

const bu = localStorage.getItem('textoSalvo')
const palavra = [
  'banana', 'abacaxi', 'laranja', 'lima', 'pera', 'uva', 'morte', 'morango', 'melancia', 'melao',
  'cachorro', 'gato', 'fortran', 'coelho', 'tartaruga', 'peixe', 'naruto', 'porco', 'cavalo', 'vaca',
  'mesa', 'cadeira', 'python', 'cama', 'forca', 'estante', 'escrever', 'prato', 'compra', 'banqueta',
  'carro', 'moto', 'php', 'dinheiro', 'joelho', 'java', 'barco', 'trem', 'react', 'trator',
  'azul', 'vermelho', 'amarelo', 'verde', 'roxo', 'laranja', 'preto', 'branco', 'cinza', 'marrom'
]
if (typeof bu==='string') {
  palavra.push(bu); 
}


/* Funções para o placar */

const vencidos = Number(localStorage.getItem('Venci')) 
const perdidos = Number(localStorage.getItem('Perdi')) 


function Pag3() {

  const [plvra, setPlvra] = useState(() => {
      return palavra[Math.floor(Math.random() * palavra.length)]
  })
  console.log(palavra)
  const[acertos,setAcertos] = useState<string[]>([])

  /* Funções usadas nos componentes */
  const erros = acertos.filter((word) => !plvra.includes(word))

  const mostra = [acertos.filter((word) => !plvra.includes(word))]

  const F = erros.length >= 6
  const Ganhamo = plvra.split('').every((word) => acertos.includes(word))

  function Wins() {
    const newVictoryCount = Number(vencidos) + 1;
    localStorage.setItem('Venci', newVictoryCount.toString());
  }
  
  function Loses() {
    const newDefeatCount = Number(perdidos) + 1;
    localStorage.setItem('Perdi', newDefeatCount.toString());
  }
  
  /* Função do teclado */

  function comteclado(speak: string){
    if (acertos.includes(speak)) return
    setAcertos((acertos)=>[...acertos, speak])
  }

  useEffect(()=>{
    const writer = ((e: KeyboardEvent) =>{
      const let1 = e.key

      if (!let1.match(/^[a-z]$/)) return

      e.preventDefault()
      comteclado(let1)
    }) as unknown as EventListener

    document.addEventListener('keypress', writer)
    return () => {
      document.removeEventListener('keypress', writer)
    }
  }, [acertos])

  useEffect(() => {
    if (Ganhamo) {
      Wins();
    } else if (F) {
      Loses();
    }
  }, [Ganhamo, F]); 

  return (
    <>
        <Icone/>
        {Ganhamo && <div className="win">Ganhamo fml</div>}
        {F && <div className="lose">F no Chat</div>}
        <Hangman tentativas ={erros.length}/>
        <PalavraESCRITA letras={acertos} valor={plvra}/>
        <Escrever escreva={comteclado}/>
        <div className='errado'>
        {mostra.map((erro, index) => (
        <div key={index}>{erro}</div>
        ))}
        </div>
        <div className="botao">
        <Link to={'/'}>
        <Botao2 onButtonClick={() => 0} backgroundColor="#0A3871" text0="Novo jogo"/>
        </Link>
        <Botao2 onButtonClick={() => window.location.reload()} backgroundColor="white" text0="Desistir"/>
        </div>
        <Placar vencer={vencidos} perder={perdidos}/>
    </>
  )
}

export default Pag3