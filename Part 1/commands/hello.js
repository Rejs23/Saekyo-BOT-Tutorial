const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    return message.channel.send(`hello ${message.author} good morning!!!`)
}

module.exports.config = {
    name: "hello",
    description: "Hello commands",
    usage: "/hello",
    accessableby: "Members",
    aliases: ['Hello']
}
