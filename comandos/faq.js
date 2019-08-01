//Vars:
var Discord = require('discord.js');
var fs = require('fs');
//Programação:
module.exports.run = async (bot, message, args) => {
if(message.guild.id == "503010600859992066") {
message.author.send(`:thinking: | F.A.Q\n
:one: | Como se torna staff? 
R: <#603341457356750849>\n
:two: | Como se torna parceiro do servidor?
R: Você precisa ter 150 membros em seu servidor, servidor ativo, e organizado. Depois, chame um SUB-OWNER ou superior para fazer parceria.\n
:three: | Como eu me torno um membro VIP?
R: Com invites, ou ganhando em algum sorteio.\n
:four: | Os formulários são lidos rápidamente? Como eu sei se eu fui aprovado?
R: Sim. Se você for aprovado, precisa estar no servidor, e você terá o seu cargo setado.\n
:five: | Como eu posso sugerir algo para o servidor?
R: Neste canal: <#593214879008292885>\n \n \n
:1234: | Mais dúvidas? Sugira em <#593214879008292885>!`).catch(error =>  message.reply("OOPS! | Para, para, para - você bloqueou mensagens privadas via DM, ative já! "))
message.channel.send("📬 | Por ética e educação... Enviei via.DM (mensagens diretas) um guia sobre **Perguntas Frequentes**!")

    }
};
//Encerrado, vamos definir as aliases e o nome da função.
module.exports.config = {
    name: "faq",
    aliases: ["f-a-q", "duvida"]
}
