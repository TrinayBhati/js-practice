
function getComputerChoice() {
  let num = Math.floor(Math.random()*3);
  let array = ["rock", "paper", "scissors"];
  return array[num];
}

function getResult(playerChoice, computerChoice) {
  
  if(playerChoice == computerChoice){
    return 0;
  }
  else if((playerChoice == "rock" && computerChoice =="scissors") || (playerChoice == "paper" && computerChoice =="rock") || (playerChoice == "scissors" && computerChoice =="paper") ){
    return 1;
  }
  else{
    return -1;
  }

}
function showResult(score, playerChoice, computerChoice) {
 let playerScore = document.getElementById("player-score");
 let hands = document.getElementById("hands");
 let result = document.getElementById("result");
 playerScore.innerText = score;
 hands.innerText = playerChoice + " VS " + computerChoice;
 if(score ==1){
  result.innerText = "you win";
 }
 else if(score == -1){
  result.innerText = "you loose";
 }
 else{
  result.innerText = "it's a draw";
 }
}

let buttons = document.querySelectorAll(".rpsButton");
buttons.forEach((button) => {
  button.addEventListener("click",(e) => {
    let userInput = e.target.value;
let userScore = getResult(userInput, getComputerChoice());    showResult(userScore,userInput,getComputerChoice() );
  });

});

let end = document.getElementById("endGameButton");
end.addEventListener("click",() => {
  let playerScore = document.getElementById("player-score");
 let hands = document.getElementById("hands");
 let result = document.getElementById("result");
 playerScore.innerText = "";
hands.innerText = "";
result.innerText = "";
});


function onClickRPS(playerChoice) {
  
}

function playGame() {


}


playGame()

function endGame() {
  
}
