const { Message, MessageEmbed } = require("discord.js");

const Discord = require("discord.js");

const moment = require("moment");
const fetch = require("node-fetch");

module.exports = {
  name: 'screenshot',
  aliases: ['ss'],

  async execute(client, message, args) {
    if (message.content.toLowerCase().includes("porn") || message.content.toLowerCase().includes("nsfw") || message.content.toLowerCase().includes("pornhub") ||message.content.toLowerCase().includes("bdsm")) return message.channel.send("Not allowed to search +18 sites!") 
    else {
    const user = message.author.tag
    const urls = args[0];
    if (!urls)
      return message.channel
        .send(`\`\`\`\n${user},Provide a link plz\n\`\`\``)
        
    if (urls.length < 8)
      return message
        .reply(
          "<> https is too short to reach - 8 limit"
        )
        .then(m => m.delete({ timeout: 9000 }).catch(e => {}));

    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const msg = await message.channel.send('**Please wait...** This may take up to 10 seconds.')
          msg.delete({ timeout: 5000 })
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );

      return message.channel.send(
        `\`\`\`\nHere is a screenshot from requested URL\n\`\`\``,
        {
          files: [{ attachment: body, name: "Screenshot.png" }]
        }
      );
  
    } catch (err) {
      if (err.status === 404)
        return message.channel
          .send("Could not find any results. Invalid URL?")
          .then(m => m.delete({ timeout: 14000 }).catch(e => {}));
      return message
        .reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`)
        
    };
    }
  }
}
