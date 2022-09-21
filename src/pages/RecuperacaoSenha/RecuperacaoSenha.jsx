import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import Botao from "../../components/Botao/Botao";
import { HospedesUpdateByEmail } from "../../Services/UpdateAPI";
import { validaRecuperacao } from "../../Services/ValidationService";
import style from "./RecuperacaoSenha.module.css";
import iconX from "../../assets/icone-x.png";

export default function RecuperacaoSenha() {

    const [email, setEmail] = useState('*')
    const [senha, setSenha] = useState('*')
    const [confirmaSenha, setConfirmaSenha] = useState('*')
    const [erros, setErros] = useState([])
    const [redireciona, setRedireciona] = useState(false)
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    function eventoClick(event) {
        event.preventDefault()
        const payload = {
            email,
            senha,
            confirmaSenha
        }

        const retorno = validaRecuperacao(payload)

        const erro = [...retorno]

        if (!erro.length) {
            HospedesUpdateByEmail(payload).then((response) => {
                localStorage.setItem('emailRecuperado', response.email)
                setRedireciona(true)
                setTimeout(() => {
                    setRedireciona(false)
                    setLogin(true)
                }, 1500)
            }).catch((e) => {
                erro.push('email não encontrado!')
            })
        }

        setErros(erro)
    }

    useEffect(() => {
        if (login) {
            return navigate("/login")
        }
    }, [login])

    return (
        <div className={style.recuperar}>
            <h2>Redefina sua Senha:</h2>
            <div className={style.formularioRecuperar}>
                <form>
                    <label >
                        E-mail:
                        <input type="text" onKeyUp={(event) => setEmail(event.target.value)} />
                    </label>
                    <label >
                        Senha:
                        <input type="password" onKeyUp={(event) => setSenha(event.target.value)} />
                    </label>
                    <label >
                        Confirmação de senha:
                        <input type="password" onKeyUp={(event) => setConfirmaSenha(event.target.value)} />
                    </label>
                </form>
                <div>
                    <Botao classe={style.botaoRecupera} texto={"Enviar"} click={eventoClick} largura={"200px"} altura={"40px"} />
                </div>
            </div>
            <div className={style.alerts} style={{ display: `${erros.length ? "flex" : "none"}` }}>
                <p>Erros:</p>
                <br />
                {erros.map((item, index) => {
                    return (
                        <Alert messagem={item} key={index} />
                    )
                })}
                <img src={iconX} alt="fechar" onClick={() => setErros([])} />
            </div>
            <div className={style.sucesso} style={{ display: `${redireciona ? "flex" : "none"}` }}>
                <Alert messagem={"Cadastro efetuado com sucesso, redirecionando a página login."} />
            </div>
        </div>
    )
}