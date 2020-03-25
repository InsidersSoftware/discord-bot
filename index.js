const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkyMzcxMzM1NDcyNjExMzk5.Xntjbw.NOny5IIsg90CmgwAWDiKbWVwu_E';

//Check if the bot is online/ready.
bot.on('ready', () => {
    console.log("Insider Is Ready");
})

bot.on('message', msg=> {
    if(msg.content === "Hello") {
        msg.reply('Hello I Am InsiderBot.My Creator Is InsiderJanggo');
    }
})

//Login To The Bot Control Panl
bot.login(token);