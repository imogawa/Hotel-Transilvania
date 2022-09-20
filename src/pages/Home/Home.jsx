import React from "react";
import style from './Home.module.css';
import logo from '../../assets/zebra.png'

export default function Home() {
    return (
        <div>
            <h1>Hotel <img src={logo} alt="Logo"/>Transilvânia</h1>
            <h2 className={style.title}>Colecione bons momentos com a gente</h2>
            <p className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <div>
            </div>
        </div> 
    );
  }