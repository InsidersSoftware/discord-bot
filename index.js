const Discord = require('discord.js');
const bot = new Discord.Client();

//Just Change The Token Variable
const token = '';

//Check if the bot is online/ready.
bot.on('ready', () => {
    console.log("Insider Is Ready");
})

bot.on('message', msg=> {
    if(msg.content === "Hello") {
        msg.reply('Hello I Am InsiderBot.My Creator Is InsiderJanggo');
    }
})

//Login To The Bot Control Panel
bot.login(token);