import './App.css'
import JogoForcaDesenho from './componentes/jogoForcaDesenho'
import JogoForcaPalavra from './componentes/jogoForcaPalavra'
import JogoForcaTeclado from './componentes/jogoForcaTeclado'



function App() {

  return (
      <div className='App'>
        <JogoForcaDesenho />
        <JogoForcaPalavra />
        <JogoForcaTeclado />

      </div>
  )
}

export default App
