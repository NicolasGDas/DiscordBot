module.exports = {
    name: "ping",
    aliases: [],
    category: "info",
    descrption: "Returns latency and API ping",
    run: async(bot,message,args) =>{
        const msg = await message.channel.send("Pinging.....");
        msg.edit(`Pong!\nLatency is ${Math.floor(msg.createdAt - message.createdAt)} ms\nAPI Latency is ${Math.round(bot.ws.ping)} ms`);
        console.log(message.guild.roles);
    }
}