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
       <div className={styles.myImages}>
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
                <p>Abaixo você conseguirá visualizar as letras do alfabeto (A-Z + Ç). Assim como as letras, os números também são representados manualmente. Quando devemos utilizar?</p>
                <ul>
                    <li>Para indagar ou condizer o nome de pessoas, lugares, marcas e cláusula técnicos que até agora não possuem registro próprio em Libras;</li>
                    <li>Para indagar os sinais que até agora não conhecemos. Por exemplo, se alguém não conhece o registro de Alemanha, pode indagar soletrando A-L-E-M-A-N-H-A;</li>
                    <li>Para indicar um vocábulo da língua portuguesa que por suprimento passou a ser à Libras. Exemplo: CPU, USB.</li>
                </ul>
            </div>
            <div className={styles.imgBox}>
                {listImages}
            </div>
        </div>
    )
}