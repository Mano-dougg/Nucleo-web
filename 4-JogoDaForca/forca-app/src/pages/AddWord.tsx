import { useNavigate } from 'react-router-dom'
import warnImg from '../assets/warn-img.svg'
import './AddWord.css'
import { useState } from 'react';

type AddWordProps = {
    wordList: string[];
    setWordList: (wordList: string[]) => void;
}

function AddWord({wordList, setWordList}: AddWordProps) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState<string>('');

    function addAndStart() {
        if(inputValue.length > 8) return;

        setWordList([...wordList, inputValue]);
        navigate('/game');
    }

    return (
        <div className='add-word'>
            <input type="text" name="word" id="word" placeholder='Digite uma palavra ou frase' onChange={(e) => setInputValue(e.target.value)}/>
            <div className="footer-add-page">
                <div className="warn-sign">
                    <img src={warnImg} alt="exclamação de aviso" />
                    <span>Máx. de 8 letras</span>
                </div>
                <div className="buttons">
                    <button onClick={()=>{addAndStart()}}>Salvar e começar</button>
                    <button onClick={()=>{navigate('/home')}}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default AddWord;