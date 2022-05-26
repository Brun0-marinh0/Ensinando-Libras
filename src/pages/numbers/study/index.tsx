import React from 'react';
import Link  from 'next/link'
import styles from './styles.module.scss'

export default function study(){

    const myImages=[
        {image: "../img/numbers/number_0.svg", title:"0"},
        {image: "../img/numbers/number_1.svg", title:"1"},
        {image: "../img/numbers/number_2.svg", title:"2"},
        {image: "../img/numbers/number_3.svg", title:"3"},
        {image: "../img/numbers/number_4.svg", title:"4"},
        {image: "../img/numbers/number_5.svg", title:"5"},
        {image: "../img/numbers/number_6.svg", title:"6"},
        {image: "../img/numbers/number_7.svg", title:"7"},
        {image: "../img/numbers/number_8.svg", title:"8"},
        {image: "../img/numbers/number_9.svg", title:"9"}
    ]

    const listImages=myImages.map(
       (c, i) => 
       <div className={styles.myImages} key={i}>
           <img src={c.image} alt={c.title} />
           <h2>{c.title}</h2>
       </div>
    )

    return(
        <div className={styles.container}>
            <header>
            <Link href='/selectQuiz'>VOLTAR</Link>
            </header>
            <h1>Números</h1>
            <div>
                <p>Abaixo você conseguirá visualizar os números de (0 - 9).</p>
            </div>
            <div className={styles.imgBox}>
                {listImages}
            </div>
        </div>
    )
}