/* BASE */
const discord = require("discord.js");
const clientDiscord = new discord.Client();
const cfg = require("./config.json");

/* VARIABLES */
var logs;
const prefix = "§";
const token = cfg.token;
const botname = "UniBot";
const version = "0.1.0";
var logchannelid = "464151393297498129";

/* CONNEXION */
clientDiscord.login(token);

/* FONCTIONS */
clientDiscord.on("ready", () => {
    console.log(botname + " est prêt à travailler !");
    clientDiscord.user.setGame(prefix + "help || " + clientDiscord.guilds.size + " serveurs");
});

clientDiscord.on("message", message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.substring(prefix.length).split(" ");
    const command = args[0];
    if (command === "help"){
        var helppage = new discord.RichEmbed()
            .setTitle("Aide")
            .setDescription("Voici la liste des commandes !")
            .setFooter(botname + " Private Edition || " + version)
            .addField(prefix + "help", "Affiche la page d'aide.", false)
            .addField(prefix + "addbot", "Ajouter le bot sur votre serveur. (Non disponible)", false)
            .setColor("0x000000");
        message.channel.sendEmbed(helppage);
    }
    if (command === "addbot"){
        message.reply("Commande indisponible pour le moment !")
    }
});
