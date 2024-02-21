import { NextResponse } from "next/server";


export async function GET(reqest:Request) {
    return NextResponse.json({
        method: 'GET',
        count: 500
    })    
}

export async function POST(reqest:Request) {
    return NextResponse.json({
        method: 'POST',
        count: 500
    })    
}