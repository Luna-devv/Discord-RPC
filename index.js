var rpc = require("discord-rpc")                            //import discord-rpc
const client = new rpc.Client({ transport: 'ipc' })         //define "client"

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


client.on('ready', () => {
    console.log("ready");     //Log output
})

client.login({ clientId : "835069063360151552" }).catch(console.error);     //ClientID
