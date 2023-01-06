import React from 'react';
import "./button.css";


const Button=()=>{
    return (
        <div class='btn'>
        <button className='button'><span>Region:</span>  East Africa</button>
        <button className='button'><span>Capital:</span>  Kampala</button>
        <button className='button'><span>Population:</span>  45,741,007 (31th Rank)</button>
        <button className='button'><span>Size:</span>   241,550 km² (81th Largest)</button>
        <button className='button'><span>Language:</span>  Swahili, English</button>
        <button className='button'><span>Density:</span>  183 per Km2</button>
        <button className='button'><span>Currency:</span>  Ugandan shilling</button>
        <button className='button'><span>National flower:</span>   Uganda Flame Tree</button>
        <button className='button'><span>National dish:</span>  Matoke</button>
        <button class='next'>  Next Random Country</button>
        </div>

        
    )

}

export default Button;