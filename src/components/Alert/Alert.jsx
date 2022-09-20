import React from "react"
import style from "./Alert.module.css"

export default function Alert({messagem}){
    return(
        <div className={style.alert}>
            <p>{messagem}</p>
        </div>
    )
}