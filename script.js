var promptUser = function( question )
{
    return prompt(question);
    };

var userChoice = promptUser("Do you choose rock, paper, scissors, fire, or rope?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2)
{
    if (choice1 === choice2)
    {
        return "The result is a tie!";
    }
    else if (choice1 === "rock")
    {
        if (choice2 === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";
        }
    }
    else if (choice1 === "paper")
    {
        if (choice2 === "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors")
    {
        if (choice2 === "paper")
        {
            return "scissors wins";
        }
        else
        {
            return "rock wins";
        }
    }
    else
    {
        return "invalid input";
    }
}

compare(userChoice, computerChoice);
