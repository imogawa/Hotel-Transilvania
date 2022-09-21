import React, { useState } from "react";
import style from "./RecuperacaoSenha.module.css";

export default function RecuperacaoSenha(){

    const [email, setEmail] = useState('*')
    const [senha, setSenha] = useState('*')
    const [confirmaSenha, setConfirmaSenha] = useState('*')

    function eventoClick(event){
        event.preventDefault()
        const payload = {
            email,
            senha,
            confirmaSenha
        }
    }

    return (
        <div className={style.recuperar}>

        </div>
    )
}