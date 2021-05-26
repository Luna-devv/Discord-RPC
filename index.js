var rpc = require("discord-rpc")                            //import discord-rpc
const client = new rpc.Client({ transport: 'ipc' })         //define "client"
const fetch = require("node-fetch")                         //define "fetch" (if u need)

const updatePresence = async () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "Edit this thing",                      //description
            state: "Edit this thing 2",                       //state
            assets : {
                large_image : "big",                          //large Picture
                large_text : "\"L\"-Logo",                    //large Picture text (if u hover over it)

                small_image : "small",                        //small Picture
                small_text: "\"Someones\"-logo",              //small Picture text (if u hover over it)
            },
            buttons : [
                {label : "rpc's Discord server",url : "https://server.steals-code.tk/someones"},         //First Button
                {label : "rpc's Website" , url : "https://noice.link/bio"}                               //Second Button
            ]
        }
    })
}


client.on('ready', () => {
    console.log(" __________________________________________________________________________ ");
    console.log("|                                                                          |");
    console.log("|                 The Discord Rich-Presence is now online                  |");
    console.log("|                                                                          |");
    console.log("|                             <From: Luna-devv>                            |");
    console.log("|__________________________________________________________________________|");     //Log output
})
setInterval(updatePresence, 15000)                                          //Update every 15 seconds

client.login({ clientId : "835069063360151552" }).catch(console.error);     //ClientID
