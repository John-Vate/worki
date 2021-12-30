


name.addEventListener("keyup", ()=>{
if(re.test(name.value)){
name.style.borderBottom ="1px solid green"
} else{
name.style.borderBottom ="1px solid red"
}
})



password.addEventListener("keyup", ()=>{
if(A.test(password.value) &&
a.test(password.value) &&
number.test(password.value) &&
charx.test(password.value) &&
password.value.length >= "8" &&
name.style.borderBottom =="1px solid green"){
password.style.borderBottom= "1px solid green"
btnentrar.style.opacity= "1";
} else {
password.style.borderBottom= "1px solid red"
}
});

passwordrepeat.addEventListener("keyup", ()=>{
if(passwordrepeat.value == password.value &&
labelname.style.color =="green" &&
labeluser.style.color == "green"){
labelpasswordrepeat.style.color = "green"
button.style.display = "block"
}else {
labelpasswordrepeat.style.color = "red"

}
});



user.addEventListener("keyup", ()=>{
if(user.value.length >= "3"){
labeluser.style.color = "green"
}else{
labeluser.style.color = "red"
}
});
