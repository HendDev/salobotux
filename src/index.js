const { Client, MessageEmbed } = require('discord.js');
const config = require('../config.json');

const client = new Client();
client.on('ready', () => { 
    console.log('El bot se ha iniciado correctamente');  
});

client.on('message', msg => {
    if (msg.content === `${config.prefix}ping`) {
        const ping = Date.now() - msg.createdTimestamp;

        const embed = new MessageEmbed()
        .setTitle(`Pong | ${ping}ms`)
        .setColor(0x4D6E8F)
        msg.channel.send(embed).then(msg => msg.react('🏓'));
    }
    if (msg.channel.id === "852954070674964520" || msg.channel.id === "852232582217072680") {
        msg.react('✅').then(() => { 
          msg.react('❌')
        });
      }
    if (msg.content === `${config.prefix}yt` || msg.content === `${config.prefix}youtube`) {
      const embed = new MessageEmbed()
      .setTitle('Youtube de Salomon')
      .setColor(0x4D6E8F)
      .setURL('https://www.youtube.com/c/SalomonSanchez?sub_confirmation=1')
      msg.channel.send(embed)
    }
});

client.login(config.BOT_TOKEN);