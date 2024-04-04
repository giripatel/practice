"use server"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const userSginUp = async (email : string, password : string) => {

    const user = prisma.user.create({
        data : {
            email : email,
            passowrd : password
        }
    })

    return "User Signed Up"

}