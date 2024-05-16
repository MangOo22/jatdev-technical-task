const fastify = require('fastify')();
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer(fastify);
const wss = new WebSocket.Server({ server });

wss.on('error', console.error);


wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => {
    console.log('Received message from client:', message.toString());

    // Send response back to the client
    ws.send('Response from server: ' + message);
  });
});

function startSocketServer() {
  server.listen({port:process.env.WS_PORT}, (err,address)=>{
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Socket Server listening on port ${process.env.WS_PORT} `);
  })
}


module.exports = {
  startSocketServer
}