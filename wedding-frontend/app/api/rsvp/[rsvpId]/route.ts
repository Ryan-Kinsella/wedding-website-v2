import prisma from "@/lib/instantiate-prisma-client";
import { Rsvp } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const headers = {
    'Content-Type': 'application/json',
};

export async function GET(request: NextRequest, params: { params: { rsvpId: string } }) {
    console.debug(`GET id ${JSON.stringify(params.params.rsvpId)}`)
    const rsvp: Rsvp | null = await prisma.rsvp.findUnique({
        where: {
            id: params.params.rsvpId,
        }
    });
    console.info(`GET response body: ${JSON.stringify(rsvp)}`);
    return new NextResponse(JSON.stringify(rsvp), { headers });
}

export async function DELETE(request: NextRequest, params: { params: { rsvpId: string } }) {
    console.debug(`DELETE id ${JSON.stringify(params.params.rsvpId)}`)
    const rsvp: Rsvp | null = await prisma.rsvp.delete({
        where: {
            id: params.params.rsvpId,
        }
    });
    console.info(`DELETE response body: ${JSON.stringify(rsvp)}`);
    return new NextResponse(JSON.stringify(rsvp), { headers });
}