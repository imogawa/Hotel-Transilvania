export async function HospedesPost(Hospede){
    try {
        const response = (await axios.post("https://api-rest-hotel.vercel.app/hospedes", Hospede)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function ReservasPost(Reserva){
    try {
        const response = (await axios.post("https://api-rest-hotel.vercel.app/reservas", Reserva)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function QuartosPost(Quarto){
    try {
        const response = (await axios.post("https://api-rest-hotel.vercel.app/quartos", Quarto)).data
        return response
    } catch (error) {
        console.log(e)
    }
}

export async function FuncionariosPost(Funcionario){
    try {
        const response = (await axios.post("https://api-rest-hotel.vercel.app/funcionarios", Funcionario)).data
        return response
    } catch (error) {
        console.log(e)
    }
}