import { useContext, useState } from "react";
import Button from "../../components/button/button";
import { gameWord, wordContext, wordList } from "../../../constants";
import './play-setting.css'

function ChooseModeMode({ setMode }:{setMode:(num:number)=>void}){
    const chooseChoice = ():void=>{
        setMode(1)
    }

    const chooseRandom = ():void=>{
        setMode(2)
    }

    return(
        <>
            <Button 
            behavior="link"
            color="main-button"
            routeCoordinates="/"
            content="VOLTAR"
            clickable={true}
            />
            <Button 
            behavior="button"
            color="main-button"
            Click={chooseChoice}
            content="ESCOLHER A PALAVRA"
            clickable={true}
            />
            <Button 
            behavior="button"
            color="main-button"
            Click={chooseRandom}
            content="PALAVRA ALEATÓRIA"
            clickable={true}
            />
        </>
    )
}

function ChooseWordMode({ clickable, onChange }:{clickable:boolean, onChange:(formText:string)=>void}){
    return(
        <div className="play-setting">
            <Button 
            behavior="link"
            color="main-button"
            routeCoordinates="/"
            content="VOLTAR"
            clickable={true}
            />
            <form className="play-setting__form">
                <label>Escreva a palavra a ser adivinhada</label>
                <input 
                className="play-setting__form__input"
                name="palavra-a-ser-adivinhada"
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

function RandomWordMode({ randomWordPicker }:{randomWordPicker:(prop:string)=>void}){

    const optionList:JSX.Element[] = Object.keys(wordList)
                       .map((theme:string)=><option value={theme}>{theme}</option>)

    return(
        <div className="play-setting">
            <Button 
            behavior="link"
            color="main-button"
            routeCoordinates="/"
            content="VOLTAR"
            clickable={true}
            />
            <form className="play-setting__form">
                <label>Escreva o tema da palavra</label>
                <select 
                className="random-choice-select"
                onChange={(e)=>{randomWordPicker(e.target.value)}}>
                    <option></option>
                    {optionList}
                </select>
            </form>
            <Button 
            behavior='link' 
            color='main-button'
            routeCoordinates="/play-game" 
            clickable={true}
            content="IR PARA O JOGO =>" />
        </div>
    )
}

export default function PlaySettings(){
    const [clickable, setClickable] = useState(false);
    //referência para mode:
    //0 <=> escolher modo de jogo
    //1 <=> escolher palavra e tema
    //2 <=> escolher tema(palavra aleatória)
    const [mode, setMode] = useState(0)
    
    const wordDefiner: gameWord = useContext(wordContext)
    
    const defineWord = (contextWord:string):void=>{
        wordDefiner.wordChooser(contextWord)
    };

    const chooseWord = (formText:string):void=>{
        setClickable(formText.length>=3?true:false);
        defineWord(formText)
    };

    const randomWordPicker = (wordType:string)=>{
        let typeToSee = wordType;
        if(wordType==='aleatório'){
            const miniPosition = Math.round(Math.random()*5)
            typeToSee = wordList.get(wordType)[miniPosition]
        }
        const position:number = Math.round(Math.random()*10)
        const choosenWord:string = wordList.get(typeToSee)[position]
        chooseWord(choosenWord)
    }

    return(
        <>
            {mode==0 && <ChooseModeMode setMode={setMode} />}
            {mode==1 && <ChooseWordMode clickable={clickable} onChange={chooseWord} />}
            {mode==2 && <RandomWordMode randomWordPicker={randomWordPicker}/>}
        </>
    )
}