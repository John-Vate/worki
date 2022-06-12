// Header

let logobtn= document.querySelector("#logobtn")
let nav= document.querySelector(".l-nav")
let perfilheader = document.querySelector(".perfilheader")
let btswitch = document.querySelector(".btswitch")

// =================== Main ==================

// cards

// buttons


// ===================== Footer ===================

let btnservicos = document.querySelector(".btnservicos")
let btnhome = document.querySelector(".btnhome")
let btnprodutos = document.querySelector(".btnprodutos")




perfilheader.addEventListener('click', ()=>{
    nav.classList.toggle("activenav")
})

btswitch.addEventListener("click", ()=>{
    btswitch.classList.toggle("activeswitch")
    document.querySelector("body").classList.toggle("temalight")
})



