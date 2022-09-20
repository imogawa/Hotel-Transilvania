import React from "react";
import  style  from "./Time.module.css";
import linkedin from "./../../assets/linkedin.png";
import github from "./../../assets/github.png";
import lu from "./../../assets/1.jpg";
import gabi from "./../../assets/2.jpg";
import cami from "./../../assets/3.jpg";
import lha from "./../../assets/4.jpg";
import ca from "./../../assets/5.jpg";
import ivy from "./../../assets/6.jpg"

export default function Time(){
    return(

        <div className={style.time}>
            <div className={style.titulo}> 
                <h1>Nosso <br/>Time</h1>
            </div>

            <div className={style.container}>
                <div className={style.perfilRede}>
                    <img src={cami} alt="logo" />
                    <span>Camila Menacho</span>
                    <div className={style.faSocial}>
                        <a href="https://www.linkedin.com/in/camilamenacho/"><img src={linkedin} alt=""></img></a>
                        <a href="https://github.com/camilamenacho"><img src={github} alt=""></img></a>
                    </div>
                    
                </div>

                <div className={style.perfilRede}>
                    <img src={ca} alt="logo" />
                    <span>Carolina Araújo</span>
                    <div className={style.faSocial}>
                        <a href="https://www.linkedin.com/in/carolinearaujodefranca/"><img src={linkedin} alt=""></img></a>
                        <a href="https://github.com/carolfranca0310"><img src={github} alt=""></img></a>
                    </div>
                </div>

                <div className={style.perfilRede}>
                    <img src={gabi} alt="logo" />
                    <span>Gabriela Segger</span>
                    <div className={style.faSocial}>
                        <a href="https://www.linkedin.com/in/gabriela-segger/"><img src={linkedin} alt=""></img></a>
                        <a href="https://github.com/gabisegger"><img src={github} alt=""></img></a>
                    </div>
                </div>
            </div>
            
            <div className={style.container}>

                <div className={style.perfilRede}>
                    <img src={ivy} alt="logo" />
                    <span>Iviny Ogawa</span>
                    <div className={style.faSocial}>
                        <a href="https://www.linkedin.com/in/iviny-ogawa/"><img src={linkedin} alt=""></img></a>
                        <a href="https://github.com/imogawa"><img src={github} alt=""></img></a>
                    </div>
                </div>

                <div className={style.perfilRede}>
                    <img src={lha} alt="logo" />
                    <span>Lhaís Costa</span>
                    <div className={style.faSocial}>
                        <a href="https://www.linkedin.com/in/lhaiscosta-dev/"><img src={linkedin} alt=""></img></a>
                        <a href="github.com/LhaisCosta99"><img src={github} alt=""></img></a>
                    </div>
                </div>

                <div className={style.perfilRede}>
                    <img src={lu} alt="logo" />
                    <span>Luana Assis</span>
                    <div className={style.faSocial}>
                        <a href="https://www.linkedin.com/in/luanaassisi/"><img src={linkedin} alt=""></img></a>
                        <a href="https://www.linkedin.com/in/luanaassisi/"><img src={github} alt=""></img></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

