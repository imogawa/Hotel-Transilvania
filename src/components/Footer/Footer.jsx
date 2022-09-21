import React from "react";
import style from './Footer.module.css'
import logoResilia from './../../assets/logoResilia.png'
import logoStone from './../../assets/logoStone.png'


export default function Footer(){
    return (
        <footer>
            <div className={style.logos}>
                <img className={style.imgResilia} src={logoResilia} alt="Logo" />
                <img className={style.imgStone} src={logoStone} alt="Logo" />
            </div>
            <div className={style.copy}>
                <span>Squad6 &copy; 2022</span>
            </div>
            <div className={style.texto}>
                <p>
                    Projeto desenvolvido com a Resilia em parceiria com a Stone
                </p>
                <p> 
                    Possui alguma crítica construtiva para a melhoria do nosso site, nos mande uma mensagem <a href=""></a>
                </p>
            </div>
        </footer>
    ) 
}
