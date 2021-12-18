 function enterName(){
     let name = prompt("Please Enter Your Name");
     sessionStorage.setItem("name", name)
 }
 function login(){
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    if(mail=="sam@indexnine.com" && pass=="sam123"){
        window.location.href = "game.html";
        sessionStorage.setItem("email", "sam@indexnine.com");
        sessionStorage.setItem("pass", "sam123");
    }
    else {
        alert("Please Enter valid Username or Password...");
    }
   
 }