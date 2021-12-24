
			let name= document.querySelector("#email")
			let password= document.querySelector("#password")
			let passwordrepeat = document.querySelector("#passwordrepeat")
			var re = /\S+@\S+\.\S+/;

			name.addEventListener("keyup", ()=>{
			if(re.test(name.value)){
			    name.style.borderBottom ="1px solid green"
			} else{
			    name.style.borderBottom ="1px solid red"
				}
			})


			let A = /[A-Z]/;
			let a = /[a-z]/;
			let number = /[0-9]/;
			let charx= /[!|@|#|$|%|^|&|*|(|)|-|_]/;

			password.addEventListener("keyup", ()=>{
			if(A.test(password.value) &&
			a.test(password.value) &&
			number.test(password.value) &&
			charx.test(password.value) &&
			password.value.length >= "8"){
			password.style.borderBottom= "1px solid green"
            btnentrar.style.opacity= "1";
        } else {
                password.style.borderBottom= "1px solid red"
			}
			});
			let button = document.querySelector("#button")
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

			let user = document.querySelector("#user");
			let labeluser = document.querySelector("#labeluser");

			user.addEventListener("keyup", ()=>{
			if(user.value.length >= "3"){
			labeluser.style.color = "green"
			}else{
			labeluser.style.color = "red"
			}
			});
