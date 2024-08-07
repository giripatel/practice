"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const GameManager_1 = require("./GameManager");
const wss = new ws_1.WebSocketServer({ port: 8000 });
const game = new GameManager_1.GameManager();
wss.on('connection', (ws) => {
    game.addUser(ws);
    ws.on('close', (data) => {
        game.removeUser(ws);
    });
    ws.send("hello this is connected");
});
