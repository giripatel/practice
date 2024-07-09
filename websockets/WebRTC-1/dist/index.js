"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
// import 
const wss = new ws_1.WebSocketServer({ port: 3000 });
// const connection = new Map<number,WebSocket>();
let users = [];
let userId = 0;
wss.on("connection", (ws) => {
    console.log("Client connected");
    users.push({ "userId": userId, "socket": ws });
    ws.send("Hello you are connected... with userId :" + userId);
    userId++;
    ws.on("message", (message) => {
        const data = JSON.parse(message.toString());
        const senders = users.filter(user => data.userId !== user.userId);
        // console.log(sender);
        senders.forEach(client => {
            client.socket.send(`${data.message}`);
        });
        // ws.send(message);
    });
    ws.on('close', () => console.log("Client disconnected!"));
});
// const clients = (ws: any, message: any) => {
//     wss.clients.size.
// }
