import { useContext, useState } from "react";
import Button from "../../components/button/button";
import { gameWord, wordContext } from "../../../constants";
import './play-setting.css'


export default function PlaySettings(){
    const [clickable, setClickable] = useState(false);
    
    const wordDefiner: gameWord = useContext(wordContext)
    
    const defineWord = (contextWord:string):void=>{
        wordDefiner.wordChooser(contextWord)
    };

    const onChange = (formText:string):void=>{
        setClickable(formText?true:false);
        defineWord(formText)
    };

    return(
        <div className="play-setting">
            <form className="play-setting__form">
                <label>Escreva a palavra a ser adivinhada</label>
                <input 
                className="play-setting__form__input"
                type="text"
                placeholder="Palavra para ser adivinhada"
                onChange={(e) => onChange(e.target.value)}></input>
            </form>
            <Button 
            behavior='link' 
            color='main-button'
            routeCoordinates="/play-game" 
            clickable={clickable}
            content="IR PARA O JOGO =>" />
        </div>
    )
}