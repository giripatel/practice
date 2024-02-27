import { Console, log } from 'console';
import {Router,Request,Response} from 'express'
import {mySchema} from '../zodvalidation/validation'
import { createUser } from '../db/db';
import { createAuthToken } from '../middlewares/createAuthToken';
const userRouter: Router = Router();

userRouter.post('/signup',async (req : Request,res :Response) => {
    
    const {userName , firstName , lastName, password} = req.body;

    const balance : number = Math.floor(Math.random() * 1000)+1
    console.log(req.body)
    const userInputValidation = mySchema.safeParse(req.body);

    if(!userInputValidation.success) {
        res.status(401).json({
            message : "Please enter your inputs correctly"
        })
        return;
    }
    
    const userCreate = await createUser(userName,firstName,lastName,password,balance);
    
    if(userCreate == null){
        res.status(400).json({
            message : "User with the username already exists"
        })
        return;
    }

    const authToken = createAuthToken(userName);

    console.log(userInputValidation)
    res.status(200).json({
        message : "User created successfully",
        authToken : authToken
    });
})

userRouter.post('/signin',(req : Request, res : Response) => {

})

export default  userRouter;

