import { singleTrack } from "../../../constants"
import './score.css'
import Button from "../../components/button/button"

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

    return(
        <div className="score-page">
            <Button 
            behavior="link"
            color="main-button"
            routeCoordinates="/"
            content="VOLTAR"
            clickable={true}
            />
            {sectionList}
        </div>
    )
}