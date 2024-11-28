import { cn } from "@/lib/utils";
import { SpotifySuggestion } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
    items,
    className,
}: {
    items: SpotifySuggestion[] | null;
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ",
                className
            )}
        >
            {
                items === null || items === undefined ? (<div>Cannot load items.</div>)
                    :
                    items.map((item, idx) => (
                        <div
                            className="w-inherit h-inherit"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            key={idx}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute h-32 w-[16rem] bg-foreground hover:bg-secondary block rounded-2xl m-3"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 1,
                                            transition: { duration: 0.15, delay: 0.2 },
                                        }}
                                    >
                                        <Image
                                            src={'/images/gus4.jpeg'}
                                            className="w-full h-full object-cover rounded-2xl"
                                            alt={`Image ${idx}`}
                                            key={idx}
                                            loading="lazy"
                                            width={400}
                                            height={400}

                                        />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                            <Card>
                                <CardTitle>{item.songName}</CardTitle>
                                <CardDescription>{item.artistName}</CardDescription>
                            </Card>

                        </div>
                    ))
            }
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 1000);
    };

    return (
        <div
            className={cn(
                "rounded-2xl h-32 w-64 overflow-hidden bg-primary hover:bg-secondary relative z-20",
                className
            )}
        >
            <motion.div className="h-full w-full"
                initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                animate={isActive ? { backgroundColor: '#a5ced5' } : { backgroundColor: 'rgba(0, 0, 0, 0)' }}
                transition={{
                    delay: 0.1,
                    duration: 0.2,
                    ease: "easeInOut",
                }}
                onClick={handleClick}
            >
                <div className="p-4"
                >
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p className={cn("text-secondary-foreground font-bold tracking-wide mt-4", className)}>
            {children}
        </p>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-secondary-foreground tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
