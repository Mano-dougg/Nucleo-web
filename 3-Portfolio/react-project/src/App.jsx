import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <Header />
      <Menu></Menu>

      <section class='part-one'>

        <div class='perfil'>
          <img src='./public/blair.jpg' />
        </div>

        <h1>Hello. <br /> My name is Priscila.</h1>

        <div class='divisoria'></div>

        <a>
          I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.<br /><br />
          Right now, I'm Design Lead at <span>Holiday Extras</span>, covering all our digital platforms across a whole load of brands – leading a great team across <span>design</span>, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.<br /><br />
          I've got some <span>work on Dribbble</span>, some previous work at <span>Saga</span> and you can find me over on twitter and sometimes <span>on Medium too</span>. I also take <span>too many photos</span>.
        </a>

        <div class='callout'>

          <img src='./public/check-circle.svg' />
          <a>Available for work and general design goodness – <span class='contato'>say hello</span></a>

        </div>

      </section>

      <section class='part-two'>
        <h2>Title</h2>
        <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. </p>

        <div class='project-one'>

          <img src='./public/conteudo1.jpg' />

          <div class="conteudo-one">
            <h4>Title</h4>
            <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
            <button>Button Primary Light</button>
          </div>

        </div>

        <div class='project-two'>

        <div class="conteudo-two">
            <h4>Title</h4>
            <p>Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.</p>
            <button>Button Primary Light</button>
          </div>
        
          <img src='./public/conteudo2.jpg' />
          
        </div>

      </section>
      
    </>
  )
}

export default App
