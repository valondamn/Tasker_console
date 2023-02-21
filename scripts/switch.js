function fun1() {
let chbox = document.getElementById('switch_buttons');   
let login = document.getElementById("login_slide")  
let reg = document.getElementById("registration_slide") 
let con = document.getElementById("container")
if (chbox.checked) {
 login.style.display="none"  
 reg.style.display="flex"
 con.style.height= "700px"

}    
else{
    login.style.display="flex" 
    reg.style.display="none"  
    con.style.height= "530px"
  
    

}

}


