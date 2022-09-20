import React, { useEffect, useState } from 'react';
import Style from './Cards.module.css'
import Quarto from '../../assets/quarto.jpg'

export default function Cards(){
    const [reservas, setReservas] = useState([])
    // const api = 'https://api-rest-hotel.vercel.app/reservas'
    // const fetchData = async() => {
    //     const response = await api.get()
    //     setReservas(response?.data)
    //     console.log(response?.data)
    // }
    useEffect(() => {
        fetch('https://api-rest-hotel.vercel.app/reservas')
        .then(response => {
            if(response.ok){
                const a=response.json()
                console.log(a)
                return a
            } throw response
        })
        .then(reservas=>{
            setReservas(reservas)
            console.log(reservas)
        })
    },[] );

    return (
        <div className={Style.container}>
            <div className={Style.card}>
                <div className={Style.img}>
                    <img src={Quarto}/>
                </div>
                <h1>Suíte Plaza</h1>
                <h3>Suíte com cama tamanho king, varanda para a praia e banheira tamanho grande no banheiro.</h3>
                <div className={Style.content}>
                    <p>R$ 300</p>
                    <a href="#">Reservas</a>
                </div>
            </div>
        </div>
    )

}