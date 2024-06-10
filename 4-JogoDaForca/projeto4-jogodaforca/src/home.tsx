import './App.css'

const Home = () => {

    return (
  
     <div className="main">
        <div>
          <h2>Olá! <br/>
              Bem vindo ao Jogo da Forca!
           </h2>
  
           <h4>Aqui você será responsável por algumas coisas: <br/>
            1. Escolha um texto que te agrade e uma palavra dele será sorteada!<br/>
            2. Torça para sorte te acompanhar nas tentativas... <br/>
            3. Se divirta! :)
           </h4>
        </div>
  
  
        <div>
          <a className="btn_home" href="/texto">Começar a Jogar</a>
        </div>   

  
        </div> 
  
    )
  }
  
  export default Home;
  