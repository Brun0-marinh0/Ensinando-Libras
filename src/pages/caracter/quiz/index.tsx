import style from './styles.module.scss'
import QuizCaracter from '../../../components/Quiz'
import { useEffect, useState } from 'react'
import { SelectQuestion } from '../../../controllers/questions/select-question'
import { UpdateStatus } from '../../../controllers/questions/update-status'
import { ResetStatus } from '../../../controllers/questions/reset-status'
import { RegisterRank } from '../../../controllers/rank/register'
import { useRouter } from 'next/router'
import { log } from 'console'
import { api } from '../../../http'
import axios from 'axios'
import useForm from 'react'

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
  const [name, setName] = useState('Jogador')
  const router = useRouter()

  async function update_status(id: number, answer: boolean) {
    // Envia a pergunta para o backend

    await UpdateStatus(id)
  }

  async function select_question() {
    const res = await SelectQuestion('caracters')
    setQuestion(res.data)
  }

  async function criar_rank(e) {
    await RegisterRank({ name: 'hrq', points: 8 })
    // const {register, handleSubmit} = useForm();
    // e.prevent.default()
    // const data = {
    //   name: e.target.elements.name.value
    // }

    // api
    //   .post('http://localhost:4000/ranks/register/', name)
    //   .then(res => {
    //     console.log(res.data)
    //   })
    //   .catch(err => {
    //     alert(err)
    //     console.log(err)
    //     router.push('/')
    //   })

    await ResetStatus()

    const res = await SelectQuestion('caracters')

    setQuestion(res.data)
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

  if (!question) {
    return (
      <div>
        <h2>Você acertou 2/3 perguntas!{name}</h2>
        <p>
          Informe seu nome abaixo para ser registrado no ranking do jogo! :D
        </p>
        <form onSubmit={criar_rank}>
          <input
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
            type="text"
            placeholder="Informe seu nome:"
          />

          <button type="submit">Criar Rank</button>
          <button onClick={reset_status}>Sair</button>
        </form>
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
        />
      </div>
    </div>
  )
}
