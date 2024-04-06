

import { log } from "console";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { NextRequest, NextResponse } from "next/server";


const NEXTAUTH_CONFIG = {
    providers : [
        CredentialsProvider({
            name : 'Credentials',
            credentials : {
                username : {label: "Email", type: "text", placeholder: "Email"},
                password : {label: "Password", type: "text", placeholder: "Password"}

            },
            async authorize(credentials:any) {
                return {
                    id: "user1",
                    name: "asd",
                    userId: "asd",
                    email: "ramdomEmail"
                }
            }
        })
      
    ],
    secret: process.env.NEXTAUTH_SECRET
}

export default NEXTAUTH_CONFIG