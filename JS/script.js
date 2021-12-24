let btntroca= document.querySelector("#btntroca")
let cardsig= document.querySelector("#cardsig")

btntroca.addEventListener("click", ()=>{
    cardsig.classList.toggle("removecardsig")
})

let logobtn= document.querySelector("#logobtn")
let nav= document.querySelector("#l-nav")

logobtn.addEventListener("click", ()=>{
    nav.classList.toggle("activenav")
})

let lheader= document.querySelector("#l-header")
