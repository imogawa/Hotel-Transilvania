import validaHospede from "./ValidationService";
import { HospedeModel } from "../models/CrudModel";

export default function modelaHospede(payload, setErro){
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