import { Router,Request,Response } from "express";
import { validateAuth } from "../middlewares/validateAuth";
import { getBalance } from "../db/db";

const accountRoute : Router = Router()

accountRoute.get('/balance',validateAuth,async (req : Request,res : Response) => {
    
    const email : string = res.locals.email;
    const balance = await getBalance(email);
    
    res.status(200).json({
        balance : balance
    })
})

export default  accountRoute;