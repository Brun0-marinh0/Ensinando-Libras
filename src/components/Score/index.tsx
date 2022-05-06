export interface ScoreProps{
    score: Number,
    level: Object[]
}
export function Score({score,level}:ScoreProps){
    return(
        <>
            voce pontuou {score} de {level.length}
        </>
    )
}