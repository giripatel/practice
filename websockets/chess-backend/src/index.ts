import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({port : 3000})

wss.on('connection', (ws : any) => {
    ws.on('err',console.error)

    ws.on('message', (data : any) => {
        console.log("received: %s", data)
    })
    ws.send("hello this is connected")
})