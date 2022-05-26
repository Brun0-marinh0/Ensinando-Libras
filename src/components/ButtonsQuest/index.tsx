import { useState } from 'react'
import Link  from 'next/link'

import styles from './styles.module.scss'
export interface ButtonsQuestProps{
    nivelNumber: number,
    typeQuest: String,
    imgQuest: string,
    linkStudy: string,
    linkQuest:string,
    styleBg: string,
    styleBorder: string
}

export default function ButtonsQuest({nivelNumber, typeQuest, imgQuest, linkStudy, linkQuest, styleBg, styleBorder}:ButtonsQuestProps){

    const [showOptions, setShowOptions] = useState(false)

    return(
        <>
            <button 
                className={styles.btnQuest}
                style={{background: styleBg, borderColor:styleBorder}}
                onClick={()=> {setShowOptions(true)}}
            >
                <div className={styles.back}>
                    <img src="./img/buttons/bg.svg" alt="" />
                </div>
                <div className={styles.container}>
                    <div className={styles.contentInform}>
                        <p>Nível: {nivelNumber}</p>
                        <h1>{typeQuest}</h1>
                        <div>
                            <p>Começar</p>
                            <img src="./img/buttons/iconStart.svg" alt="" />
                        </div>
                    </div>
                    <div className={styles.ilustration}>
                        <img src={imgQuest} alt="" />
                    </div>
                </div>
            </button>

            {showOptions &&
                <div 
                    className={styles.containerOptios}
                    onClick={()=>{setShowOptions(false)}} 
                    >
                    <div>
                        <div>
                            <Link href={linkStudy}>Estudar</Link>
                            <Link href={linkQuest}>Praticar</Link>
                        </div>
                    </div>   
                </div>
            }
        </>
    )
}