const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick Mentioned User',
    usage: '<mention|id> <Reason>',
    category: 'moderation',
    run: async(client,message,args) => {
        if (!message.mentions.users.size) {
            return message.reply('You need to tag a user in order to kick them!');
        }
        else {
            // grab the "first" mentioned user from the message
            // this will return a `User` object, just like `message.author`
            const taggedUser = message.mentions.users.first();

            if (!taggedUser) {
                message.channel.send('Can\'t find user!');
            }

            let reason = args.join(' ').slice(22);
            if(!reason) return message.channel.send("No reason specified");
            if (!message.member.hasPermission('MANAGE_MESSAGES')) {
                return message.channel.send('Sorry You Dont Have Permission To Kick');
            }
            /*if (taggedUser.hasPermission('MANAGE_MESSAGES')) {
                return message.channel.send('The person can\'t be kicked!');
            }*/

            let kickEmbed = new Discord.MessageEmbed()
                .setTitle('**Kick**')
                .setColor(0x15f153)
                .addField('Kicked User', `${taggedUser} with ID: ${taggedUser.id}`)
                .addField('Kicked By', `<@${message.author.id}> with ID: ${message.author.id}`)
                .addField('Kicked From', `${message.channel}`)
                .addField('Reason', `${reason}`)
                .setTimestamp(new Date())
                .setFooter('RIP');
            
            let kickChannel = message.guild.channels.cache.find(c => c.name === 'mod-log');

            if (!kickChannel) {
                return message.channel.send('Can\'t find incidents channel');
            }

            message.guild.member(taggedUser).kick(reason);
            kickChannel.send(kickEmbed);
        }
      message.delete();
    },   
};