const {Command} = require("discord-akairo");
const Discord = require("discord.js");
const info = require("./info.json").avatar;

class AvatarCommand extends Command {
	constructor() {
        super(info.name, {aliases: info.aliases, args: info.args});
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
