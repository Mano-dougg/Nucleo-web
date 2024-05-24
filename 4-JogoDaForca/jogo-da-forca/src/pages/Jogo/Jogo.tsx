import './Jogo.css'
import Boneco from "../../components/Boneco/Boneco"
import Palavra from "../../components/Palavra/Palavra"
import Teclado from "../../components/Teclado/Teclado"

function Jogo(){

    return(
        <div className='final'>
        <Boneco />
        <Palavra />
        <div className='teclado'>
          <Teclado />
        </div>
        
      </div>
    )
    
}


export default Jogo