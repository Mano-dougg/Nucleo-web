import {Base, BracoDireito, BracoEsquerdo, Corpo, Forca, Haste, Head, PernaDireita, PernaEsquerda, Topo, Perdeu } from "./hangman.ts"

const partesCorpo = [Head, Corpo, BracoDireito, BracoEsquerdo, PernaDireita, PernaEsquerda ]

interface HangmanProps{
    letrasErradas: string[];
}

let lost = 0;

export const incrementLost = () => {
    lost += 1;
};

function Hangman({letrasErradas} : HangmanProps){

    const letrasUnicas = new Set(letrasErradas);
    const numeroDeTentativas = letrasUnicas.size;
    if (numeroDeTentativas > 6){
        incrementLost();}

    return (
        <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '60px',
        }}>
            {partesCorpo.slice(0, numeroDeTentativas).map((ParteCorpo, index) => {
                if (numeroDeTentativas > 6){
                    incrementLost();
                    return(
                        <Perdeu >
                            <h3>Você perdeu!</h3>
                        </Perdeu>
                    )
                    
                }
                else{
                    return <ParteCorpo key={index}/>
                }  
            })}

            <Forca />
            <Topo />
            <Haste />
            <Base />
        </div>
    )
}

export default Hangman;
export { lost };