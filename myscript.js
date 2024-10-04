
let Paper = "Paper";
let Rock = "Rock";
let Scissors = "Scissors";


/* Human Choice */
  function getHumanChoice() {
   let choice = window.prompt("Rock, Paper or Scissors?");

   if (choice.toLowerCase() === "scissors") {
    return "Scissors"/*, console.log("You chose Scissors.") */;
   
   } else if (choice.toLowerCase() === "rock") {
      return "Rock"/*, console.log("You chose Rock.") */;
      
   } else if (choice.toLowerCase() === "paper") {
      return "Paper"/* console.log("You chose Paper.") */;}
   }

   /* Computers choice */
 function getComputerChoice() {
    
   const choice = Math.random();
   if (choice <= 0.33) {
       return "Rock"/*  console.log("The computer chose Rock.") */;

   } else if (choice >= 0.66) {
       return "Scissors"/* , console.log("The computer chose Scissors.") */;

   } else {return "Paper"/* , console.log("The computer chose Paper.") */;}
  }

 let humanScore = 0
 let computerScore = 0

/* Activates one round */
function playRound (choice1, choice2) {

   let showScore = ` Human score:${humanScore} Computer score:${computerScore}`;
   let anything = "Paper" || "Rock" || "Scissor";
   
   /* Human wins */
   if (choice1 === "Paper" && choice2 === "Rock") {
      console.log(`Nice! You win this round! The computer chose Rock.`), console.log(`Human score:${++humanScore} Computer score:${computerScore}`);

   } else if (choice1 === "Rock" && choice2 === "Scissors") {
      console.log(`Nice! You win this round! The computer chose Scissors.`), console.log(`Human score:${++humanScore} Computer score:${computerScore}`);
   
   } else if (choice1 === "Scissors" && choice2 === "Paper") {
      console.log(`Nice! You win this round! The computer chose Paper.`), console.log(`Human score:${++humanScore} Computer score:${computerScore}`);

   
   /* Computer Wins */

   } else if (choice1 === "Rock" && choice2 === "Paper") {
       console.log(`Ouf! The computer chose Paper and wins this round.`), console.log(`Human score:${humanScore} Computer score:${++computerScore}`);

   } else if (choice1 === "Scissors" && choice2 === "Rock") {
      console.log(`Ouf! The computer chose Rock and wins this round.`), console.log(`Human score:${humanScore} Computer score:${++computerScore}`);

   } else if (choice1 === "Paper" && choice2 === "Scissors") {
      console.log(`Ouf! The computer chose Scissors and wins this round.`), console.log(`Human score:${humanScore} Computer score:${++computerScore}`);

   /* Its a tie */
   
   } else if (choice1 === choice2) {
      console.log(`The computer also chose that. It's a tie.`), console.log(`Human score:${humanScore} Computer score:${computerScore}`);
   
   } else if (choice1 != anything) {
      console.log("Sorry, I think you spelled the word wrong. Try again!");}
      
}

/* playRound(getHumanChoice(), getComputerChoice()) */

/* #Create a function called playGame that calls playRound 5 times.*/

function playGame (round) { /* 1st round */

   playRound(getHumanChoice(), getComputerChoice()); /* 1st round */
   
   playRound(getHumanChoice(), getComputerChoice()); /* 2nd round */

   playRound(getHumanChoice(), getComputerChoice()); /* 3rd round */

   playRound(getHumanChoice(), getComputerChoice()); /* 4th round */

  /*  playRound(getHumanChoice(), getComputerChoice()); /* 5th round */
  

   if (humanScore > computerScore ) {
      console.log(`Congratulations, you win the game Human!`), console.log(`Human score:${humanScore} Computer score:${computerScore}`), restart();
   
   } else if (humanScore < computerScore) {
      console.log(`You sadly lost against the computer.`), console.log(`Human score:${humanScore} Computer score:${computerScore}`), restart();
   
   } else {console.log(`Seems like it's a tie, do you want to play again?`), restart()}

function restart() {
let restart = window.prompt(`Play again?, yes or no`);
      
   if (restart.toLowerCase === "yes") {playGame(playRound(getHumanChoice(), getComputerChoice()))
   
   } else {console.log(`Launching missiles...`)}
   }
}

playGame(playRound(getHumanChoice(), getComputerChoice()))




/* #Make the function keep track of the scores in between the rounds. */
/* #After 5 rounds are played, the function declares a winner. */


    
  