function getComputerChoice()
{
	let rPS = Math.random()
	if (rPS < 0.3)
	{
		return "Rock";
	}
	else if (rPS < 0.6)
	{
		return "Paper";
	}
	else
	{
		return "Scissors";
	}
}
function getHumanChoice()
{
	const userChoice1 = document.querySelector("button");
	const userChoice2 = document.querySelectorAll("button")[1];
	const userChoice3 = document.querySelectorAll("button")[2];
	let userInput = prompt("choose between rock, paper and scissors");
	if (userInput != null)
	{
		userInput = userInput.toLowerCase();
		if (userInput === "rock")
			return "Rock";
		else if (userInput === "paper")
			return "Paper";
		else if (userInput === "scissors")
			return "Scissors";
	}
}
function playRound(humanChoice, computerChoice)
{
	if (humanChoice === "Rock" && computerChoice === "Rock")
	{
		draw++;
		return "Draw";
	}
	else if (humanChoice === "Rock" && computerChoice === "Paper")
	{
		computerScore++;
		return "You lose, Rock loses against Paper";
	}
	else if (humanChoice === "Rock" && computerChoice === "Scissors")
	{
		humanScore++;
		return "You win, Rock wins against Scissors";
	}
	else if (humanChoice === "Paper" && computerChoice === "Rock")
	{
		humanScore++;
		return"You win, Paper wins against Rock";
	}
	else if (humanChoice === "Paper" && computerChoice === "Paper")
	{
		draw++;
		return "Draw";
	}
	else if (humanChoice === "Paper" && computerChoice === "Scissors")
	{
		computerScore++;
		return "You lose, Paper loses against Scissors";
	}
	else if (humanChoice === "Scissors" && computerChoice === "Rock")
	{
		computerScore++;
		return "You lose, Scissors loses against Rock";
	}
	else if (humanChoice === "Scissors" && computerChoice === "Paper")
	{
		humanScore++;
		return "You win, Scissors wins against Paper";
	}
	else if (humanChoice === "Scissors" && computerChoice === "Scissors")
	{
		draw++;
		return "Draw";
	}
}
function playGame(humanChoice)
{
	console.log(playRound(humanChoice, getComputerChoice()));
	console.log("Human_Score:", humanScore, "Computer_Score:", computerScore, "Draw_Score:", draw);
	if (humanScore === 5)
		console.log("Human wins")
	else if (computerScore === 5)
		console.log("Computer wins")
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;
