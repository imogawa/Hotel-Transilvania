import React from "react";
import style from './Header.module.css'
import logo from '../../assets/zebra.png'
import { Link } from "react-router-dom";

export default function Header(){
    const itens = ['Home','Nossos Quartos','Fale Conosco','Cadastre-se','Login','Sobre nós']
    const hrefs = ['/','/quartos','/time','/cadastro','/login','/sobre']
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} className={style.logoHeader} alt="Logo" />
                </Link>
            </div>
            <nav>
                {itens.map((item, index)=>{
                    return(
                        <li key={index}> 
                            <Link to={hrefs[index]}>
                                {item}
                            </Link>
                        </li>
                    )
                })}
            </nav>
        </header>
    )
}
