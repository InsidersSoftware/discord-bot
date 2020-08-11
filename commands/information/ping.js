module.exports = {
    name: "ping",
    description: "Just For Testing",
    usage: "[none}",
    category: "information",
    run: async(bot,message,args) => {
        message.reply("PONG");
    }
}