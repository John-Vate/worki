// Header

let logobtn= document.querySelector("#logobtn")
let nav= document.querySelector(".l-nav")
let perfilicon = document.querySelector("#perfilicon")
let btswitch = document.querySelector(".btswitch")

// =================== Main ==================

// cards

// buttons


// ===================== Footer ===================

let btnservicos = document.querySelector(".btnservicos")
let btnhome = document.querySelector(".btnhome")
let btnprodutos = document.querySelector(".btnprodutos")

let body = document.querySelector(".body")
let preload = document.querySelector(".preload")
let container = document.querySelector(".container")

body.addEventListener("load", ()=>{
    container.style.display= "flex"
    preload.style.display= "none"
})



perfilicon.addEventListener("click", ()=>{
    nav.classList.toggle("activenav")
})


btswitch.addEventListener("click", ()=>{
    btswitch.classList.toggle("activeswitch")
    document.querySelector("body").classList.toggle("temalight")
})



