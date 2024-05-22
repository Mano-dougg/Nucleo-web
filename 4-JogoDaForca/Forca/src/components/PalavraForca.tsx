type PalavraProps = {
    chutes: string[]
    palavra: string
}

function PalavraForca({palavra, chutes}: PalavraProps) {
    return (
        <div className="palavraEscolhida">
            {palavra.split("").map((letra, index) => {
                return <span style={{borderBottom: ".12em solid var(--primario)"}} key={index}>
                    <span style={{
                        visibility: chutes.includes(letra) ? "visible" : "hidden"
                    }}>{letra}</span>
                </span>
            })}
        </div>
    );
}

export default PalavraForca;