import './App.css'
import Header from './components/Header'
import Hello from './components/Hello';
import Galeria from './components/Galeria';


function App(props) {
  const {nome, sobrenome} = props;

  return (
    <>
      <Header nome={nome} sobrenome={sobrenome} />
      <main>
        <Hello nome={nome} />
        <Galeria />
      </main>
    </>
  )
}

export default App
