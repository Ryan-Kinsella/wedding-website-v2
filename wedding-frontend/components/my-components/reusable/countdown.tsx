"use client";

import React, { useState, useEffect } from 'react';

interface Countdown {
    years: number,
    months: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

export const CountdownComponent = ({
}: {
    }) => {

    const [countdown, setCountdown] = useState<Countdown>({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    useEffect(() => {
        const fetchCountdown = async () => {
            const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/api/countdown'; //
            try {
                const response = await fetch(url);
                const jsonObject: Countdown = await response.json();
                setCountdown(jsonObject);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };
        fetchCountdown();
        const intervalId = setInterval(fetchCountdown, 1000);
        // Clean up function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const mainDiv = "relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300"
    const divBackground = "absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground opacity-50 blur"
    const spanClassName = "relative z-10 text-xs"
    // md:text-sm
    // md:gap-x-20
    return (
        <div>
            <div className='text-3xl text-foreground text-center pt-4'>
                September 27th, 2025
            </div>
            <div className="grid grid-rows-2 grid-cols-6 gap-x-12 gap-y-4 w-full mx-auto pt-10
          font-semibold select-none text-muted-foreground " id="countdownBody">

                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>{countdown.years}</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>{countdown.months}</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>{countdown.days}</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>{countdown.hours}</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>{countdown.minutes}</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>{countdown.seconds}</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>Years</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>Months</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>Days</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>Hours</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>Minutes</span>
                </div>
                <div className={mainDiv}>
                    <div className={divBackground}></div>
                    <span className={spanClassName}>Seconds</span>
                </div>
            </div>
        </div>

    );
}
