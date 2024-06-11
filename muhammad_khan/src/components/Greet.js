import React from 'react'

export const forsage=()=>
{
    return (
        <div>
            <input type='text' placeholder='text to me ...'/>
            <br/>
            <br/>
        </div>
    )
}

export const butter=()=>
{
    return (
    <button type='Submit' > Submit</button>)
}

const Greet=()=>
{
    return(
    <div>
        <forsage/>
        <butter/>


    </div>
    );
   

}
export default Greet





//export default Greet