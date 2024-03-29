const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    message.delete();
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(` | **${ayarlar.prefix}kes** Üyeyi Ses Kanalından Atar\n | **${ayarlar.prefix}çek** Üyeyi Ses Kanalından Çeker\n | **${ayarlar.prefix}k** Kız kayıt sistemi.\n  |  **${ayarlar.prefix}e** Erkek Kayıt sistemi.\n  | **${ayarlar.prefix}tagal**  Aramıza katılmanın en güzel yolunu gösterir.\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=725430670251393031&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/R9Hdm6p) **|** [Web Sitesi](https://topbots-tr.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL) 
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};
