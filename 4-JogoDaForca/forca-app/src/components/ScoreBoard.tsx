
type ScoreBoardProps = {
    scoreBoard: string[];
}

function ScoreBoard({ scoreBoard }: ScoreBoardProps) {

    return (
        <>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '1rem', color: 'var(--dark-blue)', padding: '0 1rem', alignSelf:'flex-end' }}>
                <span>Wins: {scoreBoard[0]} </span>
                <span>Loses: {scoreBoard[1]}</span>
            </div>
        </>
    )
}
export default ScoreBoard;