import express, {Request,Response} from 'express'
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const app = express();
const prisma = new PrismaClient();

app.use(express.json())
app.use(cors())

app.get('/',(req : Request, res : Response) => {
    console.log('site is working fine');
    res.json({
        message : "woring fine"
    })
})  
app.post('/signin',(req : Request,res : Response) => {

    const body = req.body;
    console.log(body);
    
    const user = prisma.user.findUnique({
        where : {
            email : body.email,
            password : body.password
        }
    })

    res.json({
        message : true
    })

})

app.listen(3000,()=> {
    console.log("started on port 30000");
    
})