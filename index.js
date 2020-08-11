const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, Collection } = require("discord.js");
const fs = require('fs');
const path = require('path');


bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

//Just Change The Token Variable
const token = '';

//Check if the bot is online/ready.
bot.on('ready', () => {
    console.log("Bot Is Ready");
    bot.user.setActivity("status", {type: "PLAYING"})
})

bot.on('message', async message=> {
    //You Can Put Your Own Command Prefix
    const prefix = '!';
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (command) 
        command.run(bot, message, args);
})

//Login To The Bot Control Panel
bot.login(token);
