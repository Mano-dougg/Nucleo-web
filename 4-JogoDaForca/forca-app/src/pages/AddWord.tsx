import { useNavigate } from 'react-router-dom'
import warnImg from '../assets/warn-img.svg'
import './AddWord.css'

function AddWord() {
    const navigate = useNavigate();

    return (
        <div className='add-word'>
            <input type="text" name="word" id="word" placeholder='Digite uma palavra ou frase' />
            <div className="footer-add-page">
                <div className="warn-sign">
                    <img src={warnImg} alt="exclamação de aviso" />
                    <span>Máx. de 8 letras</span>
                </div>
                <div className="buttons">
                    <button onClick={()=>{navigate('/game')}}>Salvar e começar</button>
                    <button onClick={()=>{navigate('/home')}}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default AddWord;