
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'INSERT TOKEN HERE';

//Roll settings
var probability = 100; //Randomizer probability, for example 100 is 1 chance in 100 rolls.


// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  var user1 = message.author.id;
  var user2 = client.user.id;
  var isbot = message.author.bot;
  //Checks if the bot id and last message user id match, and if the last message sender was a bot or not
  console.log('user1: ' + user1 + ' and user2: ' + user2);
  console.log('Is the user a bot? ' + isbot);
  if ((user1 !== user2) && (isbot === false))
  {
    console.log('Message is not from a bot nor myself. Time to roll probability!');
    var text = message.content;
    var txttmp = text.split(/\s+/);
    var keyword = txttmp[Math.floor(Math.random()*txttmp.length)];
    var new_phrase = text.replace( keyword, "butt"); // replace for other word
    var random = Math.floor((Math.random() * probability));
    console.log('Throwing dice: ' + random + ". Probability: 1:" + probability);
    if (random === 1){
      message.channel.send(new_phrase);
      console.log('Phrase modified!');
    }
  }
  else
  {
    console.log("User either was a bot or myself. Doing nothing.");
  }
});

// Log our bot in
client.login(token);
