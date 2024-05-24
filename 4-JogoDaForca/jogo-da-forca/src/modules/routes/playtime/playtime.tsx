import { useContext, useState } from "react"
import Hang from "../../components/hang/hang"
import "./playtime.css"
import GameInterface from "../../components/game-interface/game-interface"
import { wordContext, trackerContext, playerListContext, singleTrack } from "../../../constants"
import Button from "../../components/button/button"

function WinScreen({word}:{word:string}){
    return(
        <div className="post-game-screen flexer">
            <h1 className="post-game-screen__title">Yiipiieee!<br/>Voce acertou!</h1>
            <span className="post-game-screen__text">A palavra era:<br/>{word}</span>
            <Button 
            behavior="link"
            color="main-button"
            routeCoordinates="/"
            content="VOLTAR AO INÍCIO"
            clickable={true}
            />
        </div>
    )
}

function LoseScreen({ word }:{word:string}){
    return(
        <div className="post-game-screen flexer">
        <h1 className="post-game-screen__title">Poxa!<br/>Você perdeu!</h1>
        <span className="post-game-screen__text">A palavra era {word}</span>
            <Button 
            behavior="link"
            color="main-button"
            routeCoordinates="/"
            content="VOLTAR AO INÍCIO"
            clickable={true}
            />
        </div>
    )
}

function ErrorScreen(){
    return(
        <div className="post-game-screen error-post-game-screen flexer">
        <h1 className="error-post-game-screen__title">Opa!<br/>Alguma coisa deu errado!</h1>
        <span className="error-post-game-screen__text">Parece que não encontramos nenhuma palavra pra ser adivinhada!<br/>Aperte no botão abaixo para voltar a tela inicial e tentar novamente.</span>
            <Button 
            behavior="link"
            color="main-button"
            routeCoordinates="/"
            content="VOLTAR AO INÍCIO"
            clickable={true}
            />
        </div>
    )
}

export default function Playtime(){
    const [fails, setFails] = useState(0)
    const [guesses, setGuesses] = useState([' '])
    //valores referência para result:
    //0 <=> jogando
    //1 <=> ganhou
    //2 <=> perdeu
    const [result, setResult] = useState(0)


    const players:string[] = useContext(playerListContext).getter()
    const [player, setPlayer] = useState(players[0])

    const updateTracker = useContext(trackerContext).trackerSetter

    const failed = ():void=>{
        setFails(fails+1)
        if(fails>=5)finisher(2)
    }

    const addGuess = (guess:string):void=>{
        setGuesses(guesses.concat(guess))
        if(word.split('')
            .every((letter:string)=>guesses
                    .concat(guess)
                    .includes(letter))
            && result===0)finisher(1)
        else if(!word.includes(guess))failed()
        else {
            const i = players.indexOf(player)+1
            setPlayer(players[players.length===i?0:i])
        }
    }

    const finisher = (end:number)=>{
        setResult(end)
        const newTrack:singleTrack = {result:end===1?'GANHOU':'PERDEU', pastWord:word}
        updateTracker(newTrack)
        const pastTrack = JSON.parse(localStorage.getItem('globalTracker') || '[]')
        localStorage.setItem('globalTracker', JSON.stringify(pastTrack.concat(newTrack)))
    }

    const word:string = useContext(wordContext).wordGetter()


    return(
        <div className="game-container flexer">
            <Hang fails={fails}/>
            <h2>Vez de: {player}</h2>
            {(result===0 && word.length)?
             <GameInterface word={word} guesses={guesses} failed={failed} addGuess={addGuess} result={result}/>
             :<div className="playtime-filler"></div>}
            {word.length===0 && <ErrorScreen />}
            {result===1 && <WinScreen word={word}/>}
            {result===2 && <LoseScreen word={word}/>}
        </div>
    )
}