const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("633330401397440537")
setInterval(function() {
channel.send(`yasser dz );
}, 30)
})

client.login(process.env.BOT_TOKEN);