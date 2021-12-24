let btntroca= document.querySelector("#btntroca")
let cardsig= document.querySelector("#cardsig")
let btnentrar= document.querySelector("#btnentrar")
let before= document.querySelector("#before")
let cardlog= document.querySelector("#cardlog")
let btntrocavolta= document.querySelector("#btntrocavolta")

btntroca.addEventListener("click", ()=>{
    cardsig.style.left="1000px"
    cardlog.style.left= "0px"
})

btntrocavolta.addEventListener("click", ()=>{
    cardsig.style.left="0px"
    cardlog.style.left= "-1000px"
})

let logobtn= document.querySelector("#logobtn")
let nav= document.querySelector("#l-nav")

logobtn.addEventListener("click", ()=>{
    nav.classList.toggle("activenav")
})

let lheader= document.querySelector("#l-header")
