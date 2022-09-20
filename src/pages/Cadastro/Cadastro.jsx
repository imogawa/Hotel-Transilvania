import React, { useEffect, useState } from "react";
import { modelaHospede } from "../../Services/HospedeService";
import { HospedesPost } from "../../Services/PostAPI";
import Botao from "../../components/Botao/Botao";
import logo from "../../assets/zebra.png"
import iconX from "../../assets/icone-x.png"
import style from "./Cadastro.module.css"   
import Alert from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";

export default function Cadastro(){
    const [erros, setErros] = useState([])
    const [nome, setNome] = useState("*")
    const [cpf, setCpf] = useState("*")
    const [email, setEmail] = useState("*")
    const [telefone, setTelefone] = useState("*")
    const [senha, setSenha] = useState("*")
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("*")
    const [redireciona, setRedireciona] = useState(false)
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    async function cadastrarHospede(event){
        event.preventDefault()
        const payload = {
            nome,
            cpf,
            email,
            telefone,
            senha,
            confirmacaoSenha
        }
        const newHospede = modelaHospede(payload)
        const erro = newHospede.erro || []

        if(!newHospede.erro){
            HospedesPost(newHospede).then((response)=>{
                setRedireciona(true)
                setTimeout(()=>{
                    setRedireciona(false)
                    setLogin(true)
                }, 1500)
            }).catch((e)=>{
                erro.push(e.request.response)
            })
        }

        setErros(erro)
    }

    useEffect(()=>{
        if(login){
            return navigate("/login")
        }
    },[login])

    return(
        <div className={style.cadastro}>
            <h2>Cadastre-se</h2>
            <div>
                <div className={style.formulario}>            
                    <form>
                        <label >
                            Nome:
                            <input type="text" onKeyUp={(event)=>setNome(event.target.value)} />
                        </label>
                        <label >
                            CPF:
                            <input type="text" onKeyUp={(event)=>setCpf(event.target.value)} />
                        </label>
                        <label >
                            E-mail:
                            <input type="text" onKeyUp={(event)=>setEmail(event.target.value)} />
                        </label>
                        <label >
                            Telefone:
                            <input type="text" onKeyUp={(event)=>setTelefone(event.target.value)} />
                        </label>
                        <label >
                            Senha:
                            <input type="password" onKeyUp={(event)=>setSenha(event.target.value)} />
                        </label>
                        <label >
                            Confirmação de senha:
                            <input type="password" onKeyUp={(event)=>setConfirmacaoSenha(event.target.value)} />
                        </label>
                    </form>
                        <div>
                            <Botao texto={"Enviar"} click={cadastrarHospede} largura={"200px"} altura={"40px"} />
                        </div>
                </div>
                <div className={style.saudacao}>
                    <h1>SEJA<br/>BEM-VINDO!</h1>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className={style.alerts} style={{display:`${erros.length?"flex":"none"}`}}>
                <p>Erros:</p>
                <br />
                    {erros.map((item, index)=>{
                        return(
                            <Alert messagem={item} key={index} />
                        )
                    })}
                <img src={iconX} alt="fechar" onClick={()=>setErros([])} />
            </div>
            <div className={style.sucesso} style={{display: `${redireciona?"flex":"none"}`}}>
                <Alert messagem={"Cadastro efetuado com sucesso, redirecionando a página login."}/>
            </div>
        </div>
    )
}