import { DeleteById } from "./ServiceAPI"

export async function HospedesDeleteById(id){
    try {
        const response = await DeleteById(id, "hospedes")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function ReservasDeleteById(id){
    try {
        const response = await DeleteById(id, "reservas")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function QuartosDeleteById(id){
    try {
        const response = await DeleteById(id, "quartos")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function FuncionariosDeleteById(id){
    try {
        const response = await DeleteById(id, "funcionarios")
        return response
    } catch (e) {
        console.log(e)
        return []
    }
}