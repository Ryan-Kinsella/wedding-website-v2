"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

// export function LampDemo() {
//     return (
//         <LampContainer>
//             <motion.h1
//                 initial={{ opacity: 0.5, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                     delay: 0.3,
//                     duration: 0.8,
//                     ease: "easeInOut",
//                 }}
//                 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//             >
//                 Build lamps <br /> the right way
//             </motion.h1>
//         </LampContainer>
//     );
// }


//morphed dove:
/*
<motion.div
            initial={{
                x: 0,
                y: 0,
                opacity: 0,

            }}
            animate={{
                width: '100%',
                y: -100,
                opacity: 1,
                transition: {
                    duration: 2, // dove flies across screen in 2 seconds
                    ease: "easeOut"
                },
            }}
            className="absolute w-10 h-10 bg-transparent"
        >
            <Image
                src={'/images/png-dove-1.png'}
                className="w-full h-full object-cover"
                key={3}
                alt="thumbnail"
                loading="lazy"
                width={400}
                height={400}
            />
        </motion.div>
*/

const nDelay = 0.5; // original 0.3
const nDuration = 2; // original 0.8

//https://codesandbox.io/p/sandbox/framer-motion-animate-on-state-update-ns67ib?file=%2Fsrc%2FApp.tsx&from-embed
export const Dove = ({
    initalX,
    initalY,
    animateX,
    animateY,
    animateWidth,
    // show,
    finalOpacity,
}: {
    initalX: number;
    initalY: number;
    animateX: number;
    animateY: number;
    animateWidth: string | null;
    // show: boolean;
    finalOpacity: number;
}) => {
    // todo invert doves if initialX is odd/even
    return (
        <div className="flex justify-center">
            <motion.div
                initial={{
                    // changing these causes a brief moment where the doves change position.
                    // x: initalX, // 0
                    // y: initalY, // -100
                    opacity: 0.5,

                }}
                animate={{
                    ...(animateWidth !== null && { width: animateWidth }),
                    x: animateX, // not defined
                    y: animateY, // -115
                    opacity: finalOpacity,
                    transition: {
                        duration: nDelay + nDuration, // dove flies across screen in 2 seconds
                        ease: "easeIn"
                    },

                }}
                className="absolute w-10 h-8 sm:h-10 bg-transparent"
            >
                <Image
                    src={'/images/png-dove-1.png'}
                    className="w-full h-full object-cover"
                    alt="dove"
                    loading="lazy"
                    width={400}
                    height={400}
                />
            </motion.div >


        </div >
    );
};


export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    // edit this class with caution: watch out for using lg->md->sm horizontal scroll bar, the "lamp" underline in the middle as well.
    // const nDelay = 0.3; // original 0.3
    // const nDuration = 0.8; // original 0.8


    const bgOutsideColor = 'orange-100';
    const bgLinearGradient = 'white';
    const bgInnerColor = 'white'; // cannot be a color other than white or black

    // const [dovesFlying, setDovesFlying] = useState(true);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setDovesFlying(false);
    //     }, ((nDelay + nDuration) * 1000)); // stop doves after n seconds

    //     return () => clearTimeout(timer);
    // }, []);



    return (
        <div
            className={cn(
                // "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "2rem md:2rem" }}
                    whileInView={{ opacity: 1, width: "10rem md:2rem" }}
                    transition={{
                        delay: nDelay,
                        duration: nDuration,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className={`absolute inset-auto right-1/2 h-56 overflow-visible w-[10rem] md:w-[11rem] bg-gradient-conic from-${bgInnerColor} via-transparent to-transparent  [--conic-position:from_70deg_at_center_top]`}
                // below causes screen width to increase, creating scrollbar.
                // <div className={`absolute w-screen left-0 ${bgOutsideColor} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,${bgLinearGradient},transparent)]`} /> 
                // <div className={`absolute w-screen left-0   ${bgOutsideColor}  bottom-0 z-20 md:w-40 h-[100%] [mask-image:linear-gradient(to_right,${bgLinearGradient},transparent)]`} />
                >

                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "2rem md:1rem" }}
                    whileInView={{ opacity: 1, width: "2rem md:1rem" }}
                    transition={{
                        delay: nDelay,
                        duration: nDuration,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    // md:w-[30rem]
                    className={`absolute inset-auto left-1/2 h-56 w-[10rem] md:w-[11rem] bg-gradient-conic from-transparent via-transparent to-${bgInnerColor} [--conic-position:from_290deg_at_center_top]`}
                >
                    <div className={`absolute w-screen h-screen md:w-0  right-0 ${bgOutsideColor}  bottom-0 z-20 [mask-image:linear-gradient(to_left,${bgLinearGradient},transparent)]`} />
                    <div className={`absolute w-screen md:w-screen right-0 ${bgOutsideColor} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,${bgLinearGradient},transparent)]`} />
                </motion.div>
                {/* <div className={`absolute top-1/2 h-48 w-[5rem] md:w-[11rem] translate-y-12 scale-x-150 ${bgOutsideColor} blur-2xl`}></div> */}
                {/* <div className="absolute top-1/2 z-50 h-48 w-screen md:w-[11rem] bg-transparent opacity-10 backdrop-blur-md"></div>
                {/* <div className={`absolute inset-auto z-50 h-36 w-screen md:w-[11rem] -translate-y-1/2 rounded-full bg-${bgInnerColor} opacity-50 blur-3xl`}></div> */}
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: nDelay,
                        duration: nDuration,
                        ease: "easeInOut",
                    }}
                    className={`absolute inset-auto z-30 h-36 w-64 md:w-[11rem] -translate-y-[6rem] rounded-full bg-${bgInnerColor} blur-2xl`}
                ></motion.div>
                <motion.div
                    initial={{ width: "w-[2rem] md:w-[10rem]" }}
                    whileInView={{ width: "w-[10rem] md:w-[20rem]" }}
                    transition={{
                        delay: nDelay,
                        duration: nDuration,
                        ease: "easeInOut",
                    }}
                    className={`absolute inset-auto z-50 h-0.5 w-[10rem] md:w-[11rem] -translate-y-[7rem] bg-${bgInnerColor}`}
                ></motion.div>



                {/* <motion.div
                    initial={{ opacity: 0, width: "10rem" }}
                    whileInView={{ opacity: 1, width: "10rem" }}
                    transition={{
                        delay: nDelay + nDuration,
                        duration: nDuration,
                        ease: "easeInOut",
                    }}
                    className={`absolute inset-auto z-40 h-1 -translate-y-[6rem] sm:-translate-y-[6rem] md:-translate-y-[6rem] border-2 border-black`}
                >
                </motion.div> */}
                <div className={`absolute inset-auto z-40 h-44 w-full md:w-[11rem] -translate-y-[12.5rem] ${bgOutsideColor}`}></div>
                <Dove
                    initalX={0}
                    animateX={0}
                    initalY={-180}
                    animateY={-135}
                    animateWidth={'100%'}
                    key={0}
                    finalOpacity={0.9}
                />
                <Dove
                    initalX={Math.floor(Math.random() * 400) - 200}
                    animateX={Math.floor(Math.random() * 400) - 200}
                    initalY={-120}
                    animateY={-200}
                    animateWidth={null}
                    key={1}
                    finalOpacity={0}
                />
                <Dove
                    initalX={Math.floor(Math.random() * 400) - 200}
                    animateX={Math.floor(Math.random() * 400) - 200}
                    initalY={-120}
                    animateY={-200}
                    animateWidth={null}
                    key={2}
                    finalOpacity={0}
                />
                <Dove
                    initalX={Math.floor(Math.random() * 400) - 200}
                    animateX={Math.floor(Math.random() * 400) - 200}
                    initalY={-120}
                    animateY={-200}
                    animateWidth={null}
                    key={3}
                    finalOpacity={0}
                />
                <Dove
                    initalX={Math.floor(Math.random() * 400) - 200}
                    animateX={Math.floor(Math.random() * 400) - 200}
                    initalY={-120}
                    animateY={-200}
                    animateWidth={null}
                    key={4}
                    finalOpacity={0}
                />
                <Dove
                    initalX={Math.floor(Math.random() * 400) - 200}
                    animateX={Math.floor(Math.random() * 400) - 200}
                    initalY={-120}
                    animateY={-200}
                    animateWidth={null}
                    key={5}
                    finalOpacity={0}
                />
                <Dove
                    initalX={Math.floor(Math.random() * 400) - 200}
                    animateX={Math.floor(Math.random() * 400) - 200}
                    initalY={-120}
                    animateY={-200}
                    animateWidth={null}
                    key={6}
                    finalOpacity={0}
                />
                <Dove
                    initalX={Math.floor(Math.random() * 400) - 200}
                    animateX={Math.floor(Math.random() * 400) - 200}
                    initalY={-120}
                    animateY={-200}
                    animateWidth={null}
                    key={7}
                    finalOpacity={0}
                />
                <Dove
                    initalX={Math.floor(Math.random() * 400) - 200}
                    animateX={Math.floor(Math.random() * 400) - 200}
                    initalY={-120}
                    animateY={-200}
                    animateWidth={null}
                    key={8}
                    finalOpacity={0}
                />

            </div>
            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
                {children}
            </div>
        </div >
    );
};
