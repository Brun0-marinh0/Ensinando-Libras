import { useState } from 'react'
import Link  from 'next/link'

import styles from './styles.module.scss'

export default function ButtonsQuest(){

    const [showOptions, setShowOptions] = useState(false)

    return(
        <>
            <button 
                className={styles.btnQuest} 
                onClick={()=> {setShowOptions(true)}}
            >
                <div className={styles.back}>
                    <img src="./img/buttons/bg.svg" alt="" />
                </div>
                <div className={styles.container}>
                    <div className={styles.contentInform}>
                        <p>Nível: 1/5</p>
                        <h1>Números</h1>
                        <div>
                            <p>Começar</p>
                            <img src="./img/buttons/iconStart.svg" alt="" />
                        </div>
                    </div>
                    <div className={styles.ilustration}>
                        <img src="./img/buttons/ilustrationNumber.svg" alt="" />
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
                            <Link href="/">Studar</Link>
                            <Link href="/">Praticar</Link>
                        </div>
                    </div>   

                </div>
            }
        </>
    )
}