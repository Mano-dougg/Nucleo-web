import './jogoForcaTeclado.css'
import styled from 'styled-components'


const teclas = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's',
    't', 'w', 'u', 'v', 'x', 'y', 'z'
]

interface JogoForcaTecladoProps{
    activeLetter: string[]
    inactiveLetters: string[]
    disabled?: boolean

}

const Button = styled.button<{isActive: boolean}>`
    opacity: ${(p)=> p.isActive ?'null': '0.3'};
    background-color: ${(p)=> p.isActive ?'rgba(242, 242, 242, 0.197)': 'gray'};
    cursor: default;
    
`
export default function JogoForcaTeclado({activeLetter, inactiveLetters, disabled=false}: JogoForcaTecladoProps) {
    return(
       
        <div className="teclado">
            {teclas.map((letras) => {
                const isActive = !activeLetter.includes(letras)
                const isInactive = !inactiveLetters.includes(letras)


                return(
                    
                <Button isActive={isActive && isInactive || disabled} className='botao_teclado' disabled>
                {letras}
                </Button>
                ) 
            } 
                )}

        </div> 
    )
    }
