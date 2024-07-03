// import { WebSocketServer } from "ws"

// const wss = new WebSocketServer({ port : 8000 })

// wss.on("connection", (ws) => {
    
// })

// import { PubSubManager } from "./PubSubManager";

import { PubSubManager } from './code'
setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000)
