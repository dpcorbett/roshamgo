// Collect user input
var userChoice = prompt("Please choose rock, paper, scissors, rope, or fire?").toLocaleLowerCase();
// Validate user input
while ((userChoice !== "rock") && (userChoice !== "paper") && (userChoice !== "scissors") && (userChoice !== "rope") && (userChoice !== "fire")) {
	 // Attempt to get valid user input
	userChoice = prompt("Please choose rock, paper, scissors, rope, or fire?").toLocaleLowerCase();
}
// Create computer choice
var computerChoice = Math.random();
if (computerChoice < 0.20) {
	computerChoice = "rock";
} else if (computerChoice <= 0.40) {
	computerChoice = "paper";
} else if (computerChoice <= 0.60) {
	computerChoice = "scissors";
} else if (computerChoice <= 0.80) {
	computerChoice = "rope";
} else {
	computerChoice = "fire";
}
// Compare both choices
var compare = function (choice1, choice2) {
   "use strict";
	if (choice1 === choice2) {
      return "The result is a tie!";
		 // User chooses rock	 
   } else if (choice1 === "rock") {
      if ((choice2 === "fire") || (choice2 === "scissors")) {
         return "rock wins";
      } else if (choice2 === "paper") {
         return "paper wins";
      } else {
			return "rope wins";
		}
		 // User chooses paper
   } else if (choice1 === "paper") {
      if ((choice2 === "rock") || (choice2 === "rope")) {
         return "paper wins";
      } else if (choice2 === "scissors") {
         return "scissors wins";
      } else {
         return "fire wins";
		}
		 // User chooses scissors
	} else if (choice1 === "scissors") {
      if ((choice2 === "fire") || (choice2 === "paper")) {
         return "scissors wins";
      } else if (choice2 === "rope") {
         return "rope wins";
      } else {
         return "rock wins";
      }
		 // User chooses rope
	} else if (choice1 === "rope") {
      if ((choice2 === "rock") || (choice2 === "scissors")) {
         return "rope wins";
      } else if (choice2 === "fire") {
         return "fire wins";
      } else {
         return "paper wins";
      }
		 // User chooses fire
	} else if (choice1 === "fire") {
      if ((choice2 === "paper") || (choice2 === "rope")) {
         return "fire wins";
      } else if (choice2 === "rock") {
         return "rock wins";
      } else {
         return "scissors wins";
      }
   }
};
compare(userChoice, computerChoice);
