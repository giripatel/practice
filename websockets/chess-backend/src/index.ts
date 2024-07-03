import { WebSocketServer } from 'ws'
import { GameManager } from './GameManager'

const wss = new WebSocketServer({port : 8000})
const game = new GameManager();

wss.on('connection', (ws : any) => {
    game.addUser(ws)
    ws.on('close', (data : any) => {
        game.removeUser(ws)
    })
    ws.send("hello this is connected")
})