import { Console, log } from 'console';
import {Router,Request,Response} from 'express'
import {mySchema} from '../zodvalidation/validation'
import { createUser } from '../db/db';

const userRouter: Router = Router();

userRouter.post('/signup',async (req : Request,res :Response) => {
    
    const {userName , firstName , lastName, password} = req.body;
    // const userDetails : Request = req.body;

    const balance : number = Math.floor(Math.random() * 1000)+1
    console.log(req.body)
    const userInputValidation = mySchema.safeParse(req.body);


    if(!userInputValidation.success) {
        res.status(401).json({
            message : "Please enter your inputs correctly"
        })
        return;
    }
    console.log('======================================== : ' + balance);
    
    const userCreate = await createUser(userName,firstName,lastName,password,balance);

    // console.log(userCreate);
    
    console.log(userInputValidation)
    res.status(200).json({
        message : "worked",
    });
})

userRouter.post('/signin',(req : Request, res : Response) => {

})

export default  userRouter;

