import { useEffect, useState } from 'react'
import { SelectQuestion } from '../../controllers/questions/select-question'
import style from './styles.module.scss'


interface QuestionType {
    data: {
        answer: string,
        id: number,
        created_at: Date,
        question: string,
        status: boolean,
        type: {
            description: string
        },
        options: {
            image_a: string,
            image_b: string,
            image_c: string,
            image_d: string,
            option_a: string,
            option_b: string,
            option_c: string,
            option_d: string
        }
    }
}

export default function Quiz() {

    const [question, setQuestion] = useState<QuestionType>()

    useEffect(() => {
        SelectQuestion().then(res => setQuestion(res.data)).catch(e => console.log(e))

        console.log( "to auqi", question)

    }, [])

    return (
        <div className={style.frame}>

            <div className={style.nivel}>
                <div>
                    <div className={style.progress}>
                        <div></div>
                    </div>
                    <div className={style.circleNivel}>
                        <h1>1</h1>
                    </div>
                </div>
            </div>

            <div className={style.quest}>
                <h1>1-{ question.data.id }</h1>
            </div>
            <div>
                <div className={style.options}>
                    <div></div>
                </div>
            </div>
            <button>Concluir</button>
        </div>
    )
}