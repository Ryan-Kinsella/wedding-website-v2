"use client";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { ImageProps } from "next/image";
// import Image from "next/image";
import React, { forwardRef, useEffect, useState } from "react";


// todo
// const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
//     function ExoticImageWrapper(props, ref) {
//         return <Image  {...props} ref={ref} />; // ❌  this is not forwarded
//     }
// );
//const MotionComponent = motion(ExoticImage)

export const ImagesSlider = ({
    images,
    children,
    overlay = true,
    overlayClassName,
    className,
    autoplay = true,
    direction = "up",
}: {
    images: string[];
    children: React.ReactNode;
    overlay?: React.ReactNode;
    overlayClassName?: string;
    className?: string;
    autoplay?: boolean;
    direction?: "up" | "down";
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    useEffect(() => {
        setLoading(true);
        const loadPromises = images.map((image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image;
                img.onload = () => resolve(image);
                img.onerror = reject;
            });
        });

        Promise.all(loadPromises)
            .then((loadedImages) => {
                setLoadedImages(loadedImages as string[]);
                setLoading(false);
            })
            .catch((error) => console.error("Failed to load images", error));
    }, [images]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                setCurrentIndex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1); // handleNext
            } else if (event.key === "ArrowLeft") {
                setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1); // handlePrevious
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // autoplay
        let interval: any;
        if (autoplay) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1); // handleNext
            }, 6000); // in ms
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            clearInterval(interval);
        };
    }, [autoplay, images.length]);

    const slideVariants = {
        initial: {
            scale: 0,
            opacity: 0,
            rotateX: 45,
        },
        visible: {
            scale: 1,
            rotateX: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.645, 0.045, 0.355, 1.0],
            },
        },
        upExit: {
            opacity: 1,
            y: "-150%",
            transition: {
                duration: 1,
            },
        },
        downExit: {
            opacity: 1,
            y: "150%",
            transition: {
                duration: 1,
            },
        },
    };

    const areImagesLoaded = loadedImages.length > 0;

    return (



        <div
            className={cn(
                "overflow-hidden h-full w-full relative flex items-center justify-center",//old
                // "overflow-hidden h-screen w-screen relative",
                className
            )}
            style={{
                perspective: "1000px",
            }}
        >
            {areImagesLoaded && children}
            {areImagesLoaded && overlay && (
                <div
                    className={cn("absolute inset-0 bg-black/60 z-60", overlayClassName)}
                />
            )}

            {areImagesLoaded && (
                <AnimatePresence>

                    {/* <Image
                            key={currentIndex}
                            alt="Mountains"
                            // Importing an image will
                            // automatically set the width and height
                            src={loadedImages[currentIndex]}
                            sizes="100vw"
                            // Make the image display full width
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        /> */}

                    <motion.img
                        key={currentIndex}
                        src={loadedImages[currentIndex]}
                        initial="initial"
                        animate="visible"
                        exit={direction === "up" ? "upExit" : "downExit"}
                        variants={slideVariants}
                        className="image h-full w-full absolute inset-0 object-cover object-center"
                        alt={`Image ${direction}`}
                    />
                </AnimatePresence>
            )}
        </div>
    );
};


