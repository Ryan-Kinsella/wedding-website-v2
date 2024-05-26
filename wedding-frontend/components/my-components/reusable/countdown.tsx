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
            const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/countdown';
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

    return (
        // <div className="grid grid-rows-2 grid-cols-6 gap-4 w-full xl:w-1/2 mx-auto pt-[100px] select-none" id="countdownBody">
        //     <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
        //         <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
        //         <span className="relative z-10 text-xs md:text-sm">{countdown.years}</span>
        //     </div>
        //     <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
        //         <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
        //         <span className="relative z-10 text-xs md:text-sm">{countdown.months}</span>
        //     </div>
        <div className="grid grid-rows-2 grid-cols-6 gap-4 w-full xl:w-1/2 mx-auto pt-[100px] select-none" id="countdownBody">
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">{countdown.years}</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">{countdown.months}</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">{countdown.days}</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">{countdown.hours}</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">{countdown.minutes}</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">{countdown.seconds}</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">Years</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">Months</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">Days</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">Hours</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">Minutes</span>
            </div>
            <div className="relative flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-300 opacity-50 blur"></div>
                <span className="relative z-10 text-xs md:text-sm">Seconds</span>
            </div>
        </div>
    );
}
