import './jogoForcaDesenho.css'


interface JogoForcaDesenhoProps{
    numberOfGuesses: number
}


export default function JogoForcaDesenho({
    numberOfGuesses, 
} : JogoForcaDesenhoProps) {

    // Lista de partes do corpo
    const bodyParts = [
        'cabeca',
        'corpo',
        'braco_esquerdo',
        'braco_direito',
        'perna_esquerda',
        'perna_direita',
    ];

    return(
        <div className="out">
            {bodyParts.slice(0, numberOfGuesses).map((BodyParty, index) => (
                <div key={index} className={BodyParty}></div>
            ))}

            <div className="vertical_menor"></div>
            <div className="vertical"></div>
            <div className="horizontal"></div>
            <div className="base"></div>
        </div>

    )

}