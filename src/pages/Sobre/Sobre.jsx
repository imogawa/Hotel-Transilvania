import React from "react";
import style from "./Sobre.module.css"
import image from "../../assets/imagem-sobre.jpeg"
import logo from "../../assets/logocastle-logo.png"

export default function Sobre(){
    return(
        <div className={style.sobre}>
            <div className={style.titulo}>
                <img src={logo} alt="logo" />
                <h1>NOSSA <br/> HISTÓRIA</h1>
            </div>
            <div className={style.paragrafo1}>
                <p>
                    Mussum Ipsum, cacilds vidis litro abertis. 
                    Nec orci ornare consequat. Praesent lacinia ultrices consectetur. 
                    Sed non ipsum felis.Delegadis gente finis, bibendum egestas augue arcu ut est.
                    Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
                    Atirei o pau no gatis, per gatis num morreus.
                    Mussum Ipsum, cacilds vidis litro abertis. 
                    Nec orci ornare consequat. Praesent lacinia ultrices consectetur. 
                    Sed non ipsum felis.Delegadis gente finis, bibendum egestas augue arcu ut est.
                    Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
                    Atirei o pau no gatis, per gatis num morreus.
                    Mussum Ipsum, cacilds vidis litro abertis. 
                    Nec orci ornare consequat. Praesent lacinia ultrices consectetur. 
                    Sed non ipsum felis.Delegadis gente finis, bibendum egestas augue arcu ut est.
                    Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
                    Atirei o pau no gatis, per gatis num morreus.
                </p>
                <img src={image} alt="Imagem do hotel" />
            </div>
            <div className={style.paragrafo2}>
                <p>
                    Mussum Ipsum, cacilds vidis litro abertis. 
                    Nec orci ornare consequat. Praesent lacinia ultrices consectetur. 
                    Sed non ipsum felis.Delegadis gente finis, bibendum egestas augue arcu ut est.
                    Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
                    Atirei o pau no gatis, per gatis num morreus.
                    Mussum Ipsum, cacilds vidis litro abertis. 
                    Nec orci ornare consequat. Praesent lacinia ultrices consectetur. 
                    Sed non ipsum felis.Delegadis gente finis, bibendum egestas augue arcu ut est.
                    Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
                    Atirei o pau no gatis, per gatis num morreus.
                </p>
            </div>
        </div>
    )
}

