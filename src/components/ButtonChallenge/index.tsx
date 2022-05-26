import Link from "next/link"
import Styles from './styles.module.scss'


export default function ButtonsChallenge(){
    return(
        <div className={Styles.bnt}>
            <Link href='desafio'>
                <div className={Styles.content}>
                    Desafio
                    <img src='./img/buttons/start.svg' alt=""/>
                </div>
            </Link>
        </div>
    )
}