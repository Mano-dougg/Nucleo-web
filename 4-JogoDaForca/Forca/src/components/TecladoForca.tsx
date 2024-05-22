const TECLAS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "ç"
]


function TecladoForca() {
    return (
        <div className="tecladoTodo">
            {TECLAS.map(tecla => {
                return (
                    <button className="teclas" key={tecla}>
                        {tecla}
                    </button>
                )
            })}
        </div>
    );
}

export default TecladoForca;