import NEXTAUTH_CONFIG from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {
    
    // getServerSession is used to get the session in server side components
    const session = await getServerSession(NEXTAUTH_CONFIG)

    return NextResponse.json({
        data : session
    })

}