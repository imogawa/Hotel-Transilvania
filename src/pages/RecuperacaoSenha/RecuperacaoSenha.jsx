import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HospedesUpdateByEmail } from "../../Services/UpdateAPI";
import { validaRecuperacao } from "../../Services/ValidationService";
import style from "./RecuperacaoSenha.module.css";

export default function RecuperacaoSenha(){

    const [email, setEmail] = useState('*')
    const [senha, setSenha] = useState('*')
    const [confirmaSenha, setConfirmaSenha] = useState('*')
    const [erros, setErros] = useState([])
    const [redireciona, setRedireciona] = useState(false)
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    function eventoClick(event){
        event.preventDefault()
        const payload = {
            email,
            senha,
            confirmaSenha
        }

        const retorno = validaRecuperacao(payload)

        const erro = [...retorno]

        if(!erro.length){
            HospedesUpdateByEmail.then((response) => {
                localStorage.setItem('emailRecuperado', response.email)
            }).catch((e) => {
                erro.push(e.request.response)
            })
        }

        setErros(erro)
    }

    return (
        <div className={style.recuperar}>

        </div>
    )
}