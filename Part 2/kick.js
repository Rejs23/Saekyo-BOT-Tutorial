const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permission to use this command")
  if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send ("I don't have permission to kick member")
  
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
  if(!args[0]) return message.channel.send("Please mention user");
  if(!member) return message.channel.send("Can't find this user");
  if(!member.kickable) return message.channel.send("This user can't kicked, because they are a mod/admin");
  
  if(member.id === message.author.id) return message.channel.send("Bruh, You can't kick yourself");
  
  let reason = args.slice(1).join(" ");
  
  if(!reason) reason = "No reason";
  
  member.kick(reason)
  .catch(err=>{
    if(err)return message.channel.send("Something went wrong");
  })
  
  const kickembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Member Kicked")
  .setThumbnail(member.user.displayAvatarURL({format: "png", dynamic: true}))
  .addField("User Kicked", member)
  .addField("Kicked By", message.author.tag)
  .addField("Reason", reason)
  .setFooter("Time Kicked", bot.user.displayAvatarURL())
  .setTimestamp()
  
  message.channel.send(kickembed);
}

module.exports.config = {
    name: "kick",
    description: "Kick Members",
    usage: "/kick",
    accessableby: "Moderator",
    aliases: ['Kick']
}
