import Link from 'next/link'
import styles from './styles.module.scss'

export default function desafio(){
    return(
        <div className={styles.modalContent}>
            <div className={styles.modal}>
            <header>
                <Link href='/selectQuiz'>  VOLTAR</Link>
            </header>

                <h1>No momento estamos sem o desafio</h1>
                <h2>Pratique nossas categorias nível 1 primeiramente</h2>
            </div>
        </div>
    )
}