import { useState } from "react";
import { Outlet } from "react-router-dom";
import { gameTracker, gameWord, singleTrack, playerList, wordContext, trackerContext, playerListContext } from "./constants";


export default function App(){
    const [wordToGuess, setWordToGuess] = useState('')
    const [tracker, setTracker] = useState([{result:'', pastWord:''}])
    const [players, setPlayers] = useState(['Anônimo'])
    
    const wordToGuessSetter = new gameWord(()=>wordToGuess, setWordToGuess)
    const trackerSetter = new gameTracker(()=>tracker, (newTrack:singleTrack)=>{setTracker(tracker.concat(newTrack))})
    const playerListSetter = new playerList(()=>players, (str:string)=>{setPlayers(players.concat(str))})

    return(
        <trackerContext.Provider value={trackerSetter}>
        <wordContext.Provider value={wordToGuessSetter}>
        <playerListContext.Provider value={playerListSetter}>
            <Outlet />
        </playerListContext.Provider>
        </wordContext.Provider>
        </trackerContext.Provider>
    )
}