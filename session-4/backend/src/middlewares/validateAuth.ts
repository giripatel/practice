import jwt from 'jsonwebtoken';
import {JWT_SCRET} from '../secrets'
import { NextFunction } from 'express';
import {Request,Response} from 'express'
import { string } from 'zod';
 
interface myRequest extends Request {
    email: string
  }

export const validateAuth = (req : Request,res : Response, next : NextFunction) => {

    const token = (req.headers as {authorization? : string}).authorization;

    try{
        if(token){
            const hasAccount = jwt.verify(token,JWT_SCRET);
            if(hasAccount){
                res.locals.email = hasAccount;
                next();

            }
        }else {
        res.status(401).json({
            message : "Please login"
        })
    }
    }catch(error){
        res.status(401).json({
            message : "Please login"
        })
    }
}


