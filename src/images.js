import React from 'react';
import img1 from './images/Flag_of_Uganda.svg.png.jpg';
import "./images.css";

function Imagess(){
    return(
        <div>
            <h1>UGANDA</h1>
            <img class='cntryflag' src={img1} alt='image'/>
        </div>
    )
}

export default Imagess;