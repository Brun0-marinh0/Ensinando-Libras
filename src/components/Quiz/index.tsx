import style from './styles.module.scss'
import Image from 'next/image'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
// import Context from '../Context/Context'
// import {createContext} from 'react'

// const value = {
//   points: 0
// }

// const Context = createContext(value)

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
  getTotal: (point: number) => void
}

export default function Quiz({
  data,
  update_status,
  select_question,
  reset_questions,
  getTotal
}: PropsQuestionType) {
  const basePath_a = 'http://localhost:4000/' + data.options.image_a + '.svg'
  const basePath_b = 'http://localhost:4000/' + data.options.image_b + '.svg'
  const basePath_c = 'http://localhost:4000/' + data.options.image_c + '.svg'
  const basePath_d = 'http://localhost:4000/' + data.options.image_d + '.svg'

  const [description, setDescription] = useState(false)
  const [answer, setAnswer] = useState(false)
  const [message, setMessage] = useState('')
  const [control, setControl] = useState(false)
  const [accPoints, setAccPoints] = useState(0)
  // const [accPoints, setAccPoints] = useContext(Context)

  const UpdateQuestion = async (answer: boolean) => {
    if (!answer) {
      setMessage('Que pena tente novamente')
      setDescription(true)
      await update_status(data.id, answer)
      setControl(true)
      return
    }

    console.log(accPoints)
    setMessage('Parabéns você acertou!')
    setDescription(true)
    await update_status(data.id, answer)

    setAccPoints(accPoints+1)
    getTotal(accPoints+1)
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
            <h1>{accPoints}</h1>
          </div>
        </div>
      </div>

      <div className={style.quest}>
        <h1>{data.question}?</h1>
        {message != '' && (
          <div className={style.toast}>
            <h3>{message}</h3>
          </div>
        )}
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

      {message == '' && (
        <button onClick={() => UpdateQuestion(answer)} disabled={control}>
          Concluir
        </button>
      )}
      {message != '' && (
        <div className={style.bntNext}>
          <button onClick={NextQuestion}>Próxima pergunta</button>
          <button onClick={reset_questions}>Sair</button>
        </div>
      )}
    </div>
  )
}
