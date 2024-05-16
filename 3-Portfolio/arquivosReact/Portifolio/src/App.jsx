import './App.css'
import Header from './components/Header'
import Hello from './components/Hello';


function App(props) {
  const {nome, sobrenome} = props;

  return (
    <>
      <Header nome={nome} sobrenome={sobrenome} />
      <main>
        <Hello nome={nome} />
        <h2>Title</h2>
        <p>
          Line of copy in here to decribe this section. Line of copy in here to decribe this section.
          Line of copy in here to decribe this section. Line of copy in here to decribe this section.
        </p>
        <div>
          {/*<img src'Imagem aqui' />*/}
          <div>
            <h3>Title</h3>
            <p>
            Leading, implementing and evolving engaging customer experiences
            and UI foundations for every touch-point across various platforms.
            </p>
            <button>Button Primary Light</button>
          </div>
        </div>
        <div>
          {/*<img src'Imagem aqui' />*/}
          <div>
            <h3>Title</h3>
            <p>
            Leading, implementing and evolving engaging customer experiences
            and UI foundations for every touch-point across various platforms.
            </p>
            <button>Button Primary Light</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
