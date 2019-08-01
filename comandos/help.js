//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args, prefix, authornick, botnick) => {
    
    message.channel.send("Comandos:\n`"+bot.commands.map(c => "z!"+c.config.name).join(', ')+"`")  
    
    
    };
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "help",
    aliases: ["ajuda", "comandos", "cmds", "cmd", "commands"]
}
