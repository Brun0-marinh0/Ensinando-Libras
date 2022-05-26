import { useEffect, useState } from "react"
import styles from './styles.module.scss'
import { Top } from "../../controllers/rank/top"
import Link from "next/link"

interface rankRequest{
    name: string,
    points: number
}

export default function Rank(){

    const [position, setPosition] = useState<rankRequest[]>([])

    useEffect(() =>{
        const getRank = async () =>{
            const res = await Top()
            setPosition([...res.data])
        }
        getRank()
    },[])

    const listPosition=position.map(
        (c, i) =>
        <div key={i} className={styles.rows}>
            <h2>{c.name}</h2>
            <h2>{c.points}</h2>
        </div>
    )

    return(
        <>
            {position.length == 0 && (
                <div>
                    <p>0</p>
                </div>
            )}

            {position.length > 0 && (
                <div className={styles.container}>
                    <div>
                        <header>
                            <Link href='/selectQuiz'> VOLTAR</Link>
                        </header>
                        <div className={styles.title}>
                            <img src="./img/trophy.svg" alt="" />
                            <h1>Rank</h1>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {listPosition}
                    </div>
                </div>
            )}
        </>
    )
    
}