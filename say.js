const { MessageEmbed } = require('discord.js');

module.exports= {
    name:"say",
    aliases: ["bc", "brodcast"],
    category: "moderation",
    description: "Says your input via the bot",
    usage: "<input>",
    run: async(bot,message,args) =>{
        if(message.delateble){
            message.delete();
        }
       

        if(args.lenght<1){
            return message.reply("Nothing to say??").then (m => m.delete(5000));
    }
        const color = message.guild.me.displayHexColor;
        const embed = new MessageEmbed()
        .setColor(color)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .addField("**Guild Name**", `${message.guild.name}`, true)
        .addField("**Guild Owner**", `${message.guild.owner}`, true)
        .addField("**Member count**", `${message.guild.memberCount}`, true)
        .addField("**Role count**", `${message.guild.roles.size}`, true)
        .setFooter("TestBot | Footer", bot.user.displayAvatarURL);
        message.channel.send(embed);
    }
} 