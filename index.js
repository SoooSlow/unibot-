/* BASE */
const discord = require("discord.js");
const clientDiscord = new discord.Client();

/* VARIABLES */
var logs = false;
const prefix = "§";
const token = process.env.KEY;
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
    if (message.content === prefix + "help"){
        if(logs){
            
        }
        var helppage = new discord.RichEmbed()
            .setTitle("Aide")
            .setDescription("Voici la liste des commandes !")
            .setFooter(botname + " Private Edition || " + version)
            .addField("§help", "Affiche la page d'aide.", false)
            .addField("§addbot", "Ajouter le bot sur votre serveur. (Non disponible)", false)
            .addField("§logs on/off", "Activer ou désactiver les logs.", false)
            .addField("§logsid", "Changer l'id du channel des logs.", false)
            .setColor("0x000000");
        message.channel.sendEmbed(helppage);
    }
    if (message.content === prefix + "addbot"){
        message.reply("Cette commande n'est pas encore disponible !");
    }
    if(message.content === prefix + "logs"){
        if (args.length === 1){
            if (args[1] === "on")
            message.reply("ON")
            else(message.reply("OFF"));
        }
    }
});
