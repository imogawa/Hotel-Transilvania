import React from "react";
import style from './Footer.module.css'
import logoResilia from './../../assets/logoResilia.png'

export default function Footer(){
    return (
        <footer>
            <div>
                <img className='imgResilia' src={logoResilia} alt="Logo" />
            </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos doloribus perspiciatis quo explicabo architecto 
                    adipisci quisquam provident iste sed placeat voluptas quas, 
                    exercitationem reiciendis quia alias delectus suscipit. Nisi, fugiat?
                </p>

                {/* <p ><span>Squad6</span> &copy; 2021</p> */}
        </footer>
    ) 
}
