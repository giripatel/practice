"use strict";
// import { WebSocketServer } from "ws"
Object.defineProperty(exports, "__esModule", { value: true });
// const wss = new WebSocketServer({ port : 8000 })
// wss.on("connection", (ws) => {
// })
// import { PubSubManager } from "./PubSubManager";
const code_1 = require("./code");
setInterval(() => {
    code_1.PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);
