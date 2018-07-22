/* BASE */
const discord = require("discord.js");
const clientDiscord = new discord.Client();

/* VARIABLES */
var logs;
const prefix = "?";
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
    const command = args[0];
    if (command === "help"){
        var helppage = new discord.RichEmbed()
            .setTitle("Aide")
            .setDescription("Voici la liste des commandes !")
            .setFooter(botname + " Private Edition || " + version)
            .addField(prefix + "help", "Affiche la page d'aide.", false)
            .addField(prefix + "addbot", "Ajouter le bot sur votre serveur. (Non disponible)", false)
            .addField(prefix + "logs on/off/status", "Activer ou désactiver les logs. (Permissions => ADMINISTRATOR)", false)
            .addField(prefix + "logsid", "Changer l'id du channel des logs. (Permissions => ADMINISTRATOR)", false)
            .addField(prefix + "prefix", "Changer le prefix du bot. (Permissions => ADMINISTRATOR)", false)
            .setColor("0x000000");
        message.channel.sendEmbed(helppage);
    }
    if (command === "addbot"){
        message.reply("Commande indisponible pour le moment !")
    }
    if(message.member.hasPermission("ADMINISTRATOR")){
        if (command === "logs"){
            if (args.length === 2){
                if (args[1] === "on") logs = true & message.channel.sendMessage("Les logs Unilogs sont désormais activés !");
                if(args[1] === "off") logs = false & message.channel.sendMessage("Les logs Unilogs sont désormais désactivés !");
                if(args[1] === "status"){
                    if(logs === true){ 
                        message.channel.sendMessage("Les logs Unilogs sont activés.");
                    }
                    else message.channel.sendMessage("Les logs Unilogs sont désactivés.");
                }
            }
            else message.reply("Dépassement des arguments !");
        }
        if(command === "logsid"){
            if (args.length === 2){
                logchannelid = args[1]
                message.channel.sendMessage("Les logs se feront désormais dans le channel <#" + logchannelid + "> !");
            }
            else message.reply("Dépassement des arguments !");
        }
        if (command === "prefix"){
            if (args.length === 2){
                prefix = args[1];
                message.channel.sendMessage("Le prefix de " + botname + " est désormais " + args[1] + " !");
                clientDiscord.user.setGame(prefix + "help || " + clientDiscord.guilds.size + " serveurs");
            }
            else message.reply("Dépassement des arguments !");
        }
    }
});
