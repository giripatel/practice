import NEXTAUTH_CONFIG from "@/lib/auth";
import { log } from "console";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { NextRequest, NextResponse } from "next/server";



const handler = NextAuth(NEXTAUTH_CONFIG);
//     providers : [
//         CredentialsProvider({
//             name : 'Credentials',
//             credentials : {
//                 username : {label: "Email", type: "text", placeholder: "Email"},
//                 password : {label: "Password", type: "text", placeholder: "Password"}

//             },
//             async authorize(credentials:any) {
//                 return {
//                     id : "user1"
//                 }
//             }
//         })
      
//     ],
//     secret: process.env.NEXTAUTH_SECRET
// })

export {handler as GET , handler as POST}

// export function GET(req : NextRequest, {params} : any){
//     console.log(params);
    
//     return NextResponse.json({
//         message : "Handler"
//     })
// }