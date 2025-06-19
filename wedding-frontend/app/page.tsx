import { motion } from "framer-motion";
import React, { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import "@/components/my-components/reusable/custom-scrollbar.css";
// import csurf from 'csurf'
// import { // https://tabler.io/icons
//     IconLocation,
//     IconClockHour2,
//     IconBed,
//     IconBrandMcdonalds,
//     IconGift,
//     IconBook,
//     IconCamera,
//     IconMusic,
//     IconCheckbox
// } from "@tabler/icons-react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { CountdownComponent } from "@/components/my-components/reusable/countdown";
import { LampContainer } from "@/components/ui/lamp";
import { MusicRecommendations } from "@/components/my-components/tabs/music-recommendations";
import { RsvpComponent } from "@/components/my-components/tabs/rsvp";
import { Playfair_Display, Parisienne, Great_Vibes } from 'next/font/google'
import { ImagesSlider } from "@/components/ui/image-slider";


const generalFont = Playfair_Display({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-inter',
})

const fancyFont = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-inter',
})


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
                <div className="font-normal text-base text-neutral-200 ">
                    <p className="font-bold text-4xl ">
                        Stay at the Notawassaga Inn!
                    </p>
                    <p className="font-normal text-base text-primary-foreground"></p>
                    <p className="my-4 max-w-lg">
                        A block of rooms has been reserved for our guests at the Nottawasaga Inn and Resort in Alliston.
                        Please mention our name when calling to reserve a room.
                        A minimum of two nights are required. Please reserve rooms by August 1st if choosing this option.
                    </p>
                    <a className="underline text-primary hover:text-secondary" href="https://www.nottawasagaresort.com" target="_blank">
                        Nottawasaga Inn Resort & Conference Centre
                    </a>
                    <p>
                    </p>
                    <a className="underline text-primary hover:text-secondary"
                        href="https://www.tripadvisor.ca/Hotel_Review-g182201-d182798-Reviews-Nottawasaga_Inn_Resort-Alliston_New_Tecumseth_Ontario.html#/media/182798/476156338:p/?albumid=101&type=0&category=101"
                        target="_blank">
                        Reviews
                    </a>
                    <p>
                        6015 Highway 89, Alliston, ON, L9R 1A4
                    </p>
                    <p>
                        Tel: 705-435-5501
                    </p>

                </div>,
            className: "md:col-span-2",
            thumbnail:
                "/images/nottawasaga-1.jpg",
        },
        {
            id: 2,
            content:
                <div className="font-normal text-base text-neutral-200 ">
                    <p className="font-bold text-4xl">
                        Stay with us!
                    </p>
                    <p className="my-4 max-w-lg text-neutral-200">
                        A limited number of rooms are available at the bed and breakfast where the wedding and reception will be held. If you know which room you&apos;re staying in, please call in and book your room.
                    </p>
                    <a className="underline text-primary hover:text-secondary" href="https://stevensonfarms.com">
                        Stevenson Inn and Spa
                    </a>
                    <p>
                        5923 County Road 15 Alliston, ON. Canada
                    </p>
                    <p>
                        Tel: 705.434.0844
                    </p>
                    <p>
                        info@stevensonfarms.com
                    </p>
                </div>,
            className: "md:col-span-1",
            thumbnail:
                "/images/stevenson-farms-2.jpg",
        },
        {
            id: 3,
            content:
                <div className="font-normal text-base text-neutral-200 ">
                    <p className="font-bold text-4xl">
                        Embrace the outdoors! Pitch a tent
                    </p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        Our original plan was to have a cottage wedding!
                        If you have access to a trailer or tent and would like to camp overnight on site, you are more than welcome!
                        Please let us know so we can arrange for a complimentary breakfast to be served in the morning.
                    </p>
                </div>,
            className: "md:col-span-2",
            thumbnail:
                "/images/stevenson-farms-3.jpg",
        },
        {
            id: 4,
            content:
                <div className="font-normal text-base text-neutral-200 ">
                    <p className="font-bold text-4xl">
                        Stay at a local bed and breakfast / airbnb!
                    </p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        Whichever you choose, there are many bed and breakfasts in the area to choose from. We have arranged drivers to drive you back to any location for bedtime on Saturday.
                    </p>
                </div>,
            className: "md:col-span-1",
            thumbnail:
                "/images/mountain-ash-farm.jpg",
        },

    ];
    const images = [
        "/images/e1.JPG",
        "/images/e2.JPG",
        "/images/e3.JPG",
        "/images/e4.JPG",
        "/images/e5.JPG",
        "/images/e6.JPG",
        "/images/e7.JPG",
        "/images/e8.JPG",
    ];

    const imagesSlider = [
        "/images/stevenson-farms-1.jpg",
        "/images/stevenson-farms-2.jpg",
        "/images/stevenson-farms-3.jpg",

    ];

    const tabContentClass = "w-full h-[800px] max-w-7xl relative rounded-2xl inline-flex flex-col items-center font-bold";

    const tabs = [
        {
            title: "RSVP",
            value: "rsvp",
            content: (

                <RsvpComponent />
            ),
        },
        {
            title: "Venue",
            value: "venue",
            content: (
                <div className={tabContentClass} id="venue">

                    <p className="p-4 pt-4 text-2xl md:text-4xl">Venue</p>
                    <a className="p-2 pt-3 text-2xl md:text-3xl underline hover:text-secondary" href="https://stevensonfarms.com" target="_blank">Stevenson Farms</a>
                    <p className="p-2 font-light">5923 County Road 15 Alliston, ON. Canada</p>
                    <p className="p-2 font-light">Park anywhere!</p>

                    <ImagesSlider className="h-full w-full" images={imagesSlider}>
                        <div>

                        </div>
                    </ImagesSlider>
                    <a className="p-2 pt-3 text-xl md:text-2xl underline hover:text-secondary"
                        href="https://www.tripadvisor.ca/Hotel_Review-g182201-d1469258-Reviews-Stevenson_Inn_Spa-Alliston_New_Tecumseth_Ontario.html#/media/1469258/?albumid=101&type=0&category=101" target="_blank">
                        More pictures
                    </a>
                </div>
            ),
        },
        {
            title: "Time",
            value: "time",
            content: (
                <div className={`${tabContentClass}`}>
                    <div className="max-w-xl space-y-4 px-2 pt-4">
                        <p className="text-xl md:text-4xl">Rehearsal</p>
                        <span className="text-sm text-secondary">Friday | TBD (~3:30pm - 7:00pm)</span>
                        <p className="font-light"> A ceremony rehersal will take place Friday prior to the dinner with the wedding party. Details to come for those involved.</p>
                        <p className="text-xl md:text-4xl">Friday Night Dinner</p>
                        <span className="text-sm text-secondary">Friday | 7:00pm - 10:00pm</span>
                        <p className="font-light">We&apos;ve booked a floor at our favourite Barrie resturant, The Farmhouse [268 Bradford Street, Barrie, ON, Canada].
                            We plan to have a casual dinner for those in town the night before.
                            We would love to get together with those who can attend, but please do not feel pressured.
                            After this, if you feel inclined and have the energy we can reconvene at the venue and have a bonfire.
                        </p>
                        <p className="text-xl md:text-4xl">Wedding Ceremony</p>
                        <span className="text-sm text-secondary">Saturday | 3:00pm - 430pm</span>
                        <p className="font-light">
                            The wedding ceremony will take place at Stevenson Inn and Spa at 3:30pm.
                            Please arrive at 3:00pm.
                            We kindly request formal attire.
                        </p>
                        <p className="text-xl md:text-4xl">Cocktail Hour</p>
                        <span className="text-sm text-secondary">Saturday | 4:30pm - 5:30pm</span>
                        <p className="font-light">
                            Snacks and refreshments will be served to satiate us until dinner.
                        </p>
                        <p className="text-xl md:text-4xl">Dinner and Dancing</p>
                        <span className="text-sm text-secondary">Saturday | 5:30pm - 2:00am</span>
                        <p className="font-light">
                            Dinner, speeches, and a dance party will take place. We can&apos;t wait to celebrate with you!
                        </p>
                        <p className="text-xl md:text-4xl">Brunch</p>
                        <span className="text-sm text-secondary">Sunday | ~ - 11:00am</span>
                        <p className="font-light">
                            For those who stayed overnight at the venue, a continental breakfast of coffee, toast, and cereal will be self-served. The venue has provided us a soft deadline to leave at 11:00am.
                        </p>
                    </div>
                    {/* <BackgroundBeams /> */}
                </div>

            ),
        },
        {
            title: "Accomodations",
            value: "sleeping",
            content: (
                <div className={tabContentClass}>
                    <p className="p-4 text-xl md:text-4xl">Accomodations</p>
                    <div className="max-w-xl space-y-4 px-2">

                        <p className="p-4 font-light">
                            We have arranged a few options for accommodations.
                            Whatever you choose, we are happy to have you celebrate with us!
                            Please let us know if you have any questions.

                        </p>
                        <h1 className="p-4">Click on the options and recommendations below for B&Bs or Hotels:</h1>

                    </div>
                    <LayoutGrid cards={sleepingCards} />
                </div>
            ),
        },
        // {
        //     title: "Menu",
        //     value: "menu",
        //     content: (
        //         <div className={tabContentClass}>
        //             <p className="p-4 text-xl md:text-4xl">Menu</p>
        //         </div>
        //     ),
        // },
        {
            title: "Gifts",
            value: "gifts",
            content: (
                <div className={tabContentClass}>
                    <p className="p-4 text-xl md:text-4xl">Gifts</p>
                    <div className="max-w-xl space-y-4 px-2">

                        <p className="p-4 font-light">
                            The only thing we can ask for is for you to celebrate our special day with us!
                            While we have everything we need, if you feel the need to bring a gift, contributions towards our home fund would be very much appreciated.

                        </p>
                    </div>
                    {/* <BackgroundBeams /> */}
                </div>
            ),
        },
        // {
        //     title: "Our Story",
        //     value: "our-story",
        //     content: (
        //         <div className={tabContentClass}>
        //             <p className="p-4 text-xl md:text-4xl">Our Story</p>
        //             <div className="max-w-xl space-y-4 px-2">

        //                 <p className="p-4 font-light">Stay tuned!</p>
        //             </div>
        //         </div>
        //     ),
        // },
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

    ];
    const builtByTypewritter = [
        {
            text: "Built",
            className: `text-default ${fancyFont.className}`,
        },
        {
            text: "by",
            className: `text-default ${fancyFont.className}`,
        },
        {
            text: "the",
            className: `text-default ${fancyFont.className}`,
        },
        {
            text: "groom,",
            className: `text-default-400 ${fancyFont.className}`,
        },
        {
            text: "Ryan",
            className: `text-muted-foreground ${fancyFont.className}`,
        },
        {
            text: "Kinsella",
            className: `text-muted-foreground ${fancyFont.className}`,
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
            // className: "text-primary",
        },
        {
            text: "27th",
            // className: "text-primary",
        },
        {
            text: "2025:",
            // className: "text-primary",
        },
    ];


    return (
        // <TracingBeam className="-px-6 py-[135px]">
        <main
            className={generalFont.className}
        >
            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center items-center min-h-32 pt-80">
                        <LampContainer>
                            <div className={`${fancyFont.className} pt-10`}>
                                <h1 className={`pt-10 text-6xl sm:text-6xl text-center`}>Taylor & Ryan</h1>
                                <div className="pt-[0px]">
                                    <CountdownComponent />
                                </div>
                            </div>
                        </LampContainer>


                        {/* everyone thought below ContainerScroll was tacky. I thought it was cool. Oh well */}
                        {/* <ContainerScroll
                            titleComponent={
                                <>
                                    <h1 className="text-2xl>Taylor & Ryan</h1>
                                </>
                            }
                        >                            
                            <div className="p-12">
                                <TypewriterEffectSmooth words={countdownTypewritter} className="mx-auto" />
                            </div>
                            <CountdownComponent />
                        </ContainerScroll> */}
                    </div>
                    {/* <div className="w-full">
                        <TypewriterEffectSmooth words={builtByTypewritter} />
                        <a className="absolute right-2 -mt-16 underline hover:text-secondary" href="https://github.com/Ryan-Kinsella/wedding-website-v2" target="_blank">Code</a>
                    </div> */}
                    <Tabs tabs={tabs} />
                </div>
                <div className="absolute top-[2000px] mx-auto">
                    <div className="text-orange-100">
                        a
                    </div>
                </div>

                {/* <div className="absolute top-[3000px] mx-auto">

                    <div className="w-full">
                        <TypewriterEffectSmooth words={builtByTypewritter} />
                        <a className="pb-2 pr-2 underline hover:text-secondary" href="https://github.com/Ryan-Kinsella/wedding-website-v2" target="_blank">Code</a>
                    </div>
                </div> */}


                {/* <TypewriterEffectSmooth words={builtByTypewritter} /> */}
                {/* </div> */}
                {/* todo no more absolutes */}
                {/* <div className="absolute top-[3550px] right-6"> */}
                {/* <a className="pb-2 text-primary underline hover:text-secondary" href="https://github.com/Ryan-Kinsella/wedding-website-v2" target="_blank">Code</a> */}
                {/* </div> */}
            </div >
        </main>
        //{/* </TracingBeam> */ }
    );
}


