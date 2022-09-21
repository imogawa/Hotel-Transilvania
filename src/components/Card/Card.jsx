import React, { useEffect, useState } from 'react';
import Style from './Cards.module.css'
import Quarto from '../../assets/quarto.jpg'
import QuartoCasal from "../../assets/casal.jpg"
import Suite from "../../assets/suite.png"
import QuartoFamilia from "../../assets/quartofamilia.jpg"
import QuartoFamiliaPremium from "../../assets/quarto-familia-premium.jpg"
import QuartoPink from "../../assets/pink.jpg"
// import QuartoPraiano from "../../assets/praiano.jpg"
import QuartoGeek from "../../assets/geek.jpg"

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
                        <h1>Quarto Plaza</h1>
                        <div className={Style.content}>
                            <p>R$ 300,00 Diária</p>
                            <a href="#">Reservas</a>
                        </div>
                    </div>

                    <div className={Style.card}>
                        <div className={Style.img}>
                            <img src={QuartoCasal}/>
                        </div>
                        <h1>Quarto Casal</h1>
                        <div className={Style.content}>
                            <p>R$ 350,00 Diária</p>
                            <a href="#">Reservas</a>
                        </div>
                    </div>

                    <div className={Style.card}>
                        <div className={Style.img}>
                            <img src={QuartoFamilia}/>
                        </div>
                        <h1>Quarto Familia</h1>
                        <div className={Style.content}>
                            <p>R$ 400,00 Diária</p>
                            <a href="#">Reservas</a>
                        </div>
                    </div>

                    <div className={Style.card}>
                        <div className={Style.img}>
                            <img src={QuartoFamiliaPremium}/>
                        </div>
                        <h1>Quarto Premium</h1>
                        <div className={Style.content}>
                            <p>R$ 500,00 Diária</p>
                            <a href="#">Reservas</a>
                        </div>
                    </div>

                    <div className={Style.card}>
                        <div className={Style.img}>
                            <img src={Suite}/>
                        </div>
                        <h1>texto</h1>
                        <div className={Style.content}>
                            <p>R$ 300,00 Diária</p>
                            <a href="#">Reservas</a>
                        </div>
                    </div>

                    <div className={Style.card}>
                        <div className={Style.img}>
                            <img src={QuartoCasal}/>
                        </div>
                        <h1>Quarto Casal</h1>
                        <div className={Style.content}>
                            <p>R$ 350,00 Diária</p>
                            <a href="#">Reservas</a>
                        </div>
                    </div>

                    <div className={Style.card}>
                        <div className={Style.img}>
                            <img src={QuartoFamilia}/>
                        </div>
                        <h1>Quarto Familia</h1>
                        <div className={Style.content}>
                            <p>R$ 400,00 Diária</p>
                            <a href="#">Reservas</a>
                        </div>
                    </div>

                    <div className={Style.card}>
                        <div className={Style.img}>
                            <img src={QuartoFamiliaPremium}/>
                        </div>
                        <h1>Quarto Premium</h1>
                        <div className={Style.content}>
                            <p>R$ 500,00 Diária</p>
                            <a href="#">Reservas</a>
                        </div>
                    </div>
                </div>
       
        
    
    )

}