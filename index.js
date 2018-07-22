/* BASE */
const discord = require("discord.js");
const clientDiscord = new discord.Client();

/* VARIABLES */
const prefix = "§";
const token = process.env.KEY;
const botname = "UniBot";
const version = "0.1.0";
const logchannelid = "464151393297498129";

/* CONNEXION */
clientDiscord.login(token);

/* FONCTIONS */
clientDiscord.on("ready", () => {
    console.log(botname + " est prêt à travailler !");
});

clientDiscord.on("message", () => {
    
});
