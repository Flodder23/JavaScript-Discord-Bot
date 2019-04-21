const Discord = require("discord.js");

function getConfig() {
	try {
		const config = require("./config.json");
		const token = config.token;
		const prefix = config.prefix;
		console.log("Starting using locally stored value for token.");
		return {"token": token, "prefix": prefix}
	}
	catch(error) {
		const token = process.env.TOKEN;
		const prefix = ".";
		console.log("Starting using token stored on Heroku");
		return {"token": token, "prefix": prefix}
	}
}

const config = getConfig()
const { AkairoClient } = require("discord-akairo");
const client = new AkairoClient({
    ownerID: "286601488703291395",
    prefix: config["prefix"],
    commandDirectory: "./commands/",
    inhibitorDirectory: "./inhibitors/",
    listenerDirectory: "./listeners/",
    allowMention: true
}, {
	disableEveryone: true
});

client.login(config["token"]);