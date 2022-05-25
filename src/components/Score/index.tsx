export interface ScoreProps{
    score: Number,
    level: Object[]
}
export function Score({score,level}:ScoreProps){
    return(
        <>
            Você pontuou {score} de {level.length}
        </>
    )
}