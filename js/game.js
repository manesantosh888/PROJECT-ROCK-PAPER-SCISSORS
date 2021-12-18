function verify(){
        
        let name = document.getElementById('name');
        let name1 = document.getElementById('name1');
        let mail = sessionStorage.getItem("email");
        let pass = sessionStorage.getItem("pass");
        let nm = sessionStorage.getItem("name");
        if(mail=="sam@indexnine.com" && pass=="sam123"){
            alert("welcome "+nm);
            name.innerHTML=nm;
            name1.innerHTML=nm;
        }
        else {
        alert("Please Login First...");
        window.location.href = "https://santoshmane101.github.io/PROJECT-ROCK-PAPER-SCISSORS/index.html";
        }
    }
 

  let click = 0;
  const round= document.getElementById('round');
  const userWonE1 = document.getElementById('totalWon');
  const TiesE1 =document.getElementById('totalTies');
  const OponentWinsE1 = document.getElementById('totalOponentWins');
  const won =  document.getElementById('Won');
  const you = document.getElementById('you');
  const Opponent = document.getElementById('Opponent');
  let totalTIes =0;
  let totalOponentWin=0;
  let totalUserWon = 0;
  function onClickRock(){
      click++;
        const img_1 = document.getElementById('spam-1');
        const img_2 = document.getElementById('spam-2');  
        
        let randomImg = new Array();
        randomImg[0]="images/rock.png";
        randomImg[1]="images/paper.png";
        randomImg[2]="images/scissors.png"; 
        let number = Math.floor(Math.random()*randomImg.length);
        img_2.innerHTML = '<img src="'+randomImg[number]+'" height="250" width="300" />';
        img_1.innerHTML= '<img src="images/rock.png" height="250" width="300" />';
        round.innerHTML = click;
        you.innerHTML = "Rock";
        
        if(number==0){
            won.innerHTML = "Tied!";
            Opponent.innerHTML = "Rock";
            totalTIes++;
            TiesE1.innerHTML=totalTIes;
        }
           
        else if(number==1){
            won.innerHTML = '<spam style="color: darkred;">you Lost.!<spam>';
            Opponent.innerHTML = "Paper";
            totalOponentWin++;
            OponentWinsE1.innerHTML = totalOponentWin;
        }
        
        else{
            won.innerHTML = '<spam style="background-color: green; color:white">congratulations you won!<spam>';
            Opponent.innerHTML = "Scissors";
            totalUserWon++;
            userWonE1.innerHTML=totalUserWon;
        }
           
    };
    function onClickPaper(){
        click++;
        const img_1 = document.getElementById('spam-1');
        const img_2 = document.getElementById('spam-2');
        
        let randomImg = new Array();
        randomImg[0]="images/rock.png";
        randomImg[1]="images/paper.png";
        randomImg[2]="images/scissors.png"; 
        let number = Math.floor(Math.random()*randomImg.length);
        round.innerHTML = click;
        img_2.innerHTML = '<img src="'+randomImg[number]+'" height="250" width="300" />';
        img_1.innerHTML= '<img src="images/paper.png" height="250" width="300" />';  
        round.innerHTML = click;
        you.innerHTML = "Paper";
        
        if(number==0){
            won.innerHTML = '<spam style="background-color: green; color:white">congratulations you won!<spam>';
            Opponent.innerHTML = "Rock";
            totalUserWon++;
            userWonE1.innerHTML=totalUserWon;
        }
           
        else if(number==1){
            won.innerHTML = "Tied!";
            Opponent.innerHTML = "Paper";
            totalTIes++;
            TiesE1.innerHTML=totalTIes;
        }
        
        else{
            won.innerHTML = '<spam style="color: darkred;">you Lost.!<spam>';
            Opponent.innerHTML = "Scissors";
            totalOponentWin++;
            OponentWinsE1.innerHTML = totalOponentWin;
        }      
    };
    function onClickScissors(){
        click++;
        const img_1 = document.getElementById('spam-1');
        const img_2 = document.getElementById('spam-2');
        let randomImg = new Array();
        randomImg[0]="images/rock.png";
        randomImg[1]="images/paper.png";
        randomImg[2]="images/scissors.png"; 
        let number = Math.floor(Math.random()*randomImg.length);
        round.innerHTML = click;
        img_2.innerHTML = '<img src="'+randomImg[number]+'" height="250" width="300" />';
        img_1.innerHTML= '<img src="images/scissors.png" height="250" width="300" />';  
        round.innerHTML = click;
        you.innerHTML = "Scissors";
        
        if(number==0){
            won.innerHTML = '<spam style="color: darkred;">you Lost.!<spam>';
            Opponent.innerHTML = "Rock";
            totalOponentWin++;
            OponentWinsE1.innerHTML = totalOponentWin;
        }
           
        else if(number==1){
            won.innerHTML = '<spam style="background-color: green; color:white">congratulations you won!<spam>';      
            Opponent.innerHTML = "Paper";
            totalUserWon++;
            userWonE1.innerHTML=totalUserWon;           
        }        
        else{
            won.innerHTML = "Tied!";
            Opponent.innerHTML = "Scissors";
            totalTIes++;
            TiesE1.innerHTML=totalTIes;
            
        }      
    };
 
