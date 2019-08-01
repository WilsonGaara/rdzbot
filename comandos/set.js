//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
if(message.guild.owner.id !== message.author.id  ) return message.channel.send("você não tem permissão para usar isso.\n Requer: Autoria/Posse do servidor.")
 if (!message.mentions.users.first()) return message.reply("MENCIONA POXA")
if(!args) return message.reply('desembuxa')
 if (message.mentions.users.first()) {
         var userapelido = message.guild.member(message.mentions.users.first()).nickname
var us = message.mentions.users.first();
      var user = message.mentions.users.first().username;
      var userfoto = message.mentions.users.first().displayAvatarURL;
    var userstatus = message.mentions.users.first().presence.status;
    var usertag = message.mentions.users.first().tag;
    var usercolorole = message.guild.member(message.mentions.users.first()).displayHexColor;
    var usercriado = message.mentions.users.first().createdTimestamp;
    var userid = message.mentions.users.first().id;
  var game2 = message.mentions.users.first().presence.game;
  
  var userentrou = message.guild.member(message.mentions.users.first().id).joinedTimestamp;
  var usercargo = message.guild.member(message.mentions.users.first().id).roles;
  var userbot = message.mentions.users.first().bot;
  
    } else {
      us = message.author;
      user = message.author.username;
      userfoto = message.author.displayAvatarURL;
      userstatus = message.author.presence.status;
    usertag = message.author.tag;
    usercolorole = message.guild.member(message.author.id).highestRole.displayHexColor;
    usercriado = message.author.createdTimestamp;
    userid = message.author.id;
    game2 = message.author.presence.game;
     
    userentrou = message.guild.member(message.author.id).joinedTimestamp;
    usercargo = message.guild.member(message.author.id).roles;
    userapelido = message.guild.member(message.author.id).nickname
    userbot = message.author.bot;
    }
if(!args[1]) {
message.reply("Convém explicar qual posição o membro do servidor vai ser, seja **staff** `membro` ou **superior** ")
}
if(args[1].toLowerCase() == "staff"){
let db6 = JSON.parse(fs.readFileSync("./db.json", "utf8"))
      db6[userid] = {
        staff: "on",
        superior: "off",
        perm: "on"
      };
      fs.writeFile("./db.json", JSON.stringify(db6), (err) => {
        if (err) console.log(err)
      });
message.reply("pronto!")
}if(args[1].toLowerCase() == "superior"){
let db6 = JSON.parse(fs.readFileSync("./db.json", "utf8"))
      db6[userid] = {
        staff: "off",
        superior: "on",
        perm: "on"
      };
      fs.writeFile("./db.json", JSON.stringify(db6), (err) => {
        if (err) console.log(err)
      });
message.reply("pronto!")
}if(args[1].toLowerCase() == "membro"){
let db6 = JSON.parse(fs.readFileSync("./db.json", "utf8"))
      db6[userid] = {
        staff: "off",
        superior: "off",
        perm: "off"
      };
      fs.writeFile("./db.json", JSON.stringify(db6), (err) => {
        if (err) console.log(err)
      });
message.reply("pronto!")
}
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "set",
    aliases: []
}
