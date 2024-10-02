console.log("Hello World!");

/* #Create a function called getComputerChoice;

#Use Math.random to randomly choose a number between 0 and 1;

#Create conditionals in the getComputerChoice function, which returns Rock Paper or Scissors depending on the randomly generated number.
 Each number responds to a third of the decimals between 0 and 1; */

 function getComputerChoice() {
    
    const choice = Math.random();
    
    if (choice <= 0.33) {
        return console.log("The computer chose Rock.");

    } else if (choice >= 0.66) {
        return console.log("The computer chose Scissors.");

    } else {
       return console.log("The computer chose Paper.");
    }
 }


  function getHumanChoice() {
   let choice = window.prompt("Rock, Paper or Scissors?");

   if (choice === null) {
      return console.log("Come on, let's play!");

   } else if (choice.toLowerCase() === "paper") {
    return "You chose Paper.";
   
   } else if (choice.toLowerCase() === "scissors") {
    return console.log("You chose Scissors.");
   
   } else if (choice.toLowerCase() === "rock") {
      return console.log("You chose Rock.");
   }
 }




 /* #Create a function that keeps score by increasing numbers and associates them with computer and player. */

 let humanScore = 0
 let computerScore = 0

/*  #Create a function with the human choice and the computer choice as arguments, plays a single round and increases the winners score by one */

function playRound (choice1, choice2) {
   
/*    if (choice === null){
      console.log("Come on, just one more round!"), getHumanChoice(); */

   if (choice1 === "Paper" && choice2 === "Rock") {
      ++humanScore, console.log(`You win this round! Human score:{$humanScore} Computer score:{$computerScore}`);

   } else if (choice1 === "Rock" && choice2 === "Scissors") {
      ++humanScore, console.log(`You win this round! Human score:{$humanScore} Computer score:{$computerScore}`);
   
   } else if (choice1 === "Scissors" && choice2 === "Paper") {
      ++humanScore, console.log(`You win this round! Human score:{$humanScore} Computer score:{$computerScore}`);

   } else if (choice1 === choice2) {
      console.log(`It's a tie. Human score:${humanScore} Computer score:${computerScore}`);

   } else { ++computerScore, console.log(`Computer wins this round. Human score:${humanScore} Computer score:${computerScore}` );}
}

playRound(getHumanChoice(), getComputerChoice())

/* if getHumanChoice equals Paper and getComputerChoice equals Rock, increase humanScore by one and print "You won this round!"
   if getHumanChoice equals Rock and getComputerChoice equals Scissors, increase humanScore by one and print "You won this round!"
   if getHumanChoice equals Scissors and getComputerChoice equals Paper, increase humanScore by one and print "You won this round!"
   
   if getHumanChoice equals getComputerChoice, return "It's a tie"
   
   otherwise, increase getComputerChoice by one and print "The computer won this round!*/



   /*  #Create a function that checks "who wins" with conditionals, prints the score and an appropriate message. */

    
  