import style from './styles.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'


interface PropsQuestionType {

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
    },
    check_question: (id: number) => Promise<void>,
    message_question: (message: string) => void
}

export default function Quiz({ data, check_question, message_question }: PropsQuestionType) {

    console.log(data)

    const basePath_a = "http://localhost:4000/" + data.options.image_a + ".svg"
    const basePath_b = "http://localhost:4000/" + data.options.image_b + ".svg"
    const basePath_c = "http://localhost:4000/" + data.options.image_c + ".svg"
    const basePath_d = "http://localhost:4000/" + data.options.image_d + ".svg"

    const [description, setDescription] = useState(false)

    const setAnswer = async (answer: boolean) => {
        if (!answer) {
            message_question("ERROU")
            setDescription(true)
            await check_question(data.id)
            setDescription(false)

            return
        }

        message_question("ACERTOU")
        setDescription(true)
        await check_question(data.id)
        setDescription(false)
        return
    }


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
                <h1>1-{data.question}?</h1>
            </div>
            <div>
                <div className={style.options}>
                    <div onClick={() => setAnswer(data.options.option_a == data.answer)}>
                        <Image src={basePath_a}
                            alt={data.options.option_a}
                            width={100}
                            height={100}
                            objectFit="fill"
                        />
                        {description && (
                            <p>{data.options.option_a}</p>
                        )}
                    </div>
                    <div onClick={() => setAnswer(data.options.option_b == data.answer)}>
                        <Image src={basePath_b}
                            alt={data.options.option_b}
                            width={100}
                            height={100}
                            objectFit="fill"
                        />
                        {description && (
                            <p>{data.options.option_b}</p>
                        )}
                    </div>
                    <div onClick={() => setAnswer(data.options.option_c == data.answer)}>
                        <Image src={basePath_c}
                            alt={data.options.option_c}
                            width={100}
                            height={100}
                            objectFit="fill"
                        />
                        {description && (
                            <p>{data.options.option_c}</p>
                        )}
                    </div>
                    <div onClick={() => setAnswer(data.options.option_d == data.answer)}>
                        <Image src={basePath_d}
                            alt={data.options.option_d}
                            width={100}
                            height={100}
                            objectFit="fill"
                        />
                        {description && (
                            <p>{data.options.option_d}</p>
                        )}
                    </div>
                </div>

            </div>
            <button>Concluir</button>
        </div>
    )
}