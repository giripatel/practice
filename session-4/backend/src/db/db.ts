import { Prisma, PrismaClient, } from "@prisma/client";
import {PrismaClientKnownRequestError} from'@prisma/client/runtime/binary'
const prisma = new PrismaClient();

//******* Create user *******/
export const createUser = async (userName : string, firstName : string, lastName :string, password :string, balance : number) => {
    
    try{
    const create = await prisma.user.create({
        data : {
            userName : userName,
            password : password,
            firstName : firstName, 
            lastName : lastName,
            account : {
                create : {
                    balance : 8000
                }
            }
        },
        include : {
            account : true
        }
    })
    return create;
    }catch(err)
    {
        if(err instanceof PrismaClientKnownRequestError){
            
            return null;

        }
    }
    
}

//**********Update User ******/
interface UpdateUser {
    userName? : string,
    firstName? : string,
    lastName? :string,
    password? : string
}

export const updateUser = async (userName : string , updateDetails : UpdateUser) => {

    const update = await prisma.user.update({
        where: {
            userName : userName
        },
        data: updateDetails
    })
    return update;
}

//********* Delete User *********/
export const delletUser = async () => {


}

//********** Get user *********/

export const getUser = async (userName : string) => {

    const user = await prisma.user.findFirst({
        where : {
            userName : userName
        },
        select : {
            userName : true,
            firstName : true,
            lastName : true
        }
    })
    return user;
}


//****** Get all users ******/
export const getAllUsers = async () => {
    
    const allUsers = await prisma.user.findMany({})
    return allUsers;
}


export const getBalance = async (userName : string) => {

    const getBalance = await prisma.user.findFirst({
        where : {
            userName : userName,
        },select : {
            account : {select : { balance : true}}
        }
    })
    if(getBalance){
    return getBalance;
    }
}

export const updateBalance = async (userName : string,amount : number) => {

    const updataBalance = await prisma.account.update({
        where : {
            userName : userName
        },
        data : {
            balance : {increment : amount}
        },select : {
            balance : true
        }
    })

    return updataBalance;
}


//*******************************************
//   Need to add exception handling 
//******************************************
export const deductBalance = async (userName : string , amount : number) => {
    
    const deductBalance = await prisma.account.update({
        where : {
            userName : userName
        },
        data : {
            balance : {decrement : amount}
        },select : {

        }
    })

    return deductBalance;
}