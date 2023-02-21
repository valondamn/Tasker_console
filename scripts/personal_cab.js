



function fun1() {   
    let button = document.getElementById("sup_button_show_more") 
    let grid = document.getElementById("grid")  
    let pad = document.getElementById("up_rev") 
    let reviews1 = document.getElementById("reviews1") 
    
    
    
    if(button.click) {   
        if(grid.style.display !="grid"){
    
            grid.style.display = "grid";  
            pad.style.marginTop = "35%";
            button.innerHTML = "Скрыть" 
            }
        else if(grid.style.display =="grid"){
            grid.style.display = "none";  
            pad.style.marginTop = "0%" 
            
            button.innerHTML = "Показать еще"
        }
    
    }
   
}


function fun2(){ 
    let reviews1 = document.getElementById("reviews1")  
    let reviews2 = document.getElementById("reviews2")
    let button2 = document.getElementById("sup_button_show_more2")  

    if (button2.click){  
        if(reviews1.style.display != "block"){

            reviews1.style.display = "block" ;
            reviews2.style.display = "block" ;
            button2.innerHTML = "Скрыть"
    } 
    else if(reviews1.style.display == "block"){
        reviews1.style.display = "none" 
        reviews2.style.display = "none" 
        button2.innerHTML = "Показать еще"

    }

    }
}



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




  

  
  function fun_mobile() {   
    let button4 = document.getElementById("sup_button_show_more_mobile") 
    let grid = document.getElementById("grid")  
    let pad = document.getElementById("up_rev") 
    let reviews1 = document.getElementById("reviews1")  
    let port = document.getElementById("sup_portfolio")
    
    
    
    if(button4.click) {   
        if(grid.style.display !="grid"){
    
            grid.style.display = "grid";  
        
            button4.innerHTML = "Скрыть" 
            }
        else if(grid.style.display =="grid"){
            grid.style.display = "none";  
     
            
            button4.innerHTML = "Показать еще"
        }
    
    }
   
}
