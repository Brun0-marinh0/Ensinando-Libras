import styles from './styles.module.scss'

export interface NivelNumberProps{
    stylesColor: string,
    NivelNumber: number
}

export default function NivelNumber({stylesColor, NivelNumber}:NivelNumberProps){
    return(
        <div 
            className={styles.circle}
            style={{background: stylesColor}}
        >
            <h1>{NivelNumber}</h1>
        </div>
    )
}