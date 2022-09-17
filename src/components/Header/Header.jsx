import React from "react";
import style from './Header.module.css'
import logo from '../../assets/zebra.png'

export default function Header(){
    const itens = ['Menu','Nossos Quartos','Fale Conosco','Cadastre-se','Login','Sobre nós']
    const hrefs = ['','','','','','']
    return (
        <header>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                {itens.map((item, index)=>{
                    return(
                        <a href={hrefs[index]}><li>{item}</li></a>
                    )
                })}
            </nav>
        </header>
    )
}
