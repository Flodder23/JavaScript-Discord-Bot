const {Command} = require("discord-akairo");
const Discord = require("discord.js")
const help = require("./info.json");
const info = help.help;

class HelpCommand extends Command {
	constructor() {
		super(info.name, {aliases: info.aliases, args: info.args});
	}

	exec(message, args) {
		let text;
		if (args.command) {
			let cmd = args.command.toLowerCase();
			for (let i=0; i<help.command_list.length; i++) {
				if (help[help.command_list[i]].aliases.includes(cmd)) {
					cmd = help[help.command_list[i]];
					let title = `Help for command ${cmd.name}`;
					let aliases = "";
					for (let j=0; j<cmd.aliases.length; j++) {
						aliases += `\n - ${cmd.aliases[j]}`;
					}
					//let desc =`**${cmd.short_desc}**\n${cmd.long_desc}`;
					let example =`.${cmd.name} `
					if (!(cmd.args === null)) {
						for (let j=0; j<cmd.args.length; j++) {
							example += `<${cmd.args[j].id}> `
						}
					}
					let embed = new Discord.RichEmbed()
					embed.setTitle(`Help for ${cmd.name} command`)
					embed.setColor(16426522)
					embed.addField("Aliases", aliases)
					embed.addField(cmd.short_desc, cmd.long_desc)
					embed.addField("Example", example)
					return message.channel.send(embed)
				}
			}
		} else {
			let embed = new Discord.RichEmbed()

			    .setTitle("Help for")
			    .addField("Name", "Content")

			message.channel.send(embed)
		}
	}
}

module.exports = HelpCommand;