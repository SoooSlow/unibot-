/* BASE */
const discord = require("discord.js");
const clientDiscord = new discord.Client();

/* VARIABLES */
const prefix = "'";
const token = "";
const botname = "Cloud5 Mini";
const version = "0.1.0";
const logchannelid = "464151393297498129";

/* CONNEXION */
clientDiscord.login(process.env.KEY);

/* FONCTIONS */
clientDiscord.on("ready", () => {
    console.log(botname + " est prêt à travailler !");
});

clientDiscord.on("message", () => {
    
});
