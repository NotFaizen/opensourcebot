const Discord = require('discord.js')

module.exports = {
    name : 'hello',
    description : 'Says hello to you',

    execute(client , message , args) {
        message.channel.send("Hello!!")
    }
}