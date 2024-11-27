import { ImagesSlider } from "@/components/ui/image-slider";
import Image from "next/image";
import { motion } from "framer-motion";
import { SaveTheDateImageBackground } from "@/components/my-components/save-the-date/save-the-date-image-background";
import { Great_Vibes, Playfair_Display } from "next/font/google";
import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";

// todo borders on top and bottom

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

const countdownTypewritter = [
    {
        text: "are",
    },
    {
        text: "getting",
    },
    {
        text: "married",
        // className: "text-primary",
    },
];

export default async function Home() {
    const width = 600;
    const height = 600;

    return (
        <main
            className={`flex items-center justify-center min-h-screen text-center mx-auto ${generalFont.className} flex flex-col`}
        >
            {/* Title Section */}
            <div className="mx-auto font-bold text-4xl md:text-6xl p-12">
                SAVE <span className={`${fancyFont.className}`}>the</span> DATE
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-3 w-full max-w-5xl gap-x-4 items-center mx-auto max-h-[800px]">
                <div className="relative h-full">
                    <Image
                        className="w-full h-full object-cover"
                        key={1}
                        src={'/images/e5.jpg'}
                        alt={`Image ${1}`}
                        width={width}
                        height={height}
                    />
                    <SaveTheDateImageBackground text="27" />
                </div>
                <div className="relative  h-full">
                    <Image
                        className="w-full h-full object-cover"
                        key={2}
                        src={'/images/e6.jpg'}
                        alt={`Image ${2}`}
                        width={width}
                        height={height}
                    />
                    <SaveTheDateImageBackground text="09" />
                </div>
                <div className="relative h-full">
                    <Image
                        className="w-full h-full object-cover"
                        key={3}
                        src={'/images/e4.jpg'}
                        alt={`Image ${3}`}
                        width={width}
                        height={height}
                    />
                    <SaveTheDateImageBackground text="25" />
                </div>
            </div>

            {/* Footer Section */}
            <div className="text-xl md:text-2xl p-8">
                <div>Taylor & Ryan</div>
                <div className="mx-auto flex justify-center items-center text-center">
                    <TypewriterEffectSmooth words={countdownTypewritter} className={`${fancyFont.className}`} />
                </div>
                <div className="">Alliston | Ontario | Stevenson Inn & Spa</div>
                <div className="uppercase">Invitation to Follow</div>

            </div>


        </main>
    );



}