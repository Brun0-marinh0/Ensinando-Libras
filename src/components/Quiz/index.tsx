import style from './styles.module.scss'

export default function Quiz(){
    return(
        <div className={style.frame}>

            <div className={style.nivel}>
                <div>
                    <div className={style.progress}>
                        <div></div>
                    </div>
                    <div className={style.circleNivel}>
                        <h1>1</h1>
                    </div>
                </div>
            </div>

            <div className={style.quest}>
                <h1>1-pergunta</h1>
            </div>
            <div>
                <div className={style.options}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <button>Concluir</button>
        </div>
    )
}