
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'INSERT TOKEN HERE';

//Roll settings
var minroll = 1;
var maxroll = 100;

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

//Dicerolled is a check that stops the bot from spamming
var dicerolled = false;
client.on('message', message => {

  if (dicerolled === false)
  {
    //Saves message content, splits it per word
    var text = message.content;
    var txttmp = text.split(/\s+/)
    var keyword = txttmp[Math.floor(Math.random()*txttmp.length)];
    var new_phrase = text.replace( keyword, "YOUR RANDOM WORD HERE (I prefer the word butt)"); // replace for other word
    var random = Math.floor((Math.random() * maxroll) + minroll); //Random number between 1 and 100
    console.log('Throwing dice: ' + random);
    {
      message.channel.send(new_phrase);
      console.log("set diceroll true");
      dicerolled = true;
    }
  }

  else
  {
    console.log("set diceroll false");
    dicerolled = false;
  }

});

// Log our bot in
client.login(token);
