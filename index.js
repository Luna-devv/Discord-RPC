var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })


client.on('ready', () => {
    console.log(" __________________________________________________________________ ");
    console.log("|                                                                  |");
    console.log("|                                                                  |");
    console.log("|             The Discord Rich-Presence is now online              |");
    console.log("|                                                                  |");
    console.log("|                                                                  |");
    console.log("|                     <From: Morris & DreiMu>                      |");
    console.log("|__________________________________________________________________|");     //Log output


    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
             details : "from Microsoft",            //description
        assets : {
            large_image : "big",                    //large Picture
            small_image : "small",                  //small Picture
            large_text : "Discord is in Danger!",   //large Picture text (if u hover over it)
            small_text : "Logo"                     //small Picture text (if u hover over it)
        },
        buttons : [{label : "SaveDiscord - Website", url : "http://bit.ly/SaveDiscord_Web"}, //First Button
                   {label : "SaveDiscord - Discord",url : "http://bit.ly/SaveDiscord_Dc"}]  //Second Button
    }
    })
})
client.login({ clientId : "825853950833328201" }).catch(console.error); //ClientID
