import jwt from 'jsonwebtoken' 
import { string } from 'zod'
import {JWT_SCRET} from '../secrets'

export const createAuthToken =  (mail : string)  => {
    
    const token =  jwt.sign(mail, JWT_SCRET);
    return token;

}