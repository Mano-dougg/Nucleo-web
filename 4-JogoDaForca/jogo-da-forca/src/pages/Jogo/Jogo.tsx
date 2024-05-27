import './Jogo.css'
import Boneco from "../../components/Boneco/Boneco"
import Palavra from "../../components/Palavra/Palavra"
import Teclado from "../../components/Teclado/Teclado"
import { useEffect, useState } from 'react'
import Placar from '../../components/Placar/Placar'

const palavras = ['info', 'jr']

function Jogo(){

    const adc = localStorage.getItem('palavrinha')

    if (adc?.trim() && adc?.length <= 8){
      palavras.push(adc)
      localStorage.setItem('palavrinha', '')
    }

   const [word, pegarWord] = useState(() => {
    return( 
      palavras[Math.floor(Math.random() * palavras.length)] )
   })

   const [Certas, pegarCertas] = useState<string[]>([])


   const letrasIncorretas = Certas.filter((letra) => !word.includes(letra))


  //  teclado

  function adcLetras(letr: string){
    if (Certas.includes(letr)) return

    pegarCertas((Certas) => [... Certas, letr])
  }

  useEffect(()=>{

    const handler = ((e: KeyboardEvent) => {

      const key = e.key

      if(!key.match(/^[a-z]$/)) {
        return
      } 
      e.preventDefault()

      adcLetras(key)

    })

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [Certas])





    return(
        <div className='final'>
          <Boneco numeroTentativas={letrasIncorretas.length}/>
          <Palavra mostrarLetra={Certas} palavra={word} />
          <div className='teclado'>
            <Teclado teclasAtivas={Certas.filter((letr) => word.includes(letr))}
            teclasInativas={letrasIncorretas}
            adcLetras={adcLetras}/>
          </div>


          <Placar ativo={true}></Placar>
        
        </div>
    )
    
}


export default Jogo