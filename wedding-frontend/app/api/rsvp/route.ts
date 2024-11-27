import prisma from "@/lib/instantiate-prisma-client";
import { NextRequest, NextResponse } from "next/server";

const headers = {
    'Content-Type': 'application/json',
};

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const rsvp = await prisma.rsvp.create({
            data,
        });
        return new NextResponse(JSON.stringify(rsvp), { headers });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred.' }, { status: 500 });
        }
    }
}

export async function GET(req: NextRequest) {
    try {
        const rsvp = await prisma.rsvp.findMany();
        return new NextResponse(JSON.stringify(rsvp), { headers });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred.' }, { status: 500 });
        }
    }
}

