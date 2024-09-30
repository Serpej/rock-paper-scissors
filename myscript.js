console.log("Hello World!");

/* #Create a function called getComputerChoice;

#Use Math.random to randomly choose a number between 0 and 1;

#Create conditionals in the getComputerChoice function, which returns Rock Paper or Scissors depending on the randomly generated number.
 Each number responds to a third of the decimals between 0 and 1; */

 function getComputerChoice() {
    
    const choice = Math.random();
    
    if (choice <= 0.33) {
        return console.log("Rock");

    } else if (choice >= 0.66) {
        return console.log("Scissors");

    } else {
       return console.log("Paper");
    }
 }

 getComputerChoice()

 function getHumanChoice() {
   let choice = window.prompt("Rock, Paper or Scissors?");

   if (choice.toLowerCase() === "rock") {
    return console.log("Rock");

   } else if (choice.toLowerCase() === "paper") {
    return console.log("Paper");
   
   } else if (choice.toLowerCase() === "scissors") {
    return console.log("Scissors");
   } 
 }

 getHumanChoice()

 /* #Create a function that calls getComputerChoice() when we write either Rock Paper or Scissors in the console.

    #Create a function that keeps score by increasing numbers and associates them with computer and player.

    #Create a function that checks "who wins" with conditionals, prints the score and an appropriate message.*/

    
  