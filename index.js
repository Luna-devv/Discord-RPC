var rpc = require("discord-rpc")                            //import discord-rpc
const client = new rpc.Client({ transport: 'ipc' })         //define "client"
const fetch = require("node-fetch")                         //define "fetch"



let users = "A lot"                                         //define "users" (Placeholder)

const updatePresence = async () => {

    fetch("https://savediscord.com/api/usercount", { method: "GET" })       //Get Users
    .then(res => res.text())
    .then(body => users = body);

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "from Microsoft",                     //description
            state: users+" Users registred",                //How much Users
            assets : {
                large_image : "big",                        //large Picture
                small_image : "small",                      //small Picture
                large_text : "Discord is in Danger!",       //large Picture text (if u hover over it)
                small_text : "SaveDiscord.com"              //small Picture text (if u hover over it)
            },
            buttons : [
                {label : "SaveDiscord - Website" , url : "https://savediscord.com"},        //First Button
                {label : "SaveDiscord - Discord",url : "https://discord.gg/FRA3JQ6MHy"}     //Second Button
            ]
        }
    })
}


client.on('ready', () => {
    console.log(" __________________________________________________________________ ");
    console.log("|                                                                  |");
    console.log("|                                                                  |");
    console.log("|             The Discord Rich-Presence is now online              |");
    console.log("|                                                                  |");
    console.log("|                                                                  |");
    console.log("|                     <From: Morris & LPTP1>                       |");
    console.log("|__________________________________________________________________|");     //Log output

    setInterval(updatePresence, 5000)                                       //Update every 5 seconds
    
})
client.login({ clientId : "825853950833328201" }).catch(console.error);     //ClientID
