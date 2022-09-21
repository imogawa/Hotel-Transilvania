import axios from "axios";

export async function Get(nomeDaEntidade){
    const response = (await axios.get(`https://api-rest-hotel.vercel.app/${nomeDaEntidade}`)).data
    return response
}

export async function GetById(id, nomeDaEntidade){
    const response = (await axios.get(`https://api-rest-hotel.vercel.app/${nomeDaEntidade}/${id}`)).data
    return response
}

export async function Post(ObjetoEntidade, nomeDaEntidade){
    const response = (await axios.post(`https://api-rest-hotel.vercel.app/${nomeDaEntidade}`, ObjetoEntidade)).data
    return response
}

export async function UpdateById(id, ObjetoEntidade, nomeDaEntidade){
    const response = (await axios.patch(`https://api-rest-hotel.vercel.app/${nomeDaEntidade}/${id}`, ObjetoEntidade)).data
    return response
}

export async function DeleteById(id, nomeDaEntidade){
    const response = (await axios.delete(`https://api-rest-hotel.vercel.app/${nomeDaEntidade}/${id}`)).data
    return response
}

export async function UpdateByEmail(ObjetoEntidade, nomeDaEntidade){
    const response = (await axios.patch(`https://api-rest-hotel.vercel.app/${nomeDaEntidade}/update/email`, ObjetoEntidade)).data
    return response
}