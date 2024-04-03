import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

// get method in next
export function GET(req : NextRequest) {

    return NextResponse.json({
        hello : "hello"
    })
}

// Post method in next
export async function POST(req : NextRequest) {

    const body = await req.json()
    console.log(body)

    const header = req.headers.get("authorization");
    console.log(header)

    const qparams = req.nextUrl.searchParams.get("name")
    console.log(qparams)

    return NextResponse.json({
        body : body,
        header : header,
        queryParams : qparams
    })
}