import { WebSocket, WebSocketServer } from 'ws'



const wss = new WebSocketServer({ port: 8000 })

wss.on('connection', (ws) => {

  setTimeout(boradcast2, 5000);

  ws.on('error', (error) => {
    console.log(error);

  })
  ws.on('open', () => {
    console.log("This is open");
  })
  ws.on('message', (data) => {
    console.log("data: %s", data);
    boradcast(data, ws)
  })
  ws.send("You are connected to test server");

})

const boradcast = (data: any, socket: WebSocket) => {
  wss.clients.forEach(client => {
    if (client !== socket && client.readyState == WebSocket.OPEN) {
      client.send(data.toString());
      // console.log(JSON.stringify(data), data);

    }
  })
}


const boradcast2 = () => {
  wss.clients.forEach(client => {
    if (client.readyState == WebSocket.OPEN) {
      client.send("Your connection will be close in 2 minutes");
      // console.log(JSON.stringify(data), data);

    }
  })
}


