const discord = require("discord.js-selfbot");
const fs = require("fs");
const tokens = fs.readFileSync("./tokens.txt").toString().split("\r\n");
bots = [937077309175889930];
prefix = "h!";
owner = "919029931730677761";
var comd = "";
var delay = 1000;
var param = "";
var blacklist = ["938153101762899989"];
var spammers = {
}
var global={
}
tokens.forEach(token=>{

var bot = new discord.Client();
bot.login(token.toString());
bot.on("ready",()=>{
console.log(token.toString() + " is ready");
global[bot.user.id]=false;
bots.push(bot);
bot.user.setActivity("with hitler");

bot.on("message", msg=>{
if(msg.content.startsWith(prefix) && (msg.author.id == owner || global[bot.user.id] == true) && blacklist.includes(msg.author.id)==false){
if(msg.content.includes(" ")){
comd = msg.content.substring(prefix.length, msg.content.indexOf(" "));
param = msg.content.substring(msg.content.indexOf(" ")+1,msg.content.length);
} else{
comd = msg.content.substring(prefix.length, msg.content.length);
param = null;
}
if(comd=="help"){
msg.channel.send("```\nHydrazine\nA bot by fune\n\ncommands: h!help, h!spam [message], h!stop, h!setdelay [milliseconds], h!publictoggle\n\nIf youre a retard, heres what these do:\nh!help gives you this list\nh!spam spams something\nh!stop stops the spam\nh!setdelay sets a spam delay\nh!publictoggle either enables or disables the ability to be used by anyone```");
} else if(comd == "spam"){

tospam = param;
if(tospam!==null){
if(spammers[bot.user.id] !== null){
clearInterval(spammers[bot.user.id]);

spammers[937077309175889930] = null;
}
spammers[937077309175889930] = setInterval(()=>{
msg.channel.send(tospam);
},delay);
}
} else if(comd == "stop"){
try{
bots.forEach(bot=>{
clearInterval(spammers[937077309175889930]);
spammers[937077309175889930] = null;
});
} catch(exc){
}
} else if(comd == "setdelay"){
if(parseInt(param)!=="NaN"){
delay = parseInt(param);
msg.channel.send("delay set to "+param);
}
} else if(comd == "publictoggle"){
if(msg.author.id == owner){
if(global[937077309175889930] == true){
global[937077309175889930] = false;
msg.channel.send("Only the owner can use this");
} else{
global[937077309175889930] = true;
msg.channel.send("Anyone can use this");
}
} else{
msg.channel.send("Youre not the owner");
}
}

}
})

});
});
