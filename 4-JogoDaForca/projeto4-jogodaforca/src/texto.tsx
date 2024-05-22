import './App.css'
 


const Texto = () => {

  return (

  <div className='div_texto'>
    <div className="texto">
        <input type="text" id="texto_sorteio" className='texto_sorteio' placeholder='Digite aqui sua frase ou texto escolhido:'></input>
    </div>
    <div className='buttons'>    
        <a href="/forca"><button id="btn_sortear" className="btn_sortear" /*onclick={sortearPalavra()}*/>Salvar e Começar</button></a>
        <a className="btn_home" href="/">Cancelar</a>
    </div>
  </div>
  )
}

export default Texto;
