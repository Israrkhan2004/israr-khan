const textEL=document.getElementById("text")
const myName="Emirates Airlines"

let num=1

writeText()

function writeText()
{
    textEL.innerHTML=myName.slice(0,num)

    num++

    if(num>myName.length)
    {
        num=1
    }

    setTimeout(writeText,150 )
}


/*const text1EL=document.getElementById("text1")
const myName1="Fly better with Emirates Airlines"

let num1=1

writeText1

function writeText1()
{

    text1EL.innerHTML=myName1.slice(0,num1)
    num1++


    if(num1>myName1.length)
    {
        num1=1
    }

    setTimeout(writeText1,150)
}*/

