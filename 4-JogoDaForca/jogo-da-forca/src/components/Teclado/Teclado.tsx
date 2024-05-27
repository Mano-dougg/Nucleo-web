import styled from 'styled-components'
import './Teclado.css'
import { useState } from 'react'

const teclas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

interface tecladoProps{
    teclasAtivas: string[]
    teclasInativas: string[]
    adcLetras: (letra: string) => void
}

const Button = styled.button<{isActive: boolean}>`
    opacity: ${(l) => (l.isActive ? 'null' : '0.3')};
    background-color: rgb(235, 225, 245);
    font-size: 30px;
    text-transform: uppercase;
    color: purple;
    border-radius: 8px;
    border: 0px;
    outline: none;

    &:hover{
        background-color: ${(l) => (l.isActive ? 'blueviolet' : 'rgb(235, 225, 245)')};
        color: ${(l) => (l.isActive ? 'white' : 'purple')};
        cursor: ${(l) => (l.isActive ? 'pointer' : 'not-allowed')};
        transition: 10ms;
    }
`

function Teclado({teclasAtivas, teclasInativas, adcLetras}: tecladoProps){

    const [botao, setBotao] = useState('teclas')

    function teste() {

    }

    return(
        <div className='mae'>

            {teclas.map((letra) => {
                const ativo = !teclasAtivas.includes(letra)
                const inativo = !teclasInativas.includes(letra)

                return(
                    <Button onClick={() => adcLetras(letra)} isActive={ativo && inativo} key={letra}> {letra} </Button>
                )
            }
            ) }


        </div>
    )

}

export default Teclado