import style from './styles.module.scss'
import Image from 'next/image'


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
    }

}

export default function Quiz({ data }: PropsQuestionType) {

    console.log(data)

    const basePath_a = "http://localhost:4000/" + data.options.image_a + ".png"
    const basePath_b = "http://localhost:4000/" + data.options.image_b + ".png"
    const basePath_c = "http://localhost:4000/" + data.options.image_c + ".png"
    const basePath_d = "http://localhost:4000/" + data.options.image_d + ".png"

    return (
        <div className={style.frame}>

            <div className={style.nivel}>
                <div>
                    <div className={style.progress}>
                        <div></div>
                    </div>
                    <div className={style.circleNivel}>
                        <h1></h1>
                    </div>
                </div>
            </div>

            <div className={style.quest}>
                <h1>1-{data.question}?</h1>
            </div>
            <div>
                <div className={style.options}>
                    <div>
                        <Image src={basePath_a}
                            alt={data.options.option_a}
                            width={100}
                            height={100}
                            objectFit="fill"
                        />
                    </div>
                    <div>
                        <Image src={basePath_b}
                            alt={data.options.option_b}
                            width={100}
                            height={100}
                            objectFit="fill"
                        />
                    </div>
                    <div>
                        <Image src={basePath_c}
                            alt={data.options.option_c}
                            width={100}
                            height={100}
                            objectFit="fill"
                        />
                    </div>
                    <div>
                        <Image src={basePath_d}
                            alt={data.options.option_d}
                            width={100}
                            height={100}
                            objectFit="fill"
                        />
                    </div>
                </div>

            </div>
            <button>Concluir</button>
        </div>
    )
}