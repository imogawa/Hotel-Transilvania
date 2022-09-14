import axios from "axios";

export async function HospedesDeleteById(id){
    try {
        const response = (await axios.delete(`https://api-rest-hotel.vercel.app/hospedes/${id}`)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function ReservasDeleteById(id){
    try {
        const response = (await axios.delete(`https://api-rest-hotel.vercel.app/reservas/${id}`)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function QuartosDeleteById(id){
    try {
        const response = (await axios.delete(`https://api-rest-hotel.vercel.app/quartos/${id}`)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function FuncionariosDeleteById(id){
    try {
        const response = (await axios.delete(`https://api-rest-hotel.vercel.app/funcionarios/${id}`)).data
        return response
    } catch (error) {
        console.log(e)
    }
}