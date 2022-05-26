import styles from './styles.module.scss'

import NivelNumber from "../components/NivelNumber";
import ButtonsQuest from '../components/ButtonsQuest';
import ButtonsChallenge from '../components/ButtonChallenge';
import Link from 'next/link';


export default function selectQuiz(){
    return(
        <div className={styles.content}>
            <NivelNumber
                stylesColor={'var(--ceano)'}
                NivelNumber={1}
            />

            {/* buttons nivel 1 =================== */}
            <ButtonsQuest
                nivelNumber={1}
                typeQuest={'Números'}
                imgQuest={'./img/buttons/ilustrationNumber.svg'}
                linkStudy={'/numbers/study'}
                linkQuest={'/numbers/quiz'}

                // styles
                styleBg={'var(--blue)'}
                styleBorder={'var(--border_blue)'}
            />

            <ButtonsQuest
                nivelNumber={1}
                typeQuest={'Letras'}
                imgQuest={'./img/buttons/ilustrationCaracter.svg'}
                linkStudy={'/caracter/study'}
                linkQuest={'/caracter/quiz'}

                // styles
                styleBg={'var(--purple)'}
                styleBorder={'var(--border_purple)'}
            />

            <ButtonsChallenge/>
            {/* buttons nivel 1 =================== */}
            
            <NivelNumber
                stylesColor={'var(--orange)'}
                NivelNumber={2}
            />
            <footer>
               
                <Link href='rank'>
                    <img src="./img/trophy.svg" alt="" />
                </Link>
            </footer>
        </div>
    )
}