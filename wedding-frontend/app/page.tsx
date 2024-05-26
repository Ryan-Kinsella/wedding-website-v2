import { motion } from "framer-motion";
import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import "@/components/my-components/reusable/custom-scrollbar.css";
import csurf from 'csurf'



import { // https://tabler.io/icons
    IconLocation,
    IconClockHour2,
    IconBed,
    IconBrandMcdonalds,
    IconGift,
    IconBook,
    IconCamera,
    IconMusic,
    IconCheckbox
} from "@tabler/icons-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { CountdownComponent } from "@/components/my-components/reusable/countdown";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { LampContainer } from "@/components/ui/lamp";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MusicRecommendations } from "@/components/my-components/tabs/music-recommendations";
import { useRef, useEffect } from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Rsvp } from "@/components/my-components/tabs/rsvp";
import { GetServerSideProps } from "next";
import { SpotifySuggestion } from "@/components/my-components/auto-generated-stubs/Api";



// export async function getServerSideProps(context) {
//     const { req, res } = context
//     await csrf(req, res)
//     return {
//         props: { csrfToken: req.csrfToken() },
//     }
// }

// export function csrf(req, res) {


//     return new Promise((resolve, reject) => {
//         csurf({ cookie: true })(req, res, (result) => {
//             if (result instanceof Error) {
//                 return reject(result)
//             }
//             return resolve(result)
//         })
//     })
// }

// async function getToken() {
//     const res = await fetch('' + process.env.NEXT_PUBLIC_BACKEND_URL, {
//         headers: {
//             //  'X-XSRF-TOKEN': csrfToken

//         },
//     });

// }

// {
//     "token": "MrbhKSteHGO5x5YwGqyLyqswd-gXkbA4FK_mSd1y5c0UKpPMC9CATR9tKwaU9qYCKYG_-JpRWtEmoIgVdc6AKu9ChqskEqr_",
//         "parameterName": "_csrf",
//             "headerName": "X-XSRF-TOKEN"
// }


export default async function Home() {
    const sleepingCards = [
        {
            id: 1,
            content:
                <div>
                    <p className="font-bold text-4xl text-white">House in the woods</p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        A serene and tranquil retreat, this house in the woods offers a peaceful
                        escape from the hustle and bustle of city life.
                    </p>
                </div>,
            className: "md:col-span-2",
            thumbnail:
                "/images/cat.jpg",
        },
        {
            id: 2,
            content:
                <div>
                    <p className="font-bold text-4xl text-white">House above the clouds</p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        Perched high above the world, this house offers breathtaking views and a
                        unique living experience. It&apos;s a place where the sky meets home,
                        and tranquility is a way of life.
                    </p>
                </div>,
            className: "md:col-span-1",
            thumbnail:
                "/images/2.jpg",
        },
        {
            id: 3,
            content:
                <div>
                    <p className="font-bold text-4xl text-white">House above the clouds</p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        Perched high above the world, this house offers breathtaking views and a
                        unique living experience. It&apos;s a place where the sky meets home,
                        and tranquility is a way of life.
                    </p>
                </div>,
            className: "md:col-span-1",
            thumbnail:
                "/images/1.jpg",
        },
        {
            id: 4,
            content:
                <div>
                    <p className="font-bold text-4xl text-white">House in the woods</p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        A serene and tranquil retreat, this house in the woods offers a peaceful
                        escape from the hustle and bustle of city life.
                    </p>
                </div>,
            className: "md:col-span-2",
            thumbnail:
                "/images/stevenson-outside-1.jpg",
        },

    ];
    const images = [
        "/images/e1.jpg",
        "/images/e2.jpg",
        "/images/e3.jpg",
        "/images/e4.jpg",
        "/images/e5.jpg",
        "/images/e6.jpg",
        "/images/e7.jpg",
        "/images/e8.jpg",
    ];

    const tabContentClass = "w-full h-[800px] relative rounded-2xl inline-flex flex-col items-center font-bold text-orange-100";

    const tabs = [
        {
            title: "Venue",
            value: "venue",
            content: (

                <div className={tabContentClass}>
                    {/* <div className="w-full h-[800px] relative rounded-2xl p-16 sm:p-12 lg:p-16 inline-flex flex-col items-center font-bold text-orange-100 "> */}
                    <p className="p-4 pt-4 text-xl md:text-4xl">Venue</p>
                    <a className="p-2 pt-3 text-xl md:text-3xl underline hover:text-spotify" href="https://stevensonfarms.com" target="_blank">Stevenson Farms</a>
                    <p className="p-2">5923 County Road 15 Alliston, ON. Canada</p>
                    <p className="p-2">Park anywhere!</p>
                </div>
            ),
        },
        {
            title: "Time",
            value: "time",
            content: (
                <div className={tabContentClass}>
                    <p className="p-4 text-xl md:text-4xl">Time - Rehearsal</p>
                    <p className="p-4 text-xl md:text-4xl">Time - Wedding</p>
                    <BackgroundBeams />
                </div>

            ),
        },
        {
            title: "Sleeping",
            value: "sleeping",
            content: (
                <div className={tabContentClass}>
                    <p className="p-4 text-xl md:text-4xl">Sleeping</p>
                    <p className="p-4">
                        The wedding party will be staying at the bed and breakfast. You&apos;re
                        also more than welcome to pitch a tent on the property for free! If
                        you&apos;re planning on staying overnight, let us know if you are, so we
                        can plan for breakfast in the morning at the venue.
                    </p>
                    <h1 className="p-4">Click on the recommendations below for B&Bs or Hotels:</h1>
                    <LayoutGrid cards={sleepingCards} />
                </div>
            ),
        },
        {
            title: "Menu",
            value: "menu",
            content: (
                <div className={tabContentClass}>
                    <p className="p-4 text-xl md:text-4xl">Menu</p>
                </div>
            ),
        },
        {
            title: "Gifts",
            value: "gifts",
            content: (
                <div className={tabContentClass}>
                    <p className="p-4 text-xl md:text-4xl">Gifts</p>
                    <p className="p-4">
                        We have everything we need. If you&apos;re feeling super inclined, in leau of gifts - our house + honeymoon fund!
                    </p>
                    <BackgroundBeams />
                </div>
            ),
        },
        {
            title: "Our Story",
            value: "our-story",
            content: (
                <div className={tabContentClass}>
                    <p className="p-4 text-xl md:text-4xl">Our Story</p>
                    {/* <p className="pb-4 text-xl md:text-4xl">Our Story</p> */}
                </div>
            ),
        },
        {
            title: "Photos",
            value: "photos",
            content: (
                <div className={tabContentClass}>
                    <ParallaxScroll images={images} />
                </div>
            ),
        },
        {
            title: "Music Recommendations",
            value: "music-recomendations",
            content: (
                <MusicRecommendations />
                // <MusicRecommendations />
            ),
        },
        {
            title: "RSVP",
            value: "rsvp",
            content: (

                <Rsvp />
            ),
        }
    ];
    const builtByTypewritter = [
        {
            text: "Built",
        },
        {
            text: "by",
        },
        {
            text: "the",
        },
        {
            text: "groom,",
        },
        {
            text: "Ryan",
            className: "text-orange-200",
        },
        {
            text: "Kinsella",
            className: "text-orange-200",
        },
    ];
    const countdownTypewritter = [
        {
            text: "Countdown",
        },
        {
            text: "to",
        },
        {
            text: "September",
            className: "text-orange-200",
        },
        {
            text: "27th",
            className: "text-orange-200",
        },
        {
            text: "2025:",
            className: "text-orange-300",
        },
    ];


    return (
        <TracingBeam className="-px-6 py-[135px]">

            <div className="min-h-screen">

                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center items-center min-h-screen">
                        <ContainerScroll
                            titleComponent={
                                <>
                                    <h1 className="text-2xl text-orange-100">Taylor & Ryan</h1>
                                </>
                            }
                        >
                            {/* <LampContainer> */}
                            {/* <div></div> */}
                            {/* </LampContainer> */}
                            <div className="p-12">
                                <TypewriterEffectSmooth words={countdownTypewritter} className="mx-auto" />
                            </div>
                            <CountdownComponent />
                        </ContainerScroll>
                    </div>
                    <Tabs tabs={tabs} />
                </div>
                <div className="absolute top-[3500px] left-0">
                    {/* <div> */}
                    <TypewriterEffectSmooth words={builtByTypewritter} />
                </div>
                {/* todo no more absolutes */}
                <div className="absolute top-[3550px] right-6">
                    <a className="pb-2 text-orange-200 underline hover:text-spotify" href="https://github.com/Ryan-Kinsella/wedding-website-v2" target="_blank">Code</a>
                </div>
            </div>
        </TracingBeam>

    );
}


