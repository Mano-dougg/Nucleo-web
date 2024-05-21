import {Base, BracoDireito, BracoEsquerdo, Corpo, Forca, Haste, Head, PernaDireita, PernaEsquerda, Topo } from "./script.ts"

function Hangman(){
    return (
        <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '60px',
        }}>
            <Head />
            <Corpo />
            <BracoEsquerdo />
            <BracoDireito />
            <PernaDireita />
            <PernaEsquerda />
            
            <Forca />
            <Topo />
            <Haste />
            <Base />
        </div>
    )
}

export default Hangman