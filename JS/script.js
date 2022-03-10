
logobtn.addEventListener("click", ()=>{
    nav.classList.toggle("activenav")
})

function activenow(now){
    x = now
    x.style.display = "flex"
}

var perfilname = "John"

window.onload = perfil()
function perfil(){
    let perfilIcon= document.querySelector("#perfil")
    let perfil= document.createElement("div")
    perfil.innerText = perfilname
    
    perfilIcon.appendChild(perfil)
    perfil.classList.add("perfiltag")
    if(rhome.checked){
        home.style.display= "flex"
    } else(
        home.style.display= "none"
    )
    if(rservicos.checked){
        alert("funfou")
    } 
}
