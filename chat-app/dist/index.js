"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let users = new Map();
let userid = 0;
wss.on("connection", (ws) => {
    userid++;
    users.set(userid, ws);
    ws.send(`Welcome to facebook user ${userid}`);
    ws.on('message', (message) => {
        const data = JSON.parse(message.toString());
        if (users.get(data.id) != ws) {
            ws.send(`Unauthoerized users`);
            return;
        }
        sendMessage(data.id, ws, data.message);
    });
});
const sendMessage = (userid, socket, message) => {
    users.get(userid);
    console.log("This is triggering");
};
// users.filter(user => user.id != userid).map(user => {
//   user.socket.send(`${message}`);
// })
