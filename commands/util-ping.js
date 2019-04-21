const {Command} = require("discord-akairo");
const Discord = require("discord.js")
const info = require("./info.json").ping;

class PingCommand extends Command {
	constructor() {
		super(info.name, {aliases: info.aliases});
	}

	exec(message) {
		return message.reply("ping").then(sent => {
			sent.edit(`${sent} \`${sent.createdAt - message.createdAt}ms\``);
		});
	}
}

module.exports = PingCommand;