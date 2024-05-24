import './Palavra.css'

function Palavra(){
    const palavra = "teste"

    const mostrarLetra = ['']

    return(
        <div className="centro">
            {palavra.split('').map((item, index) => ( 
                <span className='item' key={index}>
                    
                    <span style={{visibility: mostrarLetra.includes(item) ? 'visible' : 'hidden'}}>{item}</span>
                
                </span>
            ))}
        </div>
    )

}


export default Palavra