import styles from './styles.module.scss'

export default function Navbar(){
    return(
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <div>o</div>
                    <div>
                        <img src="./img/menu.svg" alt="" />
                    </div>
                </div>
            </nav>
    )
}