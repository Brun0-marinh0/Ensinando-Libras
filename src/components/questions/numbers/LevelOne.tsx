export interface LevelOneProps{
    currentQuestion: number
    levelOne:Object[]
    onClick: any
}

export function LevelOne({currentQuestion, levelOne, onClick}:LevelOneProps){
    return(
        <>
            <div className="container">
                <div className="question-count">
                    <span>Questão {currentQuestion+1}/{levelOne.length}</span>
                </div>
                <div className="question-section">
                    {levelOne[currentQuestion].question}
                </div>
                <div>
                    {levelOne[currentQuestion].answerOptions.map((answerOptions, index)=>(
                        <button 
                            onClick={() => onClick(answerOptions.isCorrect)}
                            key={index}
                        >
                            {answerOptions.answerText}
                        </button>  
                    ))}
                </div>
            </div>
        </>
    )
}