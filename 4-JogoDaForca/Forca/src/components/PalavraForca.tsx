type PalavraProps = {
    chutes: string[]
    palavra: string
    perdeu?: boolean
}

function PalavraForca({palavra, chutes, perdeu=false}: PalavraProps) {
    return (
        <div className="palavraEscolhida">
            {palavra.split("").map((letra, index) => {
                return <span style={{borderBottom: ".12em solid var(--primario)"}} key={index}>
                    <span style={{
                        visibility: chutes.includes(letra) || perdeu
                        ? "visible"
                        : "hidden",
                        color: !chutes.includes(letra) ? "red" : "var(--primario)"
                    }}>{letra}</span>
                </span>
            })}
        </div>
    );
}

export default PalavraForca;