import validaHospede from "./ValidationService";
import { HospedeModel } from "../models/CrudModel";
import axios from "axios";

export function modelaHospede(payload, setErro){
    const erro = validaHospede(payload)
    if(!erro.length){
        const Hospede = new HospedeModel(
            payload.nome,
            payload.cpf,
            payload.email,
            payload.telefone,
            payload.senha
        )
        return Hospede
    }
    return {erro, isValid: false}
}

export async function verificaLogin(payload) {
    const response = (await axios.post('https://api-rest-hotel.vercel.app/upload/email', payload)).data
    return response
}