import React from 'react';
import Link  from 'next/link'
import styles from './styles.module.scss'

export default function study(){

    const myImages=[
        {image: "../img/caracters/caracter_a.svg", title:"a"},
        {image: "../img/caracters/caracter_b.svg", title:"b"},
        {image: "../img/caracters/caracter_c.svg", title:"c"},
        {image: "../img/caracters/caracter_Ç.svg", title:"Ç"},
        {image: "../img/caracters/caracter_d.svg", title:"d"},
        {image: "../img/caracters/caracter_e.svg", title:"e"},
        {image: "../img/caracters/caracter_f.svg", title:"f"},
        {image: "../img/caracters/caracter_g.svg", title:"g"},
        {image: "../img/caracters/caracter_h.svg", title:"h"},
        {image: "../img/caracters/caracter_i.svg", title:"i"},
        {image: "../img/caracters/caracter_j.svg", title:"j"},
        {image: "../img/caracters/caracter_k.svg", title:"k"},
        {image: "../img/caracters/caracter_l.svg", title:"l"},
        {image: "../img/caracters/caracter_m.svg", title:"m"},
        {image: "../img/caracters/caracter_n.svg", title:"n"},
        {image: "../img/caracters/caracter_o.svg", title:"o"},
        {image: "../img/caracters/caracter_p.svg", title:"p"},
        {image: "../img/caracters/caracter_q.svg", title:"q"},
        {image: "../img/caracters/caracter_r.svg", title:"r"},
        {image: "../img/caracters/caracter_s.svg", title:"s"},
        {image: "../img/caracters/caracter_t.svg", title:"t"},
        {image: "../img/caracters/caracter_u.svg", title:"u"},
        {image: "../img/caracters/caracter_v.svg", title:"v"},
        {image: "../img/caracters/caracter_w.svg", title:"w"},
        {image: "../img/caracters/caracter_x.svg", title:"x"},
        {image: "../img/caracters/caracter_y.svg", title:"y"},
        {image: "../img/caracters/caracter_z.svg", title:"z"},
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
            <Link href='/selectQuiz'>  VOLTAR</Link>
            </header>
            <h1>Letras</h1>
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