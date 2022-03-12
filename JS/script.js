
perfilicon.addEventListener("click", ()=>{
    nav.classList.toggle("activenav")
})
var now = home

logobtn.addEventListener("click", ()=>{
    home.style.display = "flex"
    servicos.style.display = "none"
    produtos.style.display ="none"
    padulto.style.display ="none"
    pinfantil.style.display ="none"
    sadulto.style.display ="none"
    sinfantil.style.display ="none"
})
btservicos.addEventListener("click", ()=>{
    home.style.display = "none"
    servicos.style.display = "flex"
    produtos.style.display ="none"
    padulto.style.display ="none"
    pinfantil.style.display ="none"
    sadulto.style.display ="none"
    sinfantil.style.display ="none"
})
btprodutos.addEventListener("click", ()=>{
    home.style.display = "none"
    servicos.style.display = "none"
    produtos.style.display ="flex"
    padulto.style.display ="none"
    pinfantil.style.display ="none"
    sadulto.style.display ="none"
    sinfantil.style.display ="none"
})
btsadulto.addEventListener("click", ()=>{
    home.style.display = "none"
    servicos.style.display = "none"
    produtos.style.display ="none"
    padulto.style.display ="none"
    pinfantil.style.display ="none"
    sadulto.style.display ="flex"
    sinfantil.style.display ="none"
})
btsinfantil.addEventListener("click", ()=>{
    home.style.display = "none"
    servicos.style.display = "none"
    produtos.style.display ="none"
    padulto.style.display ="none"
    pinfantil.style.display ="none"
    sadulto.style.display ="none"
    sinfantil.style.display ="flex"
})
btpadulto.addEventListener("click", ()=>{
    home.style.display = "none"
    servicos.style.display = "none"
    produtos.style.display ="none"
    padulto.style.display ="flex"
    pinfantil.style.display ="none"
    sadulto.style.display ="none"
    sinfantil.style.display ="none"
})
btpinfantil.addEventListener("click", ()=>{
    home.style.display = "none"
    servicos.style.display = "none"
    produtos.style.display ="none"
    padulto.style.display ="none"
    pinfantil.style.display ="flex"
    sadulto.style.display ="none"
    sinfantil.style.display ="none"
})

btswitch.addEventListener("click", ()=>{
    btswitch.classList.toggle("activeswitch")
    document.querySelector("body").classList.toggle("temalight")
})







var perfilname = "John"
