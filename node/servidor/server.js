const express = require('express');
const { createServer } = require('http');
const path = require('path');
const { emit } = require('process');
const app = express()
const port = 3000
const {Server} = require('socket.io');
const serv = createServer(app); 
const io = new Server(serv);
var userConnected = 0;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

io.on('connection', (socket) => {
    userConnected++;
    console.log('Hay ' + userConnected + ' usuarios conectados');
  socket.on('disconnect', () => {
    userConnected--;
    io.emit("desconexion", socket.nombre);
    console.log('Hay ' + userConnected + ' usuarios conectados');
  });
  socket.on("mensaje", (datos)=> {
    io.emit("texto",datos);
    console.log("recibo mensaje con datos = "+datos.mensaje);
  });
  socket.on("img",(img)=> {
    io.emit("img",img);
  })


  socket.on("nombre", (nombre)=> {
    socket.nombre = nombre;
    io.emit("nuevaConexion",nombre);
  })
});




app.use(express.static(path.join(__dirname, '/public')))

serv.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})