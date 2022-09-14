import axios from "axios";

export async function HospedesUpdate(id, Hospede){
    try {
        const response = (await axios.patch(`https://api-rest-hotel.vercel.app/hospedes/${id}`, Hospede)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function ReservasUpdate(id, Reserva){
    try {
        const response = (await axios.patch(`https://api-rest-hotel.vercel.app/reservas/${id}`, Reserva)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function QuartosUpdate(id, Quarto){
    try {
        const response = (await axios.patch(`https://api-rest-hotel.vercel.app/quartos/${id}`, Quarto)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function FuncionariosUpdate(id, Funcionario){
    try {
        const response = (await axios.patch(`https://api-rest-hotel.vercel.app/funcionarios/${id}`, Funcionario)).data
        return response
    } catch (error) {
        console.log(e)
    }
}