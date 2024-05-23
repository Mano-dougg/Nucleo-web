import { useState } from "react";
import { Outlet } from "react-router-dom";
import { gameWord, wordContext } from "./constants";


export default function App(){
    const [wordToGuess, setWordToGuess] = useState('')
    
    const wordToGuessSetter = new gameWord(()=>wordToGuess, setWordToGuess)


    return(
        <wordContext.Provider value={wordToGuessSetter}>
            <Outlet />
        </wordContext.Provider>
    )
}