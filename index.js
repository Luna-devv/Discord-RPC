var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })


client.on('ready', () => {
    console.log(" _____________________________________________ ");
    console.log("|                                             |");
    console.log("|           Das DRP ist nun online!           |");
    console.log("|                                             |");
    console.log("|_____________________________________________|");


    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
        details : "from Microsoft",
        assets : {
            large_image : "big",
            small_image : "small",
            large_text : "Discord is in Danger!",
            small_text : "Logo"
        },
        buttons : [{label : "SaveDiscord - Website", url : "http://bit.ly/SaveDiscord_Web"},{label : "SaveDiscord - Disord",url : "http://bit.ly/SaveDiscord_Dc"}]
    }
    })
})
client.login({ clientId : "825853950833328201" }).catch(console.error);
