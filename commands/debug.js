const { Command } = require("discord-akairo");
const Discord = require("discord.js")

class DebugCommand extends Command {
	constructor() {
		super("debug", {
			aliases: ["debug", "test"],
			description: "Dummy command for debugging/testing the bot."});
	}

	exec(message) {
		for (let item of this.handler.modules) {
			if (item[0] === "help") {
				let cmd = item[1];
				console.log(cmd.args.map(item => item.id))
			}
		}
	}
}

module.exports = DebugCommand;