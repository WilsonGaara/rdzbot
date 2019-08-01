// Este é o meu núcleo, aqui você vai encontrar o coração do meu sistema :-D
const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: false, fetchAllMembers: true});
let criador1 = "Cauã (BRAZIL) Geo: CONNECTION ESTABLISHED (geolocation: true)"
let criador2 = "Layssa (E.300TM-B)"
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./lowdb.json');
const db = low(adapter);
// Vamos para a ação (após variáveis)


bot.on("ready", async () => {
    console.log(`Protocolo Friday |v3.6.9| Comando: iniciar.`)
    console.log("Olá, senhor, como está? Espero que bem. ^^")
    console.log(`Olá mundo. Evento: READY`)
    console.log(`Rastreando meu criador...\nEncontrados:\n${criador1}; \n${criador2}`)
    bot.user.setActivity(`papo de ${bot.users.size} zoeiros(as).`, {type: 2});
})


bot.on("guildCreate", guild => {
    let db1 = JSON.parse(fs.readFileSync("./welcomeb.json", "utf8"));
    db1[guild.id] = {
        welcomeb: "falso"
      };
      fs.writeFile("./welcomeb.json", JSON.stringify(db1), (err) => {
        if (err) console.log(err)
      });
      let db2 = JSON.parse(fs.readFileSync("./welcomec.json", "utf8"))
      db2[guild.id] = {
        welcomec: "nada"
      };
      fs.writeFile("./welcomec.json", JSON.stringify(db2), (err) => {
        if (err) console.log(err)
      });
      let db3 = JSON.parse(fs.readFileSync("./id.json", "utf8"));
      db3[guild.id] = {
        id: guild.id
      };
      fs.writeFile("./id.json", JSON.stringify(db3), (err) => {
        if (err) console.log(err)
      });
      let db4 = JSON.parse(fs.readFileSync("./goodbyeb.json", "utf8"));
      db4[guild.id] = {
        goodbyeb: "falso"
      };
      fs.writeFile("./goodbyeb.json", JSON.stringify(db4), (err) => {
        if (err) console.log(err)
      });
  let db5 = JSON.parse(fs.readFileSync("./db.json", "utf8"));
      db5[guild.id] = {
        welcomec: "nada"
      };
      fs.writeFile("./db.json", JSON.stringify(db5), (err) => {
        if (err) console.log(err)
      });
 
db.set(guild.id, []).write();
db.get(guild.id).push({
    welcomesys: "falso",
    id: guild.id,
    goodbyesys: "falso",
    channel: "0",
    });
});
bot.on('guildMemberAdd', member => {
    let db = JSON.parse(fs.readFileSync("./db.json", "utf8"));
    let db1 = JSON.parse(fs.readFileSync("./welcomeb.json", "utf8"));
    let db12 = JSON.parse(fs.readFileSync("./welcomec.json", "utf8"));
    let nome = `${member.user.username}`
    var texto = [`➡ Jogador **${nome}** pronto!`, `➡ **${nome}** chegou, finjam estar ocupados!`, `➡ Trouxe pizza **${nome}**?`, `➡ **${nome}** acabou de entrar no servidor - glhf!`, `➡ **${nome}** acabou de aterrissar. Parece OP - Por favor nerfe!`, `➡ Rosas são vermelhas, violetas azuis, **${nome}** entrou no servidor com tu!`, `➡ É um pássaro, um avião... Não, é só **${nome}**.`, `➡ É perigoso ir sozinho! Leve **${nome}**`]
    const random = texto[Math.floor(Math.random() * texto.length)];
    let channel = bot.channels.get(db12[member.guild.id].welcomec);
    if(db1[member.guild.id].welcomeb === "verdadeiro") {
    var embed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setTimestamp()
    .setDescription(random)
    .setFooter("Bem-vindo (ou vinda)", member.user.displayAvatarURL)
       channel.send(embed)
    }
if(db1[member.guild.id].welcomeb === "falso") return console.log("false db guildmemberadd");
});
bot.on('guildMemberDelete', member => {

  let db1 = JSON.parse(fs.readFileSync("./goodbyeb.json", "utf8"));
  let db12 = JSON.parse(fs.readFileSync("./welcomec.json", "utf8"));
  let nome = `${member.user.username}`
  let channel = bot.channels.get(db12[member.guild.id].welcomec);
  if(db1[member.guild.id].goodbyeb === "verdadeiro") {
  var embed = new Discord.RichEmbed()
  .setColor('RED')
  .setTimestamp()
  .setDescription(`⬅ Adeus **${nome}**.`)
  .setFooter("Oferecido por Friday.", member.user.displayAvatarURL)
     channel.send(embed)
  }
if(db1[member.guild.id].goodbyeb === "falso") return console.log("false db guildmemberdelete");
});

//Database END;
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir(`./comandos/`, (err, files) => {
    if (err) console.log(err)

var jsfile = files.filter(f => f.split(".").pop() === "js")
    jsfile.forEach((f, i) => {
        let pull = require(`./comandos/${f}`)
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)

        });
    });
});
//Definindo message.
bot.on("message", async message => {
var fs = require('fs')

  
  
  let db1 = JSON.parse(fs.readFileSync("./welcomeb.json", "utf8"));
 
    if(message.author.bot == true) return;
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let dbbotnick = JSON.parse(fs.readFileSync("./db.json", "utf8"));
    if(!dbbotnick[message.guild.id]){
        dbbotnick[message.guild.id] = {
          dbbotnick: "Friday"
        };
     }
     if(!dbbotnick[message.author.id]){
        dbbotnick[message.author.id] = {
          dbnick: message.author.username
        };
     }
let ddb6 = JSON.parse(fs.readFileSync("./warns.json", "utf8"))
if(!ddb6[message.author.id]){
      ddb6[message.author.id] = {
        warns: 0
      }
      };
    //  fs.writeFile("./warns.json", JSON.stringify(ddb6), (err) => {
    //    if (err) console.log(err)
    //  });
     //Algumas coisinhas, hehe...
    let botnick = dbbotnick[message.guild.id].dbbotnick;
    let authornick = dbbotnick[message.author.id].dbnick;
    if(!message.content.startsWith(prefix)) return;
    let commandFile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandFile)commandFile.run(bot,message,args,prefix,botnick,authornick)

  
 
                    
});
  

bot.login(process.env.TOKEN);
//E o grã finale!!!
