import style from './styles.module.scss'
import QuizCaracter from "../../../components/Quiz";
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
        // criar component de menssagem
        alert(message)
    }

    async function check_question(id: number): Promise<void> {
        // chamar função status da pergunta
        alert(id)
    }

    //rodar novamente para proxima questão
    useEffect(() => {
        const getQuestion = async () => {

            const res = await SelectQuestion("caracters")

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
                <QuizCaracter data={question} message_question={message_question} check_question={check_question}  />
            </div>
        </div>
    )
}