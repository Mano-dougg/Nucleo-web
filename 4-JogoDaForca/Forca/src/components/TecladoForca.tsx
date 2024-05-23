const TECLAS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "ç"
]

type TecladoProps = {
    desativa?: boolean
    letrasCorretas: string[]
    letrasIncorretas: string[]
    adicionaChute: (l: string) => void
}

function TecladoForca({desativa=false, letrasCorretas, letrasIncorretas, adicionaChute}:TecladoProps) {
    return (
        <div className="tecladoTodo">
            {TECLAS.map(tecla => {
                const taCorreto = letrasCorretas.includes(tecla)
                const taErrado = letrasIncorretas.includes(tecla)
                
                return (
                    <button onClick={() => adicionaChute(tecla)}
                    className={`teclas
                    ${taCorreto ? "correto" : ""}
                    ${taErrado ? "incorreto" : ""}
                    `} disabled={taCorreto||taErrado||desativa}
                    key={tecla}>
                        {tecla}
                    </button>
                )
            })}
        </div>
    );
}

export default TecladoForca;