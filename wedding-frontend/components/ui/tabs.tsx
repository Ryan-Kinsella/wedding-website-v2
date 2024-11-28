"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { SparklesCore } from "./sparkles";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/utils/hex-colors-tailwind";
import scrollIntoView from 'scroll-into-view';

// import from '@/tailwind.config';


// export const SPOTIFY_COLOR = theme.colors.spotify;

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
};

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
    }, []);

    const handleTabClick = (tab: Tab, index: number) => {
        setActive(tab);
        if (isMobile) {
            // tabRefs.current[index]?.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'nearest',

            //     inline: 'center',
            // });
            const tabElement = tabRefs.current[index];
            if (tabElement) {
                // const scrollPosition: number = tabElement.offsetLeft + (tabElement.offsetWidth / 2) - (window.innerWidth / 2);
                // window.scrollTo({
                //     left: scrollPosition,
                //     behavior: 'smooth',
                // });
                scrollIntoView(tabElement, {
                    align: {
                        top: 0,
                        left: 0.3,
                    },
                    time: 800,
                    // ease: 'smooth',
                });
            }

        } else {
            tabRefs.current[index]?.scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
            });
        }
    };

    return (
        <>
            <div
                className={cn(
                    //overflow-x-auto 
                    "flex flex-row items-center justify-start lg:justify-center overflow-x-hidden no-visible-scrollbar",
                    containerClassName
                )}
            >
                {propTabs.map((tab, index) => (
                    <button
                        ref={el => {
                            tabRefs.current[index] = el;
                        }}
                        key={tab.title}
                        onClick={() => handleTabClick(tab, index)}
                        className={cn("relative px-4 py-2 rounded-full transform hover:scale-110 transition-transform duration-300", tabClassName, active === tab && activeTabClassName)}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {active === tab && (
                            <motion.div
                                layoutId="clickedbutton"
                                // note that bounce actually extends the width, so be careful adding to bounce.
                                transition={{ type: "spring", bounce: 0.1, duration: 1.0 }}
                                className={cn(
                                    `absolute inset-0 bg-secondary rounded-full`,
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span className="relative block">
                            {tab.title}
                        </span>
                    </button>
                ))}
            </div>
            <div className="w-full h-20 relative mx-auto ">
                <div className={`absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary h-[1px] w-full blur-sm`} />
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor={`${PRIMARY_COLOR}`}
                />
                <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <FadeInDiv
                tabs={propTabs}
                active={active}
                className={cn("", contentClassName)}
            />
        </>
    );
};

export const FadeInDiv = ({
    className,
    tabs,
    active,
}: {
    className?: string;
    tabs: Tab[];
    active: Tab;
}) => {
    return (
        <div className="relative w-full h-full">
            {tabs.map((tab) => (
                <Suspense key={tab.value} fallback={<div>Loading...</div>}>
                    <TabContent tab={tab} isActive={tab === active} className={className} />
                </Suspense>
            ))}
        </div>
    );
};

// Purpose: used in Suspense (FadeInDiv) to lazy load tab data.
export const TabContent = ({ tab, isActive, className }: {
    tab: Tab;
    isActive: boolean;
    className?: string
}) => {
    return (
        <motion.div
            layoutId={tab.value}
            style={{
                scale: isActive ? 1 : 0,
                opacity: isActive ? 1 : 0,
            }}
            className={cn("w-full h-full absolute top-0 left-0", className)}
            transition={{ duration: 1.0 }}
            animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
        >
            {tab.content}
        </motion.div>
    );
};
