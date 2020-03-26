const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const { Client, MessageEmbed,Collection } = require('discord.js');
const Prefix= botconfig.prefix

bot.commands = new Collection();
bot.aliases= new Collection();
["commands"].forEach(handler =>{
    require (`./handler/${handler}`)(bot);


bot.on ("ready", async()=> {
    console.log(`${bot.user.username} is online`);
    bot.user.setPresence({ game: { name: 'hello friend' }, status: 'idle' })
});
bot.on('message', async message =>{
    if (message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(Prefix))return;
    if(!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;
    
    let command = bot.commands.get(cmd);
    if(!command){
        command = bot.commands.get(bot.aliases.get(cmd));
    } 

    if(command){
        command.run(bot, message,args);
    }

})


}) 

bot.login(botconfig.token);