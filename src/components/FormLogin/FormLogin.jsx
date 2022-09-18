import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Botao from '../Botao/Botao';
import style from './FormLogin.module.css';
import { verificaLogin } from '../../Services/HospedeService'

function Input({ classe }) {
    const [email, setEmail] = useState("*")
    const [senha, setSenha] = useState("*")

    function requestLogin(event) {
        event.preventDefault()
        const payload ={
            email, 
            senha
        }
        verificaLogin(payload).then(response => {
            localStorage.setItem("email", response.email)
        })
    }

    return (
        <div className={style.formLogin}>
            <form>
                <input type="text" placeholder="E-mail" onChange={event => setEmail(event.target.value)} />
                <input type="text" placeholder="Senha" onChange={event => setSenha(event.target.value)} />
            </form>
            <Botao texto={"Entrar"}/>
            <Link to="/">Esqueceu sua senha?</Link>
        </div>
    )
}

export default Input;