
let Paper = "Paper";
let Rock = "Rock";
let Scissors = "Scissors";


/* Human Choice */
  function getHumanChoice() {
   let choice = window.prompt("Rock, Paper or Scissors?");

   if (choice === null) {
      return console.log("Aw, I wanted to play with you...");
   
   } else if (choice.toLowerCase() === "scissors") {
    return Scissors, console.log("You chose Scissors.");
   
   } else if (choice.toLowerCase() === "rock") {
      return Rock, console.log("You chose Rock.");
      
   } else if (choice.toLowerCase() === "paper") {
      return Paper, console.log("You chose Paper.");}
   }

   /* Computers choice */
 function getComputerChoice() {
    
   const choice = Math.random();
  if (getHumanChoice()=== null) {
     return;
  
  } else if (choice <= 0.33) {
       return Rock, console.log("The computer chose Rock.");

   } else if (choice >= 0.66) {
       return Scissors, console.log("The computer chose Scissors.");

   } else {return Paper, console.log("The computer chose Paper.");}
  }

 let humanScore = 0
 let computerScore = 0

/* Activates the game */
function playRound (choice1, choice2) {

   let showScore = ` Human score:${humanScore} Computer score:${computerScore}`;
   let anything = "Paper" || "Rock" || "Scissor";
   

   if (choice1 === "Paper" && choice2 === "Rock") {
      ++humanScore, console.log(`You win this round!` + showScore);

   } else if (choice1 === "Rock" && choice2 === "Scissors") {
      ++humanScore, console.log(`You win this round!` + showScore);
   
   } else if (choice1 === "Scissors" && choice2 === "Paper") {
      ++humanScore, console.log(`You win this round!` + showScore);

   } else if (choice1 != anything) { 
      console.log(`Too bad.`);
   
   } else if (choice1 === choice2) {
      console.log(`It's a tie.` + showScore);
      
   } else { ++computerScore, console.log(`Computer wins this round.` + showScore);}
}

playRound(getHumanChoice(), getComputerChoice())

/* if getHumanChoice equals Paper and getComputerChoice equals Rock, increase humanScore by one and print "You won this round!"
   if getHumanChoice equals Rock and getComputerChoice equals Scissors, increase humanScore by one and print "You won this round!"
   if getHumanChoice equals Scissors and getComputerChoice equals Paper, increase humanScore by one and print "You won this round!"
   
   if getHumanChoice equals getComputerChoice, return "It's a tie"
   
   otherwise, increase getComputerChoice by one and print "The computer won this round!*/



   /*  #Create a function that checks "who wins" with conditionals, prints the score and an appropriate message. */

    
  