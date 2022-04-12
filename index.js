var rpc = require("discord-rpc")
// Original modifié par Le FoxTo pour le rendre complet.
// Plus d'informations : https://peopleofhell.fr/tuto/rich
// En aucun cas affilié avec https://youtube.com/
var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,

activity : {
// 2ème ligne du RP (Minimum 2 caractères) : Nom de ta chaîne
details : "ImaDev",
// 3ème ligne du RP (Minimum 2 caractères) : Themes
state : "Clique sur un des boutons",

assets : {
// Grande image avec texte non cliquable (minuscule seulement)
// Logo YouTube (remplace pour le tient)
large_image : "l",
large_text : "imadev",
// Petite image avec texte non cliquable (minuscule seulement)
// Logo verifié (ou ton logo)
small_image : "p",
small_text : "Verifié"

// Bouton(s) du RP : Maximum 2 - Minimum 0
// (Vous ne pouvez pas cliquer sur vos propres boutons)
},
buttons : [
// Bouton n'1 | (Ajouter des // devant pour les désactiver : "// {label : [...]" )
// Lien vers ta chaîne YouTube
{label : "Ma Chaîne (soon)" , url : "https://www.youtube.com/"},
// Bouton n'2 | (Ajouter des // devant pour les désactiver : "// {label : [...]" )
// Ta dernière vidéo
{label : "Dernière Vidéo (soon)",url : "https://www.youtube.com/"}
]
}
})
})

// ClientID a récupérer sur : https://discord.com/developers/applications/ (Applications ID)
// Le nom de votre application correspondra a la premiere ligne du RP (En gras)
// Ajoute aussi tes images personnalisées via le 'Rich Presence Art Assets'.
client.login({ clientId : "963573122475388958" }).catch(console.error);

// -------------------------------
// Ma Chaîne YouTube : https://www.youtube.com/c/lefoxto
// Ma Chaine Twitch : https://www.twitch.tv/lefoxto
// Mon discord : FoxTo#5632
// Me contacter par mail : foxto@peopleofhell.fr
// Discord POH.Fr : https://peopleofhell.fr
// -------------------------------
