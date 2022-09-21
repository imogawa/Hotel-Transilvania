import React from "react";
import style from './Footer.module.css'
import Time from "../../pages/Time/Time";
import logoResilia from './../../assets/logoResilia.png'
import logoStone from './../../assets/logoStone.png'



export default function Footer(){
    return (
        <footer>
            <div className={style.logos}>
                <img className={style.imgResilia} src={logoResilia} alt="Logo" />
            </div>
            <div className={style.copy}>
                <span>Squad6 &copy; 2022</span>
            </div>
            <div className={style.texto}>
            <div className={style.logos}>
                <img className={style.imgStone} src={logoResilia} alt="Logo" />
            </div>
            <hr />
                <p> 
                    Possui alguma crítica construtiva para a melhoria do nosso site? nos mande uma mensagem <a href="/time"><h4>Fale Conosco</h4></a>
                </p>
            </div>
        </footer>
    ) 
}
