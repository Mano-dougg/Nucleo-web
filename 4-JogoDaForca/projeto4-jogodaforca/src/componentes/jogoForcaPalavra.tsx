import './jogoForcaPalavra.css'

export default function JogoForcaPalavra() {
    const palavra = 'teste';
    const chute = ['t','e'];

    return(

        <div className="out_linha">
            <div className='linha'>
                {palavra.split("").map((letra, index) => (
                    <span 
                    style={{ borderBottom:"0.1em solid white" }}
                    key={index}
                    >

                    <span 
                    style={{ visibility: chute.includes(letra)? 'visible' : 'hidden' }}
                    >
                    {letra}
                    </span>

                    </span>
                ))}
        
            </div>
        </div>
        
    )

}