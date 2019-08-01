//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
if(message.guild.id == "503010600859992066") return message.channel.send(`Tempo de reação sobre sua mensagem / Seu ping:\n${Math.round(Date.now() - message.author.lastMessage.createdTimestamp)}ms :ox::fencer:.`)
    message.channel.send(`💯% de chance de você se perguntar o que é isso, e sei que você não consegue ler, e se leu, alguma coisa há de errado com meu sistema ;P`).then(message1 => { 
        
message1.edit(message.author+` 🏓 | Latência (tempo de ida e volta): ${Math.round(Date.now() - message1.createdTimestamp)}**ms**\n📶 | Me conecto com minha A.P.I em: ${parseInt(bot.ping)}**ms**`)
    });    
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "ping",
    aliases: ["ms", "lag", "latência", "ping", "latency"]
}
