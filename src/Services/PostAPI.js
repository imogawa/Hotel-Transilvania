import { Post } from "./ServiceAPI"

export async function HospedesPost(Hospede){
    try {
        const response = await Post(Hospede, "hospedes")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function ReservasPost(Reserva){
    try {
        const response = await Post(Reserva, "reservas")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function QuartosPost(Quarto){
    try {
        const response = await Post(Quarto, "Quarto")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function FuncionariosPost(Funcionario){
    try {
        const response = await Post(Funcionario, "funcionarios")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}