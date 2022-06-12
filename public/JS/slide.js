let arrowCR= document.querySelector("#arrow-carrossel-right")
let arrowCL= document.querySelector("#arrow-carrossel-left")
let carrosselCard1= document.querySelector("#carrossel-card1")
let carrosselCard2= document.querySelector("#carrossel-card2")
let carrosselCard3= document.querySelector("#carrossel-card3")
var nucarrousel= 1

function descarrousel(){
  carrosselCard1.classList.remove("is-active")
  carrosselCard2.classList.remove("is-active")
  carrosselCard3.classList.remove("is-active")
}
function acarrousel(){
    if(nucarrousel==1){
        carrosselCard1.classList.toggle("is-active")
    }
    else if(nucarrousel==2){
        carrosselCard2.classList.toggle("is-active")
    }
    else{
        carrosselCard3.classList.toggle("is-active")
    }
}

arrowCR.addEventListener("click", ()=>{
  if(nucarrousel>0 && nucarrousel <3){nucarrousel ++}
  else if(nucarrousel==3){nucarrousel=1}
  descarrousel()
  acarrousel()
})
arrowCL.addEventListener("click", ()=>{
  if(nucarrousel>1 && nucarrousel <4){nucarrousel --}
  else if(nucarrousel==1){nucarrousel=3}
  descarrousel()
  acarrousel()

})

  