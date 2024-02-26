const net = require('net');
const server = net.createServer()

server.on("connection",(socket)=>{
    socket.on("data", (data)=>{ 
        console.log("\nMensaje reicibido: " +data)
        socket.write("recibido")
    })

    socket.on("close",()=>{
        console.log(err.message)
    })
    socket.on("error", (err)=>{
        console.log(err.message)
    })
})


server.listen(3000, ()=>{
    console.log('servidor encendido', server.address().port)
})