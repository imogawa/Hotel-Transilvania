import React from 'react'
import styles from './Botao.module.css'

export default function Botao({texto, classe, link, click, altura, largura}){
    return (
        <a href={link}>
            <button
            className={classe}
            onClick={click}
            style={
                {
                    width:`${largura}`,
                    height:`${altura}`
                }
            }
            >
                {texto}
            </button>
        </a>
    )
}