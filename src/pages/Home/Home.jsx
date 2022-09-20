import React, { useEffect } from "react";
import style from './Home.module.css';
import logo from '../../assets/zebra.png'
import video from '../../assets/hotel-transilvania.mp4'

export default function Home() {
    useEffect(() => {
        window.addEventListener("load", function ()
            {
                let video = window.document.querySelector("#video");
                video.play();
                video.loop = true;
            });
    }, [])
    
    return (
        <div className={style.category}>
            <h1 className={style.title}>Hotel <img className={style.logo} src={logo} alt="Logo"/>Transilvânia</h1>
            <h2 className={style.subtitle}>Experimente a magia deste lugar maravilhoso</h2>
            <p className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <div className={style.video}>
                <video autoplay="autoplay" loop="loop" controls src={video} type="video/mp4 controls" height="315" width="560" ></video>
            </div>
        </div> 
    );
  }