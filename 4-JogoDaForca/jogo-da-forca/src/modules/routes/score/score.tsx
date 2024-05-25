import { singleTrack, trackerContext } from "../../../constants"
import './score.css'
import Button from "../../components/button/button"
import { useContext } from "react"

function ScoreSection({result, pastWord}:singleTrack){
    return(
        <article className="score-section">
            <h2>{result}</h2>
            <h3>{pastWord}</h3>
        </article>
    )
}

export default function ScorePage(){
    const scoreTracker = JSON.parse(localStorage.getItem('globalTracker') || '[]')
    const sectionList = scoreTracker.map((score:singleTrack)=><ScoreSection result={score.result} pastWord={score.pastWord} />)
    const trackerLocalRemover = useContext(trackerContext).trackerEraser;
    const trackerRemover = ()=>{
        trackerLocalRemover()
        localStorage.removeItem('globalTracker')
    }


    return(
        <div className="score-page">
            <Button 
            behavior="link"
            color="main-button"
            routeCoordinates="/"
            content="VOLTAR"
            clickable={true}
            />
            <Button 
            behavior="button"
            color="secondary-button"
            Click={trackerRemover}
            content="APAGAR HISTÓRICO"
            clickable={true}
            />
            {sectionList}
        </div>
    )
}