const {Command} = require("discord-akairo");
const Discord = require("discord.js");

class PollCommand extends Command {
	constructor() {
		super("poll", {
			aliases: ["poll"],
			args: [{id: "options", type: "string", match: "content"}],
			description: "Creates a poll with the given options.\nOptions should be seperated by a semi-colon, like this: `question; option 1; option 2; option 3` etc."
		});
	}
	async exec(message, args) {
		let options = args.options.split(";").map(item => item.trim());
		let d = 0;
		for (let i = 0; i < options.length + d; i++) {
			if (options[i - d] == "") {
				options.splice(i - d, 1);
				d ++;
			}
		}

		if (3 <= options.length && options.length <= 20) {
			const letters = ["\u{1f1e6}", "\u{1f1e7}", "\u{1f1e8}", "\u{1f1e9}", "\u{1f1ea}", "\u{1f1eb}", "\u{1f1ec}", "\u{1f1ed}", "\u{1f1ee}", "\u{1f1ef}", "\u{1f1f0}", "\u{1f1f1}", "\u{1f1f2}", "\u{1f1f3}", "\u{1f1f4}", "\u{1f1f5}", "\u{1f1f6}", "\u{1f1f7}", "\u{1f1f8}", "\u{1f1f9}","\u{1f1fa}", "\u{1f1fb}", "\u{1f1fc}", "\u{1f1fd}", "\u{1f1fe}", "\u{1f1ff}"]
			//there must be a better way of doing this
			let nickname = message.member.nickname
			if (nickname == null) {nickname = message.member.user.username}
			let question = options.shift();
			for (let i = 0; i < options.length; i++) {
				let code = 127462;
				options[i] = [letters[i], options[i]]
			}

			let sent = await message.channel.send(new Discord.RichEmbed()
				.setColor(16426522)
				.setTitle(nickname + "'s Poll")
				.addField(question, options.map(item => item.join(" - "))))
			for (let i = 0; i < options.length; i++) {
				await sent.react(letters[i]);
			}
		} else {
			return message.reply("Something went wrong - options should be seperated by a semi-colon, like this: `question; option 1; option 2; option 3` etc. and there should be between 2 and 20 options.")
		}
	}
}


module.exports = PollCommand;