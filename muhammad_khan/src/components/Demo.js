import { ReactDOM } from "react";
import React, {useState} from 'react';


const Hero=()=>
{
    const[change,setChange]=useState(true);

    return(
        <div>

            <input type="Text" placeholder="Text"/>

            <button onClick={()=>setChange(!change)}>
                CLick Here
            </button>

        {change? <h1>Israr World is here</h1>:
        <h2>Israr khan is here</h2>
        }

        </div>
    )
}

export default Hero