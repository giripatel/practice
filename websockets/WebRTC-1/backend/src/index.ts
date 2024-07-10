import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8000});

let senderSocket: WebSocket | null = null;
let receiverSocket: WebSocket | null = null;
wss.on("connection",(ws) => {

    ws.on("message",(data) =>{
        const message = JSON.parse(data.toString());
        if(message.type === "sender"){
            console.log("created sender");
            
            senderSocket = ws;
        }else if (message.type === "receiver") {
            console.log("created receiver");
            receiverSocket = ws;
        }else if (message.type === "createOffer"){
            if (ws !== senderSocket) {
                return;
            }
            console.log("created offer");
            console.log(message);
            
            receiverSocket?.send(JSON.stringify({type: "createOffer", sdp : message.sdp}));
        }else if (message.type === "createAnswer") {
            if (ws !== receiverSocket){
                return;
            }
            console.log("created answer");
            senderSocket?.send(JSON.stringify({type: "createAnswer", sdp: message.sdp}));
        }else if (message.type === "iceCandidate"){
            if(senderSocket == ws) {
                receiverSocket?.send(JSON.stringify({type: "iceCandidate",iceCandidate:message.iceCandidate}));
            }else if (ws === receiverSocket) {
                senderSocket?.send(JSON.stringify({type: "iceCandidate",iceCandidate:message.iceCandidate}));
            }
        }
    })

    ws.on('close', ()=> console.log("Client disconnected!"))
})
