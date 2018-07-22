/* BASE */
const discord = require("discord.js");
const clientDiscord = new discord.Client();

/* VARIABLES */
var logs;
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
    const command = args[0];
    if (command === "help"){
        var helppage = new discord.RichEmbed()
            .setTitle("Aide")
            .setDescription("Voici la liste des commandes !")
            .setFooter(botname + " Private Edition || " + version)
            .addField(prefix + "help", "Affiche la page d'aide.", false)
            .addField(prefix + "addbot", "Ajouter le bot sur votre serveur. (Non disponible)", false)
            .addField(prefix + "ban <jours> <raison>", "Bannir un joueur. Permissions => BAN_MEMBERS", false)
            .addField(prefix + "kick <raison>", "Exclure un joueur. Permissions => KICK_MEMBERS", false)
            .setColor("0x000000");
        message.channel.sendEmbed(helppage);
    }
    if (command === "addbot"){
        message.reply("Commande indisponible pour le moment !")
    }
    if (command === "kick"){
        if (message.member.hasPermission("KICK_MEMBERS")){
            var player = message.mentions.users.first();
            var reason = args.join(" ").slice(26);
            if (!message.guild.member(player).hasPermission("KICK_MEMBERS")){
                var embedk = new discord.RichEmbed()
                    .setTitle("Exclusion")
                    .setDescription("Exclusion du joueur <@" + player.id + ">")
                    .setFooter(botname + " Private Edition || " + version)
                    .addField("Raison", reason, false)
                    .addField("Exclu par", "<@" + message.author.id + ">", false)
                    .setColor("0x000000");
                message.channel.sendEmbed(embedk);
                message.guild.member(player).kick(reason);
            }
            else message.reply("Cette personne ne peut pas être exclu !");
        }
        else message.reply("Vous n'avez pas les permissions nécessaires pour exclure.");
    }
    if (command === "ban"){
        if (message.member.hasPermission("BAN_MEMBERS")){
            var player = message.mentions.users.first();
            var days = args[2];
            var num = days.length;
            var slice = 26 + num;
            var reason = args.join(" ").slice(slice);
            if (!message.guild.member(player).hasPermission("BAN_MEMBERS")){
                var embedk = new discord.RichEmbed()
                    .setTitle("Bannissement")
                    .setDescription("Bannissement du joueur <@" + player.id + ">")
                    .setFooter(botname + " Private Edition || " + version)
                    .addField("Raison", reason, false)
                    .addField("Durée", args[2], false)
                    .addField("Banni par", "<@" + message.author.id + ">", false)
                    .setColor("0x000000");
                message.channel.sendEmbed(embedk);
                message.guild.member(player).ban(reason, days);
            }
            else message.reply("Cette personne ne peut pas être banni !");
        }
        else message.reply("Vous n'avez pas les permissions nécessaires pour bannir.");
    }
});
