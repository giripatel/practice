import redis, { RedisClientType, createClient } from "redis";

import { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port : 8000 })

class PubSubManager {

    stocks = []
    static instance : PubSubManager;
    public client : RedisClientType;
    private constructor(){
        wss.on("connection", (ws) => {
    
        })
        this.client =  createClient({url : "redis://redis:6479@localhost:6479"});
        this.client.connect()
    }   

    static getIntance() {
        
        if(PubSubManager.instance) {
            return PubSubManager.instance
        }

        return this.instance = new PubSubManager();
    }

    addUserToStock(stock : any,user : any){

        
    }

    removeUserFromStock(stock : any){

    }

    async forwordMessage(user : any, stock : any, stockPrice : any){
        

        console.log(await this.client.get('APPLE'));
    }
    
 }

//  PubSubManager.instance.forwordMessage("hello", "hello", 0)

function interval (){
    const interval = setInterval(() => {

        const price = Math.floor(Math.random() + 1)
        PubSubManager.getIntance().client.set("apple",price);
    }, 100)
    setTimeout(()=> {
        clearInterval(interval)
    },20000)
    setInterval(() => {
        console.log(PubSubManager.getIntance().client.get("apple"));
        
    }, 200)
}
interval()