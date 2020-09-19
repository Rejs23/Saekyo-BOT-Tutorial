const Discord = require("discord.js")
const config = require("./config.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send(`Hello ${message.author}`)
}

module.exports.config = {
    name: "hi",
    description: "Hi commands",
    usage: "/hi",
    accessableby: "Members",
    aliases: ['Hi']
}
