import './jogoForcaTeclado.css'
import  { useState } from 'react'

const teclas = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's',
    't', 'w', 'u', 'v', 'x', 'y', 'z'
]




export default function JogoForcaTeclado() {
        const [teclaClicada, setTeclaClicada] = useState<string[]>([]);

        const clickBotao = (letras: string) => {
            setTeclaClicada(prevTeclas => [...prevTeclas,letras]);
        }    
    return(
       
        <div className="teclado">
            {teclas.map((letras) => (
                <button className='botao_teclado' 
                key={letras}

                onClick={() => clickBotao(letras)}
                disabled ={teclaClicada.includes(letras)}

                style={{
                    backgroundColor: teclaClicada.includes(letras) ? 'gray' : 'rgba(242, 242, 242, 0.197)',
                    cursor: teclaClicada.includes(letras) ? 'not-allowed' : 'pointer',
                    opacity: teclaClicada.includes(letras) ? 0.1 : 1
                }}

                
                >{letras}</button>
            ))}

        </div>
        
    )
    }

