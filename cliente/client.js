const net =  require('net');
const readline = require ("readline-sync")
const options = {
    port: 3000,
    host: '127.0.0.1'
}

const client = net.createConnection(options)

client.on("connect", ()=>{
    console.log("conexion buena")
    sendLine()
})

client.on("data", (data)=>{
    console.log("el servidor menciona: "+data)
    sendLine()
})

client.on("error",(err)=>{
    console.log(err.message)
})

function sendLine(){ 
    var line = readline.question("\n escriba algo\t")
    if(line== "0"){
        client.end()
    }else{
        client.write(line)
    }
}
