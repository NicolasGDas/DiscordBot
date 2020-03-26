const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const botconfig = require("./botconfig.json");
const colors = require("./colors.json");

module.exports.run = async (bot, messege, args) => {
    const embed = new MessageEmbed()
    .setColor(colors.red)
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .addField("**Guild Name**", `${message.guild.name}`, true)
    .addField("**Guild Owner**", `${message.guild.owner}`, true)
    .addField("**Member count**", `${message.guild.memberCount}`, true)
    .addField("**Role count**", `${message.guild.roles.size}`, true)
    .setFooter("TestBot | Footer", bot.user.displayAvatarURL);
    message.channel.send(embed);

}

module.exports.config = {
    name:"serverinfo",
    aliases: ["si", "serverdesc"]
}