app.listen(3000, () => {
    console.log('Bot Is Online!');
});

const Discord = require("discord.js");
const client = new Discord.Client();
  
  
require("./ExtendedMessage");
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
  
['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})
  
client.login(token);//aaaaaaaaaaaaaaaaaa e e  g