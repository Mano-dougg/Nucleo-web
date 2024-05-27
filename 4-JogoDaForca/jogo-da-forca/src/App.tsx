import './App.css'
import { Link } from 'react-router-dom'

function App() {

  localStorage.setItem('contW', '0')
  localStorage.setItem('contL', '0')

  return (
    <div className='inicio'>
      <Link to="/Jogo" ><button className='jogo'>Começar a jogar</button></Link>
      <Link to="/Adicao"><button className='adicao'>Adicionar nova palavra</button></Link>
    </div>
  )
}

export default App
