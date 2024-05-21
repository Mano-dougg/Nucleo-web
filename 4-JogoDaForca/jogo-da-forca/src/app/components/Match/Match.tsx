import s from './Match.module.css'

interface match{
    id: string,
    isWinner: boolean,
    createdAt: string,
    word: string,
}

export default function Match({match}: {match: match}){
    return(
        <div className={s.container} style={match.isWinner?{backgroundColor:"#98ec65"}:{backgroundColor:"#ff5555"}}>
            <div className={s.history}>
                Você {match.isWinner ? 'ganhou' : 'perdeu'} a partida em {match.createdAt} com a palavra "{match.word}"
            </div>
        </div>
    )
}