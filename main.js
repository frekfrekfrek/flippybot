'use strict'; // enables ES6 syntax (what is es6)

const Discord = require("discord.js");
const bot = new Discord.Client();

const newUsers = []

var responseObject = { //clears up code for non prefixed triggers
  "ayy": "your fuccin banne", //dont fucking ayy in my server
}; //will add more

bot.on("message", msg => {
    let prefix = ","; //the prefix im using

    if(responseObject[message.content]) { //part 2 of non prefixed triggers
    message.channel.sendMessage(responseObject[message.content]); //lol this doesnt work but that's a problem for future me
    }

    if(!msg.content.startsWith(prefix)) return; //suppresses checking non prefixed messages
    if(msg.author.bot) return;                  //suppresses bot loops

    if (msg.content.startsWith(prefix + "ping")) { //this is the basic ping command, yo.
        msg.channel.sendMessage("Wiggity wiggity pong !");
    }

    if (msg.content.startsWith(prefix + "info")) { //info, obviously.
          msg.channel.sendMessage("Flip a dip dip !");
          msg.channel.sendMessage("I'm Flippy Dresh, a bot written by frek#1533 using discord.js !");
          msg.channel.sendMessage("I am currently in very early development, but be sure to check back for more commands with the ,commands command !");
          msg.channel.sendMessage("I promise they'll be as cool as a cucumber !") //everything is in different messages bc idk how to skip lines, cri
    }
    if (msg.content.startsWith(prefix + "commands")) { //more commands to be added.
          msg.channel.sendMessage("Here's a list of my commands just for you, my bro !");
          msg.channel.sendMessage("My prefix is ',' !");
          msg.channel.sendMessage("ping : pong !");
          msg.channel.sendMessage("info : about me !");
          msg.channel.sendMessage("commands : the list of commands you're looking at !"); //every sentence finishing with a '!' gets kinda annoying tbh
    }

});

bot.on('ready', () => {
    console.log(`Ready to work in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`); //tells me when everything is ok
});

bot.on("guildMemberAdd", (guild, member) => {
  if(!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.user.id, member.user);

  if(newUsers[guild.id].size > 10) {
    var userlist = newUsers[guild.id].map(u => u.mention()).join(" ");
    guild.channels.get(guild.id).sendMessage("Welcome our new users!\n"+userlist);
    newUsers[guild.id] = new Discord.Collection();
  }

bot.on("guildMemberRemove", (guild, member) => {
  if(newUsers[guild.id].exists("id", member.user.id)) newUsers.delete(member.user.id);
});

});

bot.on('error', e => { console.error(e); });

bot.login("MjE0NDQ0NjQ2NDQ3NzEwMjA5.CpMdUA.woCvxzHWKI5UzArISgrWJ4P8xZo"); //original login donut steel !!!!1!!1111!!!1!1!1!!1!
