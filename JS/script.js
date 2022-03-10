
logobtn.addEventListener("click", ()=>{
    nav.classList.toggle("activenav")
})

var perfilname = "John"

window.onload = perfil()

function perfil(){
    let perfilIcon= document.querySelector("#perfil")
    let perfil= document.createElement("div")
    perfil.innerText = perfilname
    
    perfilIcon.appendChild(perfil)
    perfil.classList.add("perfiltag")
}
