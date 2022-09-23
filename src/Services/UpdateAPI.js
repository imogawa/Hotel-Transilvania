import { UpdateByEmail, UpdateById } from "./ServiceAPI"

export async function HospedesUpdateById(id, Hospede){
    try {
        const response = await UpdateById(id, Hospede, "hospedes")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function ReservasUpdateById(id, Reserva){
    try {
        const response = await UpdateById(id, Reserva, "reservas")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function QuartosUpdateById(id, Quarto){
    try {
        const response = await UpdateById(id, Quarto, "quartos")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function FuncionariosUpdateById(id, Funcionario){
    try {
        const response = await UpdateById(id, Funcionario, "funcionarios")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function HospedesUpdateByEmail(hospede){
    const response = await UpdateByEmail(hospede, 'hospedes')
    return response
}