import prisma from "@/lib/instantiate-prisma-client";
import { SpotifySuggestion } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const headers = {
    'Content-Type': 'application/json',
};

export async function GET(request: NextRequest, params: { params: { spotifiySugestionId: string } }) {
    console.debug(`GET id ${JSON.stringify(params.params.spotifiySugestionId)}`)
    const spotifiySugestion: SpotifySuggestion | null = await prisma.spotifySuggestion.findUnique({
        where: {
            id: params.params.spotifiySugestionId,
        }
    });
    console.info(`GET response body: ${JSON.stringify(spotifiySugestion)}`);
    return new NextResponse(JSON.stringify(spotifiySugestion), { headers });
}

export async function DELETE(request: NextRequest, params: { params: { spotifiySugestionId: string } }) {
    console.debug(`DELETE id ${JSON.stringify(params.params.spotifiySugestionId)}`)
    const spotifiySugestion: SpotifySuggestion | null = await prisma.spotifySuggestion.delete({
        where: {
            id: params.params.spotifiySugestionId,
        }
    });
    console.info(`DELETE response body: ${JSON.stringify(spotifiySugestion)}`);
    return new NextResponse(JSON.stringify(spotifiySugestion), { headers });
}