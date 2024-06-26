import { useState } from "react";
import { Outlet } from "react-router-dom";
import { gameTracker, gameWord, singleTrack, playerList, wordContext, trackerContext, playerListContext } from "./constants";
import Switch from "./modules/components/switch/switch";


export default function App(){
    const [wordToGuess, setWordToGuess] = useState('')
    const [tracker, setTracker] = useState([{result:'', pastWord:''}])
    const [players, setPlayers] = useState(['Anônimo'])
    const [darkTheme, setDarkTheme] = useState(true)
    
    const wordToGuessSetter = new gameWord(()=>wordToGuess, setWordToGuess)
    const trackerSetter = new gameTracker(()=>tracker, (newTrack:singleTrack)=>{setTracker(tracker.concat(newTrack))}, ()=>{setTracker([])})
    const playerListSetter = new playerList(
        ()=>players,
        (str:string)=>{if(str)setPlayers(players.concat(str))},
        (str:string)=>{setPlayers(players
            .reduce((keep:string[], elem:string, i:number)=>(str===elem && keep.length===i)?keep:keep.concat(elem),[]))})

    const darkStyle:string = `:root{
        --background: #242424;
        --background2: aquamarine;
        --button1: darkblue;
        --button2: #2f2f2f;
        --color: rgba(255, 255, 255, 0.87);
        --other-color: crimson;
        --lesser-color: #6A7575;
        transition: color 0.5s ease, background-color 0.5s ease;
    }`
    const lightStyle:string = `:root{
        --background: beige;
        --background2: darkblue;
        --background3: bisque;
        --button1: green;
        --button2: gray;
        --color: black;
        --color2: white;
        --other-color: darkred;
        --lesser-color: #4a5555;
        transition: color 0.5s ease, background-color 0.5s ease;
    }`

    return(
        <trackerContext.Provider value={trackerSetter}>
        <wordContext.Provider value={wordToGuessSetter}>
        <playerListContext.Provider value={playerListSetter}>
            <style>{darkTheme?darkStyle:lightStyle}</style>
            <Switch onClick={()=>{setDarkTheme(!darkTheme)}}/>
            <Outlet />
        </playerListContext.Provider>
        </wordContext.Provider>
        </trackerContext.Provider>
    )
}