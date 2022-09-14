import { Get, GetById } from "./ServiceAPI"

export async function HospedesGet(){
    try {
        const response = await Get("hospedes")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function ReservasGet(){
    try {
        const response = await Get("reservas")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function QuartosGet(){
    try {
        const response = await Get("quartos")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function FuncionariosGet(){
    try {
        const response = await Get("funcionarios")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function HospedesGetById(id){
    try {
        const response = await GetById(id, "hospedes")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function ReservasGetById(id){
    try {
        const response = await GetById(id, "reservas")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function QuartosGetById(id){
    try {
        const response = await GetById(id, "quartos")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}

export async function FuncionariosGetById(id){
    try {
        const response = await GetById(id, "funcionarios")
        return response
    } catch (error) {
        console.log(e)
        return []
    }
}