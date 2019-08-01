//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
let db1 = JSON.parse(fs.readFileSync("./db.json", "utf8"));
if(db1[message.author.id].perm == "off") return message.channel.send("Por achar que vocês meros mortais não tem cérebro, só quem usa esse comando com maestria são pessoas categorizadas na minha memória como: **Staff / Superiores**\n para definir um, você precisa ser o dono do servidor e usar z!set @mencao <staff/superior>")
if(!db1[message.author.id].perm) return message.channel.send("Por achar que vocês meros mortais não tem cérebro, só quem usa esse comando com maestria são pessoas categorizadas na minha memória como: **Staff / Superiores**\n para definir um, você precisa ser o dono do servidor e usar z!set @mencao <staff/superior>")
if(!db1[message.author.id]) return message.channel.send("Por achar que vocês meros mortais não tem cérebro, só quem usa esse comando com maestria são pessoas categorizadas na minha memória como: **Staff / Superiores**\n para definir um, você precisa ser o dono do servidor e usar z!set @mencao <staff/superior>")

let motiv = args.join(" ")
let artigo13 = args[1]
if(!artigo13) {

message.channel.send("Primeiro você tem que ter a cara de pau de não botar artigo né?!")

}
if(!args[0]) return message.channel.send("Declare uma menção do staff (funcionário(a)) que deseja ferrar.\nNão tenho o dia todo. \n **COMO USAR | EXEMPLO:** z!swarn <@395005096527790083> artigo(de 1 a 27) (tudo junto)\n artigo seria o que ele infringiu das regras, o servidor tem uma lista com todos os artigos e seus respectivos números <#574332471659724826>.) \n > REGRAS DO SERVIDOR também contam")
if(!message.mentions.users.first()) return message.channel.send("Declare uma menção do staff (funcionário(a)) que deseja ferrar.\nNão tenho o dia todo. \n **COMO USAR | EXEMPLO:** .swarn <@395005096527790083> artigo(de 1 a 27) (tudo junto | artigo seria o que ele infringiu das regras, o servidor tem uma lista com todos os artigos e seus respectivos números <#574332471659724826>.) \n> OBS: REGRAS DO SERVIDOR também contam.")
 
 setInterval(() => {
      message.delete()
    },300)
  message.channel.send('Ótimo, agora que você mencionou, diga-me o motivo.').then(message4 => {
 
  })
  
.then(() => {
  message.channel.awaitMessages(response => response.author.id === message.author.id, {
    max: 1
    
  })
.then((collected) => {
  collected = collected.first().content.toLowerCase();
var coletado = collected;

message.channel.send("Ótimo! Você conseguiu, o resultado final foi igual à: \n **"+coletado+ "**\nO artigo é:\n"+artigo13)
let c=bot.channels.get('604160970809671688')
var embed = new Discord.RichEmbed()
.setColor('RED')
.setAuthor("Avisado.", bot.user.avatarURL)
.setDescription("Você infringiu o artigo: "+artigo13)
.addField("MOTIVO", coletado)
.setTimestamp()
.setFooter("Mais um pra conta de: "+message.mentions.users.first().tag, message.mentions.users.first().displayAvatarURL)
message.mentions.users.first().send(embed).catch(error =>  message.channel.send("O corno desativou a DM, tomara que erre do mesmo jeito mais vezes.\n Sou piedoso e vou mandar aqui pro6\n||sqn||"))
let db6 = JSON.parse(fs.readFileSync("./warns.json", "utf8"))
      db6[message.mentions.users.first().id] = {
        warns: Math.round(db6[message.mentions.users.first().id].warns + 1)

      };
      fs.writeFile("./warns.json", JSON.stringify(db6), (err) => {
        if (err) console.log(err)
      });
c.send(`<a:police:603785861506793487> **|** 🔄 Atualização de número de staff-warns de:\n${message.mentions.users.first()}\nQuantidade de warns: `+"`"+`${db6[message.mentions.users.first().id].warns}`+"`")
  })})
}   

//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "swarn",
    aliases: ["staffwarn"]
}
