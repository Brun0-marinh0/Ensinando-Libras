import style from './styles.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
// import Swal from 'sweetalert2'
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
  chances: number
  decrementChances: () => void
  totalScore: number
  incrementScore: () => void
}

export default function Quiz({
  data,
  update_status,
  select_question,
  reset_questions,
  chances,
  decrementChances,
  totalScore,
  incrementScore
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
  const router = useRouter()
  // const [accPoints, setAccPoints] = useContext(Context)
  
  const UpdateQuestion = async (answer: boolean) => {
    if (!answer) {
      decrementChances()
      setMessage('Que pena tente novamente')
      setDescription(true)
      await update_status(data.id, answer)
      setControl(true)
      return
    }
    incrementScore()
    setMessage('Parabéns você acertou!')
    setDescription(true)
    await update_status(data.id, answer)

    setAccPoints(accPoints+1)
    // getTotal(accPoints+1)
    setControl(true)
    return
  }

  const NextQuestion = async () => {
    setMessage('')
    setDescription(false)
    await select_question()
    setControl(false)
    setStyles(true)
    setStyles2(true)
    setStyles3(true)
    setStyles4(true)
  }

  const [styles, setStyles] = useState(true);
  const [cor, setCor] = useState('.3rem solid #dfdfdf');
  const [styles2, setStyles2] = useState(true);
  const [cor2, setCor2] = useState('.3rem solid #dfdfdf');
  const [styles3, setStyles3] = useState(true);
  const [cor3, setCor3] = useState('.3rem solid #dfdfdf');
  const [styles4, setStyles4] = useState(true);
  const [cor4, setCor4] = useState('.3rem solid #dfdfdf');

  useEffect(() => {
    setCor(() => styles ? '' : '.3rem solid var(--blue)');
    setCor2(() => styles2 ? '' : '.3rem solid var(--blue)');
    setCor3(() => styles3 ? '' : '.3rem solid var(--blue)');
    setCor4(() => styles4 ? '' : '.3rem solid var(--blue)');
  }, [styles, styles2, styles3, styles4]);

  function selectButton() {
    setAnswer(data.options.option_a == data.answer)
    setStyles(false)
    setStyles2(true)
    setStyles3(true)
    setStyles4(true)
  }
  function selectButton2() {
    setAnswer(data.options.option_b == data.answer)
    setStyles2(false)
    setStyles(true)
    setStyles3(true)
    setStyles4(true)
  }
  function selectButton3() {
    setAnswer(data.options.option_c == data.answer)
    setStyles3(false)
    setStyles2(true)
    setStyles(true)
    setStyles4(true)
  }
  function selectButton4() {
    setAnswer(data.options.option_d == data.answer)
    setStyles4(false)
    setStyles2(true)
    setStyles3(true)
    setStyles(true)
  }

  

  return (
    <div className={style.frame}>
      <div className={style.nivel}>
        <div>
          {/* 
            barra diminuir com a vida

            <div className={style.progress}>
              <div></div>
            </div> 
          */}
          <div className={style.vidas}>
            <img src="../img/vidas.svg" alt="" />
            <p>{chances}</p>

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
          <div onClick={selectButton}style={{
              border: cor
            }}>
            <Image
              src={basePath_a.replace('.svg.svg', '.svg')}
              alt={data.options.option_a}
              width={100}
              height={100}
              objectFit="fill"
            />
            {description && (
              <p className={style.description}>{data.options.option_a}</p>
            )}
          </div>
          <div onClick={selectButton2} style={{
            border: cor2
          }}>
            <Image
              src={basePath_b.replace('.svg.svg', '.svg')}
              alt={data.options.option_b}
              width={100}
              height={100}
              objectFit="fill"
            />
            {description && (
              <p className={style.description}>{data.options.option_b}</p>
            )}
          </div>
          <div onClick={selectButton3} style={{
            border: cor3
          }}>
            <Image
              src={basePath_c.replace('.svg.svg', '.svg')}
              alt={data.options.option_c}
              width={100}
              height={100}
              objectFit="fill"
            />
            {description && (
              <p className={style.description}>{data.options.option_c}</p>
            )}
          </div>
          <div onClick={selectButton4} style={{
            border: cor4
          }}>
            <Image
              src={basePath_d.replace('.svg.svg', '.svg')}
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
