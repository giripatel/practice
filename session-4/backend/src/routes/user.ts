import { Console, log } from 'console';
import {Router,Request,Response} from 'express'
import {mySchema, signInSchema} from '../zodvalidation/validation'
import { createUser, updateUser, getUser,getAllUsers } from '../db/db';
import { createAuthToken } from '../middlewares/createAuthToken';
import { validateAuth } from '../middlewares/validateAuth';


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

userRouter.post('/signin',async (req : Request, res : Response) => {

    const userName : string = req.body.userName
    const password : string = req.body.password

    const {success} = signInSchema.safeParse({
        userName : userName,
        password : password
    })

    if(!success){
        res.status(401).json({
            message : "Please enter valid email and password"
        })
        return;
    }

    const user = await getUser(userName);
    if(!user){
        res.status(403).json({
            message : "Please create an account"
        })
        return;
    }

    const authToken = createAuthToken(userName);

    res.status(200).json({
        message : "your sign is successfull",
        authToken : authToken
    })

})

userRouter.get('/bulk',validateAuth,async (req : Request,res : Response) => {

    const allUsers = await getAllUsers();

    res.status(200).json({
        users : allUsers
    })
})

export default  userRouter;

