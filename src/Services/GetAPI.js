import axios from "axios";

export async function HospedesGet(){
    try {
        const response = (await axios.get("https://api-rest-hotel.vercel.app/hospedes")).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function ReservasGet(){
    try {
        const response = (await axios.get("https://api-rest-hotel.vercel.app/reservas")).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function QuartosGet(){
    try {
        const response = (await axios.get("https://api-rest-hotel.vercel.app/quartos")).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function FuncionariosGet(){
    try {
        const response = (await axios.get("https://api-rest-hotel.vercel.app/funcionarios")).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function HospedesGetById(id){
    try {
        const response = (await axios.get(`https://api-rest-hotel.vercel.app/hospedes/${id}`)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function ReservasGetById(id){
    try {
        const response = (await axios.get(`https://api-rest-hotel.vercel.app/reservas/${id}`)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function QuartosGetById(id){
    try {
        const response = (await axios.get(`https://api-rest-hotel.vercel.app/quartos/${id}`)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function FuncionariosGetById(id){
    try {
        const response = (await axios.get(`https://api-rest-hotel.vercel.app/funcionarios/${id}`)).data
        return response
    } catch (error) {
        console.log(e)
    }
}