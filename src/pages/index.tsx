import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'


export default function Home() {
  const router = useRouter()

  const [myTransition, setMyTransition] = useState(false)

  const transitionCurtain = () => { 
    setMyTransition(true)
    
  }

  const nome_legal = () => {
    transitionCurtain()
    setTimeout(() => {
      router.push('/selectQuiz')
    }, 2000)

  }

  return (
    <div>
      <div className={styles.curtain}>
        <div id="curtainL" className={myTransition ? styles.curtainL : null}></div>
        <div id="curtainR" className={myTransition ? styles.curtainR : null}></div>
      </div>

      <div className={styles.frame}>
        <div className={styles.title}>
          <h1 className={myTransition ? styles.textTitle : null}>
            Manus
          </h1>
        </div>
        <div>
          <div className="ilustration"></div>
          <button 
            onClick={nome_legal}
            className={myTransition ? styles.btnStart : null}
          >
            Começar
          </button>
        </div>
      </div>

    </div>

  )
}
