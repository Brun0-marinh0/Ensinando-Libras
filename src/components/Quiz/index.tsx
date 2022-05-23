import style from './styles.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface PropsQuestionType {
  data: {
    answer: string
    id: number
    created_at: Date
    question: string
    status: boolean
    type: {
      description: string
    }
    options: {
      image_a: string
      image_b: string
      image_c: string
      image_d: string
      option_a: string
      option_b: string
      option_c: string
      option_d: string
    }
  }
  update_status: (id: number, answer: boolean) => Promise<void>
  select_question: () => Promise<void>
  reset_questions: () => Promise<void>
}

export default function Quiz({
  data,
  update_status,
  select_question,
  reset_questions
}: PropsQuestionType) {
  const basePath_a = 'http://localhost:4000/' + data.options.image_a + '.svg'
  const basePath_b = 'http://localhost:4000/' + data.options.image_b + '.svg'
  const basePath_c = 'http://localhost:4000/' + data.options.image_c + '.svg'
  const basePath_d = 'http://localhost:4000/' + data.options.image_d + '.svg'

  const [description, setDescription] = useState(false)
  const [answer, setAnswer] = useState(false)
  const [message, setMessage] = useState('')
  const [control, setControl] = useState(false)

  const UpdateQuestion = async (answer: boolean) => {
    if (!answer) {
      setMessage('ERROU')
      setDescription(true)
      await update_status(data.id, answer)
      setControl(true)
      return
    }

    setMessage('ACERTOU')
    setDescription(true)
    await update_status(data.id, answer)
    setControl(true)
    return
  }

  const NextQuestion = async () => {
    setMessage('')
    setDescription(false)
    await select_question()
    setControl(false)
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
            <Image
              src={basePath_a}
              alt={data.options.option_a}
              width={100}
              height={100}
              objectFit="fill"
            />
            {description && (
              <p className={style.description}>{data.options.option_a}</p>
            )}
          </div>
          <div onClick={() => setAnswer(data.options.option_b == data.answer)}>
            <Image
              src={basePath_b}
              alt={data.options.option_b}
              width={100}
              height={100}
              objectFit="fill"
            />
            {description && (
              <p className={style.description}>{data.options.option_b}</p>
            )}
          </div>
          <div onClick={() => setAnswer(data.options.option_c == data.answer)}>
            <Image
              src={basePath_c}
              alt={data.options.option_c}
              width={100}
              height={100}
              objectFit="fill"
            />
            {description && (
              <p className={style.description}>{data.options.option_c}</p>
            )}
          </div>
          <div onClick={() => setAnswer(data.options.option_d == data.answer)}>
            <Image
              src={basePath_d}
              alt={data.options.option_d}
              width={100}
              height={100}
              objectFit="fill"
            />
            {description && (
              <p className={style.description}>{data.options.option_d}</p>
            )}
          </div>
        </div>
      </div>
      <button onClick={() => UpdateQuestion(answer)} disabled={control}>
        Concluir
      </button>
      {message != '' && (
        <div>
          <p>{message}</p>
          <button onClick={NextQuestion}>Próxima pergunta</button>
          <button onClick={reset_questions}>Sair</button>
        </div>
      )}
    </div>
  )
}
