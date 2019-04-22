const {Command} = require("discord-akairo");
const Discord = require("discord.js")

class HelpCommand extends Command {
	constructor() {
		super("help", {
			aliases: ["help", "info", "command"],
			args: [{id: "command", type: "string"}],
			description: "Shows help message.\nType .help <command> for more info on a command. If no command is given it gives a general overview of all possible commands."});
	}
	exec(message, args) {
		if (args.command) {
			let command_found = false;
			for (let item of this.handler.modules) {
				if (item[1].aliases.includes(args.command) && !command_found) {
					command_found = true
					let cmd = item[1];
					message.channel.send(new Discord.RichEmbed()
						.setColor(16426522)
						.setTitle(`**Help for ${cmd.id} command**`)
						.setURL(`https://github.com/joegibby/JavaScript-Discord-Bot/blob/master/commands/${cmd.id}.js`)
						.addField("Aliases", ` - ${cmd.aliases.join("\n - ")}\n`)
						.addField("Description", cmd.description + "\n")
						.addField("Usage", `\`${this.handler.prefix() + cmd.id} <${cmd.args.map(item => item.id).join("> <")}>\``)
					);
				}
			}
			if (!command_found) {
				message.reply(`sorry, couldn't find that command. Type \`${this.handler.prefix()}help\` for a list of commands.`)
			}
		} else {
			let cmds = [];
			for (let item of this.handler.modules) {
				cmds.push([item[0], item[1].description.split("\n")[0]])
			}
			console.log(cmds);
			message.channel.send(new Discord.RichEmbed()
				.setColor(16426522)
				.setTitle("**Joe's Bot Help**")
				.setURL("https://github.com/joegibby/JavaScript-Discord-Bot/blob/master")
				.addField("Info", `Bot made in Discord.js using discord-akairo by @Joe#5991.\nType \`${this.handler.prefix()}help <command>\` for more information on a command.`)
				.addField("Commands", ` - ${cmds.map(item => item[0]).join("\n - ")}`, true)
				.addField("Description", cmds.map(item => item[1]).join("\n"), true)
			);
		}
	}
}

module.exports = HelpCommand;