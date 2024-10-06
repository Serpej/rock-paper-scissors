
let quit = null;


/* Human's Choice */
  function getHumanChoice() {
   let choice = window.prompt(`Feeling lucky punk?`, `Rock, Paper or Scissors`);

   /* All other choices */
   
   if (choice.toLowerCase() === "scissors") {
     return "Scissors";
   
   } else if (choice.toLowerCase() === "rock") {
      return "Rock";
      
   } else if (choice.toLowerCase() === "paper") {
      return "Paper";
   }
}

   /* Computer's choice */
 function getComputerChoice() {
    
   const choice = Math.random();
   if (choice <= 0.33) {
       return "Rock";

   } else if (choice >= 0.66) {
       return "Scissors";

   } else {return "Paper";}
  }

 let humanScore = 0
 let computerScore = 0

/* Activates one round */
function playRound (choice1, choice2) {

    
   /* Human wins round */
   if (choice1 === "Paper" && choice2 === "Rock") {
      console.log(`Nice! You win this round! The computer chose Rock.`), console.log(`Human score:${++humanScore} Computer score:${computerScore}`);

   } else if (choice1 === "Rock" && choice2 === "Scissors") {
      console.log(`Nice! You win this round! The computer chose Scissors.`), console.log(`Human score:${++humanScore} Computer score:${computerScore}`);
   
   } else if (choice1 === "Scissors" && choice2 === "Paper") {
      console.log(`Nice! You win this round! The computer chose Paper.`), console.log(`Human score:${++humanScore} Computer score:${computerScore}`);

   
   /* Computer wins one round*/

   } else if (choice1 === "Rock" && choice2 === "Paper") {
       console.log(`Ouf! The computer chose Paper and wins this round.`), console.log(`Human score:${humanScore} Computer score:${++computerScore}`);

   } else if (choice1 === "Scissors" && choice2 === "Rock") {
      console.log(`Ouf! The computer chose Rock and wins this round.`), console.log(`Human score:${humanScore} Computer score:${++computerScore}`);

   } else if (choice1 === "Paper" && choice2 === "Scissors") {
      console.log(`Ouf! The computer chose Scissors and wins this round.`), console.log(`Human score:${humanScore} Computer score:${++computerScore}`);

   /* Its a tie */
   
   } else if (choice1 === choice2) {
      console.log(`The computer also chose that. It's a tie.`), console.log(`Human score:${humanScore} Computer score:${computerScore}`);
   
   } else if (choice1 == null || choice1 == ''){
      return;

   } else if (choice1 == undefined) {
      console.log(`Sorry, I think you spelled the word wrong. Try again!`);
   }
}


function playGame (round) { /* 1st round */

   playRound(getHumanChoice(), getComputerChoice()); /* 2st round */
   
   playRound(getHumanChoice(), getComputerChoice()); /* 3nd round */

   playRound(getHumanChoice(), getComputerChoice()); /* 4rd round */

   playRound(getHumanChoice(), getComputerChoice()); /* 5th round */
  

   if (humanScore > computerScore ) {
      console.log(`Congratulations, you win the game Human!`), console.log(`Human score:${humanScore} Computer score:${computerScore}`), restart();
   
   } else if (humanScore < computerScore) {
      console.log(`You sadly lost against the computer.`), console.log(`Human score:${humanScore} Computer score:${computerScore}`), restart();
   
   } else {console.log(`Seems like it's a tie, do you want to play again?`), restart()}
}

function restart() {
let restart = window.prompt(`Play again?, yes or no`);
      
   if (restart === null || restart === '') {
      return quit;
   
   } else if (restart.toLowerCase() === "yes") {playGame(playRound(getHumanChoice(), getComputerChoice()));
   
   } else {console.log(`Suit yourself!`)}

}

playGame(playRound(getHumanChoice(), getComputerChoice()))



    
  