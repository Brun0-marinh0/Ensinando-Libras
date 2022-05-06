import { useState } from "react";
import { LevelOne } from "../../components/questions/numbers/LevelOne";
import { Score } from "../../components/Score";
const levelOne = [
    {
        question:"perguta01",
        answerOptions:[
            {answerText: '1', isCorrect: true},
            {answerText: '2', isCorrect: false},
            {answerText: '3', isCorrect: false},
            {answerText: '4', isCorrect: false}
        ]
    },
    {
        question:"perguta02",
        answerOptions:[
            {answerText: '1', isCorrect: false},
            {answerText: '2', isCorrect: true},
            {answerText: '3', isCorrect: false},
            {answerText: '4', isCorrect: false}
        ]
    },
    {
        question:"perguta03",
        answerOptions:[
            {answerText: '1', isCorrect: false},
            {answerText: '2', isCorrect: false},
            {answerText: '3', isCorrect: true},
            {answerText: '4', isCorrect: false}
        ]
    }
]

export default function numbers(){
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)


    function hendleAnswer(isCorrect){
        if(isCorrect){
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if(nextQuestion < levelOne.length){
            setCurrentQuestion(nextQuestion)
        }else(
            setShowScore(true)
        )
    }
    
    return(
        <div>
           {showScore ?(
               <div>
                   <Score
                    score={score}
                    level={levelOne}
                   />
               </div>
           ) : (
               <LevelOne
               currentQuestion={currentQuestion}
               levelOne={levelOne}
               onClick={(isCorrect)=> hendleAnswer(isCorrect)}
               />
           )}
       </div>
    )
}