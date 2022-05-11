import styles from './styles.module.scss'

import NivelNumber from "../components/NivelNumber";
import ButtonsQuest from '../components/ButtonsQuest';

export default function selectQuiz(){
    return(
        <div className={styles.content}>
            <NivelNumber
                stylesColor={'var(--ceano)'}
                NivelNumber={1}
            />
            <ButtonsQuest/>
            <NivelNumber
                stylesColor={'var(--orange)'}
                NivelNumber={2}
            />
        </div>
    )
}