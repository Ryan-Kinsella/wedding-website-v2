"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    const classNameImg = `h-80 w-full object-cover object-left-top rounded-lg gap-10 `;

    return (
        <div
            className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-2 md:gap-10 py-40 px-2 md:px-10 left-0 top-0 "
                ref={gridRef}
            >
                <div className="grid gap-2 md:gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={"grid-1" + idx}
                            className="relative"
                        >
                            <Image
                                src={el}
                                className={classNameImg}
                                alt={`Image ${idx}`}
                                loading="lazy"
                                width={400}
                                height={1000}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-2 md:gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <Image
                                src={el}
                                className={classNameImg}
                                alt={`Image ${idx}`}
                                loading="lazy"
                                width={400}
                                height={400}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-2 md:gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <Image
                                src={el}
                                className={classNameImg}
                                alt={`Image ${idx}`}
                                loading="lazy"
                                width={400}
                                height={400}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </motion.div>
                    ))}
                    {/* {thirdPart.length === 2 && (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + 3}>
                            <div className="hidden md:block" />
                        </motion.div>

                    )} */}
                </div>
            </div>
        </div>
    );
};
