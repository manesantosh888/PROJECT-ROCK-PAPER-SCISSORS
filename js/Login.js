 function enterName(){
     let name = prompt("Please Enter Your Name");
  // Review - Add null check here
     sessionStorage.setItem("name", name)
 }
 function login(){
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
   // Review - Use === instead of == 
   if(mail=="sam@indexnine.com" && pass=="sam123"){
        window.location.href = "game.html";
    // Review - Change the order of execution
        sessionStorage.setItem("email", "sam@indexnine.com");
        sessionStorage.setItem("pass", "sam123");
    }
    else {
        alert("Please Enter valid Username or Password...");
    }
   
 }
