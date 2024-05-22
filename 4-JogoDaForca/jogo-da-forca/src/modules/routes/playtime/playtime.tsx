import { useState } from "react"
import Hang from "../../components/hang/hang"
import Button from "../../components/button/button"
import "./playtime.css"
import MisteryWord from "../../components/mistery-word/mistery-word"

export default function Playtime(){
    const [fails, setFails] = useState(0)

    const failed = ()=>{
        setFails(fails+1)
    }

    const word:string = "banana bem bananada"
    const guesses:string[] = [] 

    return(
        <div className="game-container">
            <Hang fails={fails}/>
            <MisteryWord word={word} guesses={guesses}/>
            <Button 
                behavior="button"
                color="main-button"
                Click={failed}
                content="falhar"
            />
        </div>
    )
}