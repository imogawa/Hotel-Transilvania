import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Botao from '../Botao/Botao';
import style from './FormLogin.module.css';
import { useNavigate } from "react-router-dom";

function validaEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    return regex.test(email) //ele testa o e-mail de acordo com o regex
}


function Input() {
    const [quartos, setQuartos] = useState(false)
    const [valorEntrada, setValorEntrada] = useState([])
    const navigate = useNavigate()

    //recebendo o estado do objeto
    function handleValidateInputs(event) {
        event.preventDefault();


        const { email, senha } = valorEntrada

        if (!validaEmail(email)) {
            return alert("E-mail ou senha inválidos")
        }
        if (senha.length < 4) {
            return alert("E-mail ou senha inválidos")
        }
        else {
            alert("Login efetuado com sucesso!")
        }
        setQuartos(true)
    }

    useEffect(() => {
        if (quartos) {
            return navigate("/quartos")
        }
    }, [quartos])

    return (
        <div className={style.formLogin}>
            <h2>Entre na sua conta</h2>
            <form>
                <input type="text" placeholder="E-mail" onChange={e => setValorEntrada({ ...valorEntrada, email: e.target.value })} />
                <input type="password" placeholder="Senha" onChange={e => setValorEntrada({ ...valorEntrada, senha: e.target.value })} />
            </form>
            <div className="botaoContainer">
                <Botao classe={style.botaoLogin} texto={"Entrar"} click={handleValidateInputs} />
            </div>
            <hr />
            <Link to="/recupera">Esqueceu sua senha?</Link>
        </div>
    )
}

export default Input;