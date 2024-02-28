import { Router,Request,Response } from "express";
import { validateAuth } from "../middlewares/validateAuth";
import { getBalance, updateBalance } from "../db/db";
import {amountSchema} from '../zodvalidation/validation'

const accountRoute : Router = Router()

accountRoute.get('/balance',validateAuth,async (req : Request,res : Response) => {
    
    const email : string = res.locals.email;
    const balance = await getBalance(email);
    
    res.status(200).json({
        balance : balance
    })
})

accountRoute.patch('/transfer',validateAuth,async (req : Request, res : Response) => {

    

})


accountRoute.patch('/add',validateAuth, async (req : Request, res : Response) => {

    const amount : number = req.body.amount;
    const userName : string = res.locals.email
    const {success} = amountSchema.safeParse(amount);

    if(!success){
        res.status(400).json({
            message : "Please enter a valid amount"
        })
        return;
    }

    const {balance} = await updateBalance(userName,amount)

    res.status(200).json({
        balance,
        message : `Successfully added ${balance} in your account `
    })
})

export default  accountRoute;