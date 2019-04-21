const Discord = require("discord.js");
const config = require("./config.json");
const { AkairoClient } = require("discord-akairo");
const client = new AkairoClient({
    ownerID: "286601488703291395",
    prefix: config.prefix,
    commandDirectory: "./commands/",
    inhibitorDirectory: "./inhibitors/",
    listenerDirectory: "./listeners/",
    allowMention: true
}, {
	disableEveryone: true
});

client.login(config.token);//process.env.TOKEN