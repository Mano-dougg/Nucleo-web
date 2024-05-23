import {Base, BracoDireito, BracoEsquerdo, Corpo, Forca, Haste, Head, PernaDireita, PernaEsquerda, Topo } from "./script.ts"

const partesCorpo = [Head, Corpo, BracoDireito, BracoEsquerdo, PernaDireita, PernaEsquerda ]

interface HangmanProps{
    numeroDeTentativas: number
}

function Hangman({numeroDeTentativas} : HangmanProps){
    return (
        <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '60px',
        }}>
            {partesCorpo.slice(0, numeroDeTentativas).map((ParteCorpo, index) => {
                return <ParteCorpo key={index}/>
            })}
            
            <Forca />
            <Topo />
            <Haste />
            <Base />
        </div>
    )
}

export default Hangman