import { Countdown } from "@/model/countdown";
import { NextRequest, NextResponse } from "next/server";

const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, max-age=0' // Add this
};

export const dynamic = 'force-dynamic'

function calculateTimeRemaining(): Countdown {
    const currentDate = new Date();
    const weddingDate = new Date('2025-09-27T09:00:00');
    const duration = weddingDate.getTime() - currentDate.getTime();
    const years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((duration % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((duration % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    const countdown: Countdown = {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
    return countdown;
}

export async function GET(req: NextRequest) {
    try {
        return new NextResponse(JSON.stringify(calculateTimeRemaining()), { headers });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred.' }, { status: 500 });
        }
    }
}
