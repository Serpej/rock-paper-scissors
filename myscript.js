
html = document.querySelector(".html");
html.classList.add("central");
body = document.querySelector("body");

startDiv = document.querySelector(".startDiv");
startDiv.classList.add("intro");

const startGame = document.querySelector(".startGame");

const makeChoice = document.createElement("h1");
const underscored = document.createElement("ins");
underscored.classList.add("ins");
   
const Rock = document.createElement("button");
const Paper = document.createElement("button");
const Scissors = document.createElement("button");
   
Rock.textContent = "Rock";
Paper.textContent = "Paper";
Scissors.textContent = "Scissors";

Rock.classList.add("bigS");
Paper.classList.add("bigS");
Scissors.classList.add("bigS");

const output = document.createElement("h1");
const theScore = document.createElement("h1");
const outputDiv = document.createElement("div");
outputDiv.classList.add("outputText");



    
function choiceButtons() {
   startDiv.appendChild(Rock);
   startDiv.appendChild(Paper);
   startDiv.appendChild(Scissors);

   underscored.textContent ="First to 5 points. Time to choose:";
   makeChoice.classList.add("makeChoice");

   body.insertBefore(makeChoice, startDiv);
   makeChoice.appendChild(underscored);
  

   body.removeChild(startGame);
};

/* Human's Choice */
function getHumanChoice(event) {
   if(event.target === Rock) {
     return "Rock";
 
   }else if (event.target === Paper){
     return "Paper";
    
   }else if (event.target === Scissors) {
     return "Scissors";
   };
};


/* Computer's choice */
function getComputerChoice() {  
   const choice = Math.random();
      if (choice <= 0.33) {
        return "Rock";

      } else if (choice >= 0.66) {
         return "Scissors";
   
      } else {return "Paper";}
};

   let humanScore = 0
   let computerScore = 0
   
function showScore() {
   if (humanScore === 5) {
      underscored.textContent=`Congratulations! You win the game!`;
      theScore.textContent =`Human score:${humanScore} Computer score:${computerScore}`;
      
   } else if (computerScore === 5) {
      underscored.textContent=`You sadly lost against the computer.`;
      theScore.textContent =`Human score:${humanScore} Computer score:${computerScore}`;
   }
   
   if (humanScore === 5 || computerScore === 5) {
   
      body.removeChild(startDiv);
      body.insertBefore(restartDiv, outputDiv);
      output.textContent = "";
   };
     
};



function playRound(event) {

   body.appendChild(outputDiv);
   outputDiv.appendChild(output);
   outputDiv.appendChild(theScore);

   let HumanChoice = getHumanChoice (event);
   let ComputerChoice = getComputerChoice();

    
   /* Human wins round */
   if (HumanChoice === "Paper" && ComputerChoice === "Rock") {
      output.textContent=`Nice! The computer chose Rock.`;
      humanScore += 1;
      theScore.textContent =`Human score:${humanScore} Computer score:${computerScore}`;

   } else if (HumanChoice === "Rock" && ComputerChoice === "Scissors") {
      output.textContent=`Nice! The computer chose Scissors.`;
      humanScore += 1;
      theScore.textContent =`Human score:${humanScore} Computer score:${computerScore}`;
   
   } else if (HumanChoice === "Scissors" && ComputerChoice === "Paper") {
      output.textContent=`Nice! The computer chose Paper.`;
      humanScore += 1;
      theScore.textContent =`Human score:${humanScore} Computer score:${computerScore}`;

   
   /* Computer wins one round*/

   } else if (HumanChoice === "Rock" && ComputerChoice === "Paper") {
       output.textContent=`Ouf! The computer chose Paper.`;
       computerScore += 1;
       theScore.textContent =`Human score:${humanScore} Computer score:${computerScore}`;

   } else if (HumanChoice === "Scissors" && ComputerChoice === "Rock") {
      output.textContent=`Ouf! The computer chose Rock.`;
      computerScore += 1;
      theScore.textContent =`Human score:${humanScore} Computer score:${computerScore}`;

   } else if (HumanChoice === "Paper" && ComputerChoice === "Scissors") {
      output.textContent=`Ouf! The computer chose Scissors.`;
      computerScore += 1;
      theScore.textContent =`Human score:${humanScore} Computer score:${computerScore}`;
   
   } else if (HumanChoice === ComputerChoice) {
      output.textContent=`It's a tie, the computer also chose that.`;
      theScore.textContent =`Human score:${humanScore} Computer score:${computerScore}`;
   }
  
   showScore();
};

function reset() {
   body.appendChild(startDiv);
   body.appendChild(outputDiv);
   body.removeChild(restartDiv);
   
   underscored.textContent ="First to 5 points. Time to choose:";
   output.textContent = "";
   theScore.textContent= "";
   humanScore = 0;
   computerScore = 0;
   body.removeChild(outputDiv);
};

const restartDiv = document.createElement("div");
restartDiv.classList.add("intro");
const restart = document.createElement("button");
restart.textContent = "Restart game?"
restart.classList.add("bigB");
restartDiv.appendChild(restart);

restart.addEventListener("click", (event) => {
   reset()
});

startGame.addEventListener("click", choiceButtons);
startDiv.addEventListener("click", (event) => playRound(event));