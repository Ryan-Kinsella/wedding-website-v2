"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { SparklesCore } from "./sparkles";

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

    const handleTabClick = (tab: Tab, index: number) => {
        setActive(tab);
        tabRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        });
    };

    return (
        <>
            <div
                className={cn(
                    "flex flex-row items-center justify-start sm:justify-center overflow-x-auto no-visible-scrollbar w-full",
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
                                transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0 bg-zinc-800 rounded-full ",
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span className="relative block text-white">
                            {tab.title}
                        </span>
                    </button>
                ))}
            </div>
            <div className="w-full h-20 relative mx-auto">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-100 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-100 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent h-px w-1/4" />
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
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
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: tab === active ? 1 : 0,
                        opacity: tab === active ? 1 : 0,
                    }}
                    className={cn("w-full h-full absolute top-0 left-0", className)}
                    transition={{ duration: 0.5 }}
                    animate={{ opacity: tab === active ? 1 : 0, scale: tab === active ? 1 : 0 }}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    );
};
