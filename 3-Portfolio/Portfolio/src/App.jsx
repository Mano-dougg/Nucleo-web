import instagramLogo from './assets/instagram-img.svg'
import Twitter from './assets/twitter-img.svg'
import figma from './assets/figma-img.svg'
import eu from './assets/GabrielLeal.jpg'
import verificado from './assets/verificado-img.svg'
import x from './assets/X-img.svg'
import Menu from './Menu'
import welovedogs from './assets/welovedogs.png'
import plantcard from './assets/plantcard.png'

export default function MyApp() {

  return (


  
  
    <main className='container'>
      <Menu/>
      <div className='content-div'>
      <header className="Cabecalho">
        <div className="Cabecalho-esquerda">
          <h3>Gabriel Leal Oliveira</h3>
          <div className="opcoes">
          <h4>Section two </h4>
          <h4>Section three</h4>
          <h4>Section four</h4>
          </div>
        </div>
        
        <div className="Cabecalho-direita">
          <div className="imagens">
          <img src={Twitter}></img>
          <img src={figma}></img>
          <img src={instagramLogo}></img>
          </div>
          <p>Dark mode</p>
          </div>
          
        </header>
        <div className="menu">
        <div className="menuListras">
            
        </div>
        <div className="menu-mobile">
          <div className="opcoes-mobile">
          </div>
          <div className="imagens-mobile">
          <img src={Twitter}></img>
          <img src={figma}></img>
          <img src={instagramLogo}></img>
          </div>
        </div>
        </div>
       

      
    
      <main>
        <div className="Corpo">
          <div className="tituloP">
            <div className='IMAGEM'>
              <img src={eu}></img>
            </div>
            <div className="titulogrande">
          <h1>Hello.</h1>
          <h1>My name is Gabriel.</h1>
          </div>
          </div>
          <div className="paragrafo1">
          <p>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.</p>
          <p>Right now, I'm Design Lead at <strong>Holiday Extras</strong>, covering all our digital platforms across a whole load of brands – leading a great team across <strong>design</strong>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.</p>
          <p>I've got some <strong>work on Dribbble</strong>, some previous work at <strong>Saga</strong> and you can find me over on twitter and sometimes <strong>on Medium too</strong>. I also take <strong>too many photos</strong>.</p>
          <div className="verificado">
            <img src={verificado}></img>
            <h5>Available for work and general design goodness – <strong>say hello</strong></h5>
          </div>
         </div>
         </div>


         <div className="corpo-inferior">
            <div>
              <div className='Tittle1'>
              <h2>Title</h2>
              <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>
              </div>
            <div className="imagem-x">
            <img src={welovedogs}></img>
              <div className="imagem-x-direita">
                <h4>Title</h4>
              <div className="paragrafo2">
                <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              </div>
                <div className="Button">
                    <p><strong>Button Primary Light</strong></p>
                </div>
              </div>
            </div>
            <div className="imagem-x2">
              <div className="imagem-x-esquerda">
                <h4>Title</h4>
              <div className="paragrafo3">
                <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
              </div>
                <div className="Button2">
                    <p><strong>Button Primary Light</strong></p>
              
                </div>
              </div>
              <img src={plantcard}></img>
            </div>


            </div>
         </div>
         </main>
         
        </div>
        
  </main>
  );
} 
