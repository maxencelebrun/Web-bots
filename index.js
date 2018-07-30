const Discord = require(discord.js);

var bot = new Discord.Client();

bot.on ("ready") , function() {
    bot.user setgame ("WebBots,!help");
    console.log ("Le bot a bien ete connecte") ;
});

bot.login("NDczMzk1MDg0ODQ3NjExOTE0.DkBWPA.wNlMkz7twOyAW2FjE2mzcPDxK6Q");
