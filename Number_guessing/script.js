let random=parseInt((Math.random()*100+1));
let attempt=10;
console.log(random);
let GuessFeild=document.querySelector('#userinput');
let submit=document.querySelector('#submit');
let reset=document.querySelector('.reset');
let outputField=document.querySelector('#output');
 let userGuess;
    submit.addEventListener("click", function(e){
        attempt--;
      e.preventDefault();
      userGuess=GuessFeild.value;
      if(attempt<=0){
        GuessFeild.placeholder=`You are out of moves. Press Reset`;
      }
      else if(userGuess<random && attempt>0){
        outputField.innerHTML=`your guess ${userGuess} is too low`;
        GuessFeild.value="";
        GuessFeild.placeholder=`Attempt left:${attempt}`;
      }
      else if(userGuess>random && attempt>0){
        outputField.innerHTML=`your guess ${userGuess} is too high`;
        GuessFeild.value="";
        GuessFeild.placeholder=`Attempt left:${attempt}`;
      }
      else {
        if(userGuess==random){
        outputField.innerHTML=`you guessed it right. YOU WON !`;
        }
        else {
           outputField.innerHTML=`Number was ${random}.YOU LOST !`; 
        }
        GuessFeild.placeholder=`Tap reset to Play Again!`;
      }

    });
    reset.addEventListener("click", function(e){
        e.preventDefault();
        random=parseInt((Math.random()*100+1));
        GuessFeild.value="";
        GuessFeild.placeholder=`Guess Here`;
        outputField.innerHTML=``;
        attempt=10;

    })

