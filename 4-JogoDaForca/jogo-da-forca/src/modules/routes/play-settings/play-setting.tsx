import { useContext, useState } from "react";
import Button from "../../components/button/button";
import { gameWord, playerList, wordContext, playerListContext, wordList } from "../../../constants";
import './play-setting.css'

function ChooseModeMode({ setMode }:{setMode:(num:number)=>void}){
    const chooseChoice = ():void=>{
        setMode(1)
    }

    const chooseRandom = ():void=>{
        setMode(2)
    }

    return(
        <div className="choose-mode-container flexer">
            <Button 
            behavior="link"
            color="secondary-button"
            routeCoordinates="/"
            content="<= VOLTAR"
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
        </div>
    )
}

function PlayerAdder(){
    const [nameContent, setNameContent] = useState('')

    const playerListOBJ: playerList = useContext(playerListContext)
    const playerListLIs = playerListOBJ.getter()
        .map((name)=>{
            const removePlayer = ()=>{playerListOBJ.remover(name)}
            return(<li className="player-list__item">
                <form className="player-list__item__form player-entry" action="">
                    <label htmlFor="">{name}</label>
                    <input className="remove-button player-button" type="button" value="X" onClick={removePlayer} />
                </form>
            </li>)
        })
        
        const playerAdderClick = (str:string)=>{
            playerListOBJ.setter(str)
            setNameContent('')
        }

    return(
        <ol className="player-list flexer">
            <li className="player-list__item">
                <form className="player-list__item__form player-adder">
                    <label className="player-adder__title">Adicione os jogadores</label>
                    <input className="player-name-input" type="text" name="player-name"
                     id="player-name" placeholder="Nome do jogador" value={nameContent}
                     onChange={(e)=>{setNameContent(e.target.value)}}/>
                    <input className="add-button player-button" type="button" value="+" 
                     onClick={//@ts-expect-error code will assure that this value exists
                        (e)=>{playerAdderClick(e.currentTarget.previousSibling.value)}} />
                </form>
            </li>
            {playerListLIs}
        </ol>
    )
}

function ChooseWordMode({ setMode, clickable, onChange }:{setMode:(num:number)=>void, clickable:boolean, onChange:(formText:string)=>void}){
    const goBack = ():void=>{setMode(0)}
    
    return(
        <>
            <Button 
            behavior="button"
            color="secondary-button"
            Click={goBack}
            content="<= VOLTAR"
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
            <PlayerAdder />
            <Button 
            behavior='link' 
            color='main-button'
            routeCoordinates="/play-game" 
            clickable={clickable}
            content="IR PARA O JOGO =>" />
        </>
    )
}

function RandomWordMode({ setMode, clickable, randomWordPicker }:{setMode:(num:number)=>void, clickable:boolean, randomWordPicker:(prop:string)=>void}){

    const goBack = ():void=>{setMode(0)}
    
    const optionList:JSX.Element[] = Object.keys(wordList)
                       .map((theme:string)=><option value={theme}>{theme}</option>)
    if(!clickable)randomWordPicker('animais')
    
    return(
        <>
            <Button 
            behavior="button"
            color="secondary-button"
            Click={goBack}
            content="<= VOLTAR"
            clickable={true}
            />
            <form className="play-setting__form">
                <label>Escolha o tema da palavra</label>
                <select 
                className="random-choice-select"
                onChange={(e)=>{randomWordPicker(e.target.value)}}>
                    {optionList}
                </select>
            </form>
            <PlayerAdder />
            <Button 
            behavior='link' 
            color='main-button'
            routeCoordinates="/play-game" 
            clickable={true}
            content="IR PARA O JOGO =>" />
        </>
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
        setClickable((formText.length || 0)>=3?true:false);
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
        <div className="play-setting">
            {mode==0 && <ChooseModeMode setMode={setMode} />}
            {mode==1 && <ChooseWordMode setMode={setMode} clickable={clickable} onChange={chooseWord} />}
            {mode==2 && <RandomWordMode setMode={setMode} clickable={clickable} randomWordPicker={randomWordPicker}/>}
        </div>
    )
}