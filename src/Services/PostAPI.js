import { Post } from "./ServiceAPI"

export async function HospedesPost(Hospede){
    const response = await Post(Hospede, "hospedes")
    return response
}

export async function ReservasPost(Reserva){
    const response = await Post(Reserva, "reservas")
    return response
}

export async function QuartosPost(Quarto){
    const response = await Post(Quarto, "Quarto")
    return response
}

export async function FuncionariosPost(Funcionario){
    const response = await Post(Funcionario, "funcionarios")
    return response
}