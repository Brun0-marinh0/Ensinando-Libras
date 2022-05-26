import style from './styles.module.scss'
import QuizCaracter from '../../../components/Quiz'
import { useEffect, useState } from 'react'
import { SelectQuestion } from '../../../controllers/questions/select-question'
import { UpdateStatus } from '../../../controllers/questions/update-status'
import { ResetStatus } from '../../../controllers/questions/reset-status'
import { RegisterRank } from '../../../controllers/rank/register'
import { Score } from '../../../components/Score/index' //ac de pontos
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

interface IData {
  answer: string
  id: number
  created_at: Date
  name: String
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

export default function Quiz() {
  const [question, setQuestion] = useState<IData>()
  const [message, setSessage] = useState('')
  const [t, setT] = useState(false)
  const [namePlayer, setNamePlayer] = useState('')
  const [totalScore, setTotalScore] = useState(0)
  const [chances, setChances] = useState(3)
  const router = useRouter()

  const decrementChances = () => {
    // Decrementa uma chance
    setChances(chances - 1)
  }

  const incrementScore = () => {
    // Incrementa uma pontuação
    setTotalScore(totalScore + 1)
  }

  function getTotal(point: number){
    setTotalScore(point)
  }

  async function update_status(id: number, answer: boolean) {
    // Envia a pergunta para o backend
    await UpdateStatus(id)
  }

  async function select_question() {
    const res = await SelectQuestion('caracters')
    setQuestion(res.data)
  }

  async function criar_rank(e) {
    await RegisterRank({ name: namePlayer, points: totalScore })
    return
  }

  async function reset_status() {
    await ResetStatus()

    const res = await SelectQuestion('caracters')

    setQuestion(res.data)
  }

  async function reset_questions() {
    await ResetStatus()

    // pesquisar depois como enviar pelo Nuxt via função pra outra tela
    router.push('/selectQuiz')
  }

  //rodar novamente para proxima questão
  useEffect(() => {
    const getQuestion = async () => {
      const res = await SelectQuestion('caracters')

      setQuestion(res.data)
    }

    getQuestion()
  }, [])

  useEffect(() => {
    const handle = async () => {
      if(chances === 0) {
        await Swal.fire({
          title: 'Suas chances acabaram',
          text: 'Você errou 3 vezes :('
        })
      }
    }
    handle()
  }, [chances])

  if (!question || chances === 0) {
    return (
      <div className={style.card}>
        <div className={style.headerTitle}>
          <h2>Você acertou <span>{totalScore}</span>  perguntas!</h2>
        </div>
        <div className={style.form}>
          <p>Informe seu nome abaixo para ser registrado no ranking do jogo! :D</p>
          <form onSubmit={criar_rank}>
            <input
              value={namePlayer}
              onChange={e => {
                setNamePlayer(e.target.value)
              }}
              type="text"
              placeholder="Informe seu nome:"
            />
            <div>
              <button type="submit">Criar Rank</button>
              <button onClick={reset_status}>Sair</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className={style.content}>
      <div className={style.container}>
        <QuizCaracter
          data={question}
          update_status={update_status}
          select_question={select_question}
          reset_questions={reset_questions}
          chances={chances}
          decrementChances={decrementChances}
          totalScore={totalScore}
          incrementScore={incrementScore}
        />
      </div>
    </div>
  )
}
