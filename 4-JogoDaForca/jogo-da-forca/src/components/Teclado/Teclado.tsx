import './Teclado.css'

const teclas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function Teclado(){

    return(
        <div className='mae'>

            {teclas.map((letra) => (
                
                <button id='teclas' key={letra}> {letra} </button>
            ))}


        </div>
    )

}

export default Teclado