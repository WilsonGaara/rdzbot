//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
 let dbbotnick32 = JSON.parse(fs.readFileSync("./db.json", "utf8"));
let channel = bot.channels.get(dbbotnick32[message.guild.id].anuncioc);
if(!args[0]) return message.reply("DEFINA ARGUMENTO! \n**💡 DICA PARA A VIDA: Você pode usar {everyone} ou {here} para menções naquele canal :wink:**")
if(!dbbotnick32[message.guild.id].anuncioc) return message.channel.send(":x: **|** Esta guilda não definiu nenhum canal de anúncio, se você for um integrante da staff digite: \n **z!configs/config** _anunciarc_ <ID DO CANAL>\n Obrigada desde já!")

if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("😦 | Desculpe, você não pode executar esta ação porque seu nível neste servidor não alcança os requisitos para usar o comando.\n > Requer permissão nomeada de: `ADMINISTRADOR.`");
if(args.join(" ").includes("{everyone}")) {
var embed = new Discord.RichEmbed()
.setColor('#00ffff')
.setAuthor("Anúncio por: "+message.author.tag, message.author.displayAvatarURL)
.setDescription("**Conteúdo**: \n"+args.join(" ").replace("{everyone}", ''))
.setTimestamp()
.setFooter("Data do anúncio:")
 channel.send(embed)
 channel.send("@everyone")
}
if(args.join(" ").includes("{here}")) {
var embed = new Discord.RichEmbed()
.setColor('#00ffff')
.setAuthor("Anúncio por: "+message.author.tag, message.author.displayAvatarURL)
.setDescription("**Conteúdo**: \n"+args.join(" ").replace("{here}", ''))
.setTimestamp()
.setFooter("Data do anúncio:")
 channel.send(embed)
 channel.send("@here")
}
if(!args.join(" ").includes("{everyone}")) {
if(!args.join(" ").includes("{here}")) {

var embed = new Discord.RichEmbed()
.setColor('#00ffff')
.setAuthor("Anúncio por: "+message.author.tag, message.author.displayAvatarURL)
.setDescription("**Conteúdo**: \n"+args.join(" "))
.setTimestamp()
.setFooter("Data do anúncio:")
 channel.send(embed)
}
}
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "anunciar",
    aliases: []
}
