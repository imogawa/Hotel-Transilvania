import React from "react";
import style from './Login.module.css';
import Input from "../../components/FormLogin/FormLogin";

export default function Login() {
    return (
        <div className={style.login}>
            <Input type={'text'} placeholder={'E-mail'} />
        </div>
    )
}