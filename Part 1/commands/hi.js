const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    return message.channel.send(`hi ${message.author} good morning!!!`)
}

module.exports.config = {
    name: "hi",
    description: "Hello commands",
    usage: "/hi",
    accessableby: "Members",
    aliases: ['Hi']
}
