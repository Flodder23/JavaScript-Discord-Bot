const {Command} = require("discord-akairo");
const Discord = require("discord.js");
const info = require("./info.json").avatar;

class AvatarCommand extends Command {
	constructor() {
		super("avatar", {
			aliases: ["avatar", "pic"],
			args: [{"id": "member", "type": "member"}],
			description: "Shows avatar of selected user.\nIf the user cannot be found, or no user is given, it shows the avatar of the user who called the command."});
	}

	exec(message, args) {
		let Embed = new Discord.RichEmbed();
		if(args.member) {
			Embed.setImage(args.member.user.avatarURL);
		} else {
			Embed.setImage(message.author.avatarURL);
		}
		message.channel.send(Embed);
	}
}

module.exports = AvatarCommand;
