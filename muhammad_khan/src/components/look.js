import React from "react";
import react, {usestate} from  "react";

const functionalComponent=()=>
{
    const[count,setcount]=usestate(0);

    const increase  =()=>
    {
        setcount(count+1);
    }

    return (

        <div style={{margin:'50'}}>
            <h1>Geeks for geeks </h1>
            <h2>Israr khan is here :</h2>
            <h3>{count}</h3>
            <button onClick={increase}>Add</button>
        </div>



    )
}

export default functionalComponent;