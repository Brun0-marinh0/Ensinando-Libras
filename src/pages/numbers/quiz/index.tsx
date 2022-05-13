import style from './styles.module.scss'

import Quiz from "../../../components/Quiz";

export default function quiz(){
    return(
        <div className={style.content}>
            <div className={style.container}>
                <Quiz/>
            </div>
        </div>
    )
}