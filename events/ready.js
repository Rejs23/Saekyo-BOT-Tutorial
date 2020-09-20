const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`Hi ${bot.user.username} is online`)
    bot.user.setActivity("Saekyo", {type: ""});
}
