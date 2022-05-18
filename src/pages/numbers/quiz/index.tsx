import style from './styles.module.scss'
import QuizNumber from "../../../components/Quiz";
import { useEffect, useState } from 'react';
import { SelectQuestion } from '../../../controllers/questions/select-question';

interface IData {
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

export default function Quiz() {

    const [question, setQuestion] = useState<IData>()


    function message_question(message: string): void {
        alert(message)
    }

    async function check_question(id: number): Promise<void> {
        alert(id)
    }

    useEffect(() => {
        const getQuestion = async () => {

            const res = await SelectQuestion("numbers")

            setQuestion(res.data)

        }

        getQuestion()
    }, [])

    if (!question) {
        return <div>Não há perguntas</div>
    }

    return (
        <div className={style.content}>
            <div className={style.container}>
                <QuizNumber data={question} check_question={check_question} message_question={message_question} />
            </div>
        </div>
    )
}