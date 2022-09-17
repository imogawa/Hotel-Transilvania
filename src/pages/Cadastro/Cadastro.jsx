import React, { useState } from "react";
import modelaHospede from "../../Services/HospedeService";
import { HospedesPost } from "../../Services/PostAPI";
import Botao from "../../components/Botao/Botao";
import logo from "../../assets/zebra.png"
import style from "./Cadastro.module.css"   

export default function Cadastro(){
    const [novoHospede, setNovoHospede] = useState({})
    const [erro, setErro] = useState([])
    const [nome, setNome] = useState("*")
    const [cpf, setCpf] = useState("*")
    const [email, setEmail] = useState("*")
    const [telefone, setTelefone] = useState("*")
    const [senha, setSenha] = useState("*")
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("*")

    function cadastrarHospede(event){
        event.preventDefault()
        const payload = {
            nome,
            cpf,
            email,
            telefone,
            senha,
            confirmacaoSenha
        }
        const newHospede = modelaHospede(payload, setErro, erro)

        if(newHospede){
            setNovoHospede(newHospede)
        }

        HospedesPost(novoHospede).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e.request.response)
        })
    }

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
                            <input type="text" onKeyUp={(event)=>setSenha(event.target.value)} />
                        </label>
                        <label >
                            Confirmação de senha:
                            <input type="text" onKeyUp={(event)=>setConfirmacaoSenha(event.target.value)} />
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
        </div>
    )
}