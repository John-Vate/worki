// Header

let logobtn= document.querySelector("#logobtn")
let nav= document.querySelector(".l-nav")
let perfilicon = document.querySelector("#perfilicon")
let btswitch = document.querySelector(".btswitch")

// =================== Main ==================

// cards

let home = document.querySelector("#home")
let servicos = document.querySelector("#serviços")
let produtos = document.querySelector("#produtos")
let padulto = document.querySelector("#padulto")
let pinfantil = document.querySelector("#pinfantil")
let sadulto = document.querySelector("#sadulto")
let sinfantil = document.querySelector("#sinfantil")

// buttons

let rhome = document.querySelector("#rhome")
let btservicos =  document.querySelector("#btservicos")
let btprodutos =  document.querySelector("#btprodutos")
let btpadulto =  document.querySelector("#btpadulto")
let btpinfantil = document.querySelector("#btpinfantil")
let btsadulto = document.querySelector("#btsadulto")
let btsinfantil = document.querySelector("#btsinfantil")

// ===================== Footer ===================

let btnservicos = document.querySelector(".btnservicos")
let btnhome = document.querySelector(".btnhome")
let btnprodutos = document.querySelector(".btnprodutos")

let body = document.querySelector(".body")
let preload = document.querySelector(".preload")
let container = document.querySelector(".container")
let shop = document.querySelector(".shops")

function loading(){
    container.style.display= "flex"
    preload.style.display= "none"
}



perfilicon.addEventListener("click", ()=>{
    nav.classList.toggle("activenav")
})

btservicos.addEventListener("click", ()=>{
    zero()
    servicos.style.display= "flex"
})

function zero(){
    home.style.display = "none"
    servicos.style.display = "none"
    produtos.style.display ="none"
    padulto.style.display ="none"
    pinfantil.style.display ="none"
    sadulto.style.display ="none"
    sinfantil.style.display ="none"
}
btnhome.addEventListener("click", ()=>{
    zero()
    home.style.display = "flex"
})
btnservicos.addEventListener("click", ()=>{
    zero()
    servicos.style.display = "flex"   
})
btnprodutos.addEventListener("click", ()=>{
    zero()
    produtos.style.display = "flex"
})
logobtn.addEventListener("click", ()=>{
    zero()
    home.style.display = "flex"
})
btprodutos.addEventListener("click", ()=>{
    zero()
    produtos.style.display ="flex"
})
btsadulto.addEventListener("click", ()=>{
    zero()
    sadulto.style.display ="flex"
})
btsinfantil.addEventListener("click", ()=>{
    zero()
    sinfantil.style.display ="flex"
})
btpadulto.addEventListener("click", ()=>{
    zero()
    padulto.style.display ="flex"
})
btpinfantil.addEventListener("click", ()=>{
    zero()
    pinfantil.style.display ="flex"
})

btswitch.addEventListener("click", ()=>{
    btswitch.classList.toggle("activeswitch")
    shop.classList.toggle("shopactive")
    document.querySelector("body").classList.toggle("temalight")
})



