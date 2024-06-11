const text= document.getElementById("israr")
const word="Welcome to Israr store"

let num=1;

Welcome()


function Welcome(){
    text.innerHTML=word.slice(0,num)

    num++

    if(num>word.length)
    {
        num=1
    }

    setTimeout(Welcome,150)
}