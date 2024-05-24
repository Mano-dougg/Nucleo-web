export default function JogoForcaTeclado({activeLetter, inactiveLetters}: JogoForcaTecladoProps) {
        const [teclaClicada, setTeclaClicada] = useState<string[]>([]);

        const clickBotao = (letras: string) => {
            setTeclaClicada(prevTeclas => [...prevTeclas,letras]);
        }    
    return(
       
        <div className="teclado">
            {teclas.map((letras) => {
                const isActive = !activeLetter.includes(letras)
                const isInactive = !inactiveLetters.includes(letras)


                return(
                <button className='botao_teclado' 
                key={letras}

                onClick={() => clickBotao(letras)}
                disabled ={teclaClicada.includes(letras)}

                style={{
                    backgroundColor: teclaClicada.includes(letras) ? 'gray' : 'rgba(242, 242, 242, 0.197)',
                    cursor: teclaClicada.includes(letras) ? 'not-allowed' : 'pointer',
                    opacity: teclaClicada.includes(letras) ? 0.1 : 1
                }}

                
                >{letras}</button>)  
            })}

        </div>
        
    )
    }