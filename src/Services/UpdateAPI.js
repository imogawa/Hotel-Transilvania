import { UpdateById } from "./ServiceAPI"

export async function FuncionariosUpdateById(id, Funcionario){
    try {
        const response = await UpdateById(id, Funcionario, "Funcionarios")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function ReservasUpdateById(id, Reserva){
    try {
        const response = await UpdateById(id, Reserva, "reservas")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function QuartosUpdateById(id, Quarto){
    try {
        const response = await UpdateById(id, Quarto, "quartos")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function FuncionariosUpdateById(id, Funcionario){
    try {
        const response = await UpdateById(id, Funcionario, "funcionarios")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}