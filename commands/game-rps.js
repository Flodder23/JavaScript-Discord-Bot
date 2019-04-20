const { Command } = require("discord-akairo");

class rpsCommand extends Command {
	constructor() {
		super("rps", {
			aliases: ["RPS", "RockPaperScissors"]
		});
	}

	exec(message) {
		let player_choice = message.content.split(" ")[1]
		if (typeof player_choice === "undefined") {
			return message.reply("Please make your choice (rock, paper or scissors)")
		}
		player_choice = player_choice.toLowerCase();
		if (!["rock", "paper", "scissors"].includes(player_choice)) {
			return message.reply("Please make a legit choice (rock, paper or scissors)")
		}
		
		let bot_choice = player_choice;
		while (bot_choice === player_choice) {
			bot_choice = ["rock", "paper", "scissors"][Math.floor(3 * Math.random())];
		}

		let reply = "You chose " + player_choice + ".\nI chose " + bot_choice + ".\n";
		if (player_choice === "rock") {
			if (bot_choice === "paper"){
				reply += "I";
			}
			else {
				reply += "You";
			}
		}
		else if (player_choice === "paper") {
			if (bot_choice === "rock") {
				reply += "You";
			}
			else {
				reply += "I";
			}
		}
		else {
			if (bot_choice === "rock") {
				reply += "I";
			}
			else {
				reply += "You";
			}
		}

		return message.reply(reply + " win!");
	}
}

module.exports = rpsCommand;