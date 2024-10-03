
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

/* Activates the game */
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
      console.log(`The computer also chose that. It's a tie.`), console.log(`Human score:${humanScore} Computer score:${computerScore}`);}
      
}

playRound(getHumanChoice(), getComputerChoice())

/* if getHumanChoice equals Paper and getComputerChoice equals Rock, increase humanScore by one and print "You won this round!"
   if getHumanChoice equals Rock and getComputerChoice equals Scissors, increase humanScore by one and print "You won this round!"
   if getHumanChoice equals Scissors and getComputerChoice equals Paper, increase humanScore by one and print "You won this round!"
   
   if getHumanChoice equals getComputerChoice, return "It's a tie"
   
   otherwise, increase getComputerChoice by one and print "The computer won this round!*/



   /*  #Create a function that checks "who wins" with conditionals, prints the score and an appropriate message. */

    
  