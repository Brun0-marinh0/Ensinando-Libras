import style from './styles.module.scss'
import QuizNumber from "../../../components/Quiz";
import { useEffect, useState } from 'react';
import { SelectQuestion } from '../../../controllers/questions/select-question';
import { UpdateStatus } from '../../../controllers/questions/update-status';
import { ResetStatus } from '../../../controllers/questions/reset-status';
import { RegisterRank } from '../../../controllers/rank/register';
import { useRouter } from 'next/router';

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
    const [message, setSessage] = useState("")
    const [t, setT] = useState(false)
    const router = useRouter()

    async function update_status(id: number, answer: boolean) {
        // Envia a pergunta para o backend

        await UpdateStatus(id)
    }

    async function select_question() {
        const res = await SelectQuestion("numbers")
        setQuestion(res.data)
    }

    async function criar_rank() {

        await RegisterRank({ name: "hrq", points: 8 })

        await ResetStatus()

        const res = await SelectQuestion("numbers")

        setQuestion(res.data)

    }

    async function reset_status() {
        await ResetStatus()

        const res = await SelectQuestion("numbers")

        setQuestion(res.data)

    }

    async function reset_questions() {



        await ResetStatus()

        // pesquisar depois como enviar pelo Nuxt via função pra outra tela
        router.push("/selectQuiz")

    }
    

    useEffect(() => {
        const getQuestion = async () => {

            const res = await SelectQuestion("numbers")

            setQuestion(res.data)

        }

        getQuestion()
    }, [])

    if (!question) {
        return(
            <div>
                <button onClick={criar_rank}>
                    Criar Rank
                </button>
                <button onClick={reset_status}>
                    Sair
                </button>
            </div>
        )
    }

    return (
        <div className={style.content}>
            <div className={style.container}>
                <QuizNumber data={question} update_status={update_status} reset_questions={reset_questions} select_question={select_question}/>
            </div>
        </div>
    )
}