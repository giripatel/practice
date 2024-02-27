import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//******* Create user *******/
export const createUser = async (userName : string, firstName : string, lastName :string, password :string, balance : number) => {
    
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

    console.log(createUser)
    return create;
}

interface UpdateUser {
    userName? : string,
    firstName? : string,
    lastName? :string,
    password? : string
}

//**********Update User ******/
export const updateUser = async (id : number , updateDetails : UpdateUser) => {

    const update = await prisma.user.update({
        where: {
            id : id
        },
        data: updateDetails
    })
    return update;
}

//********* Delete User *********/
export const delletUser = async () => {


}

//********** Get user *********/

export const getUser = async (id : number) => {

    const user = await prisma.user.findFirst({
        where : {
            id : id
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
    console.log(allUsers)
}


