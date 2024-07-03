"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
class PubSubManager {
    constructor() {
        this.stocks = [];
        this.client = (0, redis_1.createClient)({ url: "redis://redis:6479@localhost:6479" });
        this.client.connect();
    }
    static getIntance() {
        if (PubSubManager.instance) {
            return PubSubManager.instance;
        }
        return this.instance = new PubSubManager();
    }
    addUserToStock(stock, user) {
    }
    removeUserFromStock(stock) {
    }
    forwordMessage(user, stock, stockPrice) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(yield this.client.get('APPLE'));
        });
    }
}
//  PubSubManager.instance.forwordMessage("hello", "hello", 0)
function interval() {
    const interval = setInterval(() => {
        const price = Math.floor(Math.random() + 1);
        PubSubManager.getIntance().client.set("apple", price);
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
    }, 20000);
    setInterval(() => {
        console.log(PubSubManager.getIntance().client.get("apple"));
    }, 200);
}
interval();
