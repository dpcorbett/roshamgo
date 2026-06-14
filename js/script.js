var compare = function (choice1, choice2) {
	"use strict";

	if (choice1 === choice2) {
		return "The result is a tie!";
	} else if (choice1 === "rock") { // User chooses rock
		if ((choice2 === "fire") || (choice2 === "scissors")) {
			return "Rock smashes " + choice2 + "! Rock wins!";
		} else if (choice2 === "paper") {
			return "Paper covers Rock! Paper wins!";
		} else {
			return "Rope ties up Rock! Rope wins!";
		}
	} else if (choice1 === "paper") { // User chooses paper
		if ((choice2 === "rock") || (choice2 === "rope")) {
			return "Paper covers " + choice2 + "! Paper wins!";
		} else if (choice2 === "scissors") {
			return "Scissors cuts Paper! Scissors wins!";
		} else {
			return "Fire burns Paper! Fire wins!";
		}
	} else if (choice1 === "scissors") { // User chooses scissors
		if ((choice2 === "fire") || (choice2 === "paper")) {
			return "Scissors cuts " + choice2 + "! Scissors wins!";
		} else if (choice2 === "rope") {
			return "Rope tangles Scissors! Rope wins!";
		} else {
			return "Rock smashes Scissors! Rock wins!";
		}
	} else if (choice1 === "rope") { // User chooses rope
		if ((choice2 === "rock") || (choice2 === "scissors")) {
			return "Rope ties up " + choice2 + "! Rope wins!";
		} else if (choice2 === "fire") {
			return "Fire burns Rope! Fire wins!";
		} else {
			return "Paper covers Rope! Paper wins!";
		}
	} else if (choice1 === "fire") { // User chooses fire
		if ((choice2 === "paper") || (choice2 === "rope")) {
			return "Fire burns " + choice2 + "! Fire wins!";
		} else if (choice2 === "rock") {
			return "Rock smothers Fire! Rock wins!";
		} else {
			return "Scissors snips Fire (extinguishes)! Scissors wins!";
		}
	}
};

var playGame = function (p_choice) {
	"use strict";
	console.log("User chose: " + p_choice);
	var userChoice = p_choice;

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
	console.log("Computer chose: " + computerChoice);

	var result = compare(userChoice, computerChoice);
	$("#gameResult").text("You chose: " + userChoice + ". Computer chose: " + computerChoice + ". " + result);
};
