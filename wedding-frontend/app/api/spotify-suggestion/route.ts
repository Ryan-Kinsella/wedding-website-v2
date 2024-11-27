import prisma from "@/lib/instantiate-prisma-client";
import { SpotifySuggestion } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const headers = {
    'Content-Type': 'application/json',
};

export async function POST(req: NextRequest) {
    try {
        const data: SpotifySuggestion = await req.json();
        if (data.songName === '' && data.artistName === '') {
            console.debug('Empty spotify suggestion, not adding in.');
            return NextResponse.json({ error: 'Empty SpotifySuggestion.' }, { status: 500 });
        }
        const spotifySuggestion = await prisma.spotifySuggestion.create({
            data,
        });
        return new NextResponse(JSON.stringify(spotifySuggestion), { headers });
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
        const spotifySuggestion = await prisma.spotifySuggestion.findMany();
        return new NextResponse(JSON.stringify(spotifySuggestion), { headers });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred.' }, { status: 500 });
        }
    }
}

