function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3 + 1);
  switch (compChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice:", "");
  return humanChoice.toLowerCase();
}
let humanScore = 0,
  computerScore = 0;
function playRound(compChoice, humanChoice) {
  if (
    (compChoice === "rock" && humanChoice === "rock") ||
    (compChoice === "paper" && humanChoice === "paper") ||
    (compChoice === "scissors" && humanChoice === "scissors")
  )
    alert("Draw!");
  else if (compChoice === "rock" && humanChoice === "paper") {
    alert("You win! " + humanChoice + " beats " + compChoice);
    humanScore++;
  } else if (compChoice === "rock" && humanChoice === "scissors") {
    alert("You lose! " + compChoice + " beats " + humanChoice);
    computerScore++;
  } else if (compChoice === "paper" && humanChoice === "rock") {
    alert("You lose! " + compChoice + " beats " + humanChoice);
    computerScore++;
  } else if (compChoice === "paper" && humanChoice === "scissors") {
    alert("You win! " + humanChoice + " beats " + compChoice);
    humanScore++;
  } else if (compChoice === "scissors" && humanChoice === "rock") {
    alert("You win! " + humanChoice + " beats " + compChoice);
    humanScore++;
  } else if (compChoice === "scissors" && humanChoice === "paper") {
    alert("You lose! " + compChoice + " beats " + humanChoice);
    computerScore++;
  }
}
function playGame() {
  for (let i = 0; i <= 4; i++) {
    let compChoice = getComputerChoice(),
      humanChoice = getHumanChoice();
    playRound(compChoice, humanChoice);
  }
  if (computerScore === humanScore) console.log("Final result: Draw");
  else if (computerScore > humanScore)
    alert("Final result: Computer wins");
  else alert("Final result: You win");
}
playGame();
