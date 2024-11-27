"use client"

import { color, motion } from "framer-motion";


export const SaveTheDateImageBackground = ({
    text,
}: {
    text: string
}) => {


    return (
        <div>


            <motion.div className="absolute bottom-0 left-0 right-0 text-8xl font-bold text-white                   
                        bg-gradient-to-br from-secondary to-black opacity-50 bg-blur h-full p-2 text-center"
                whileHover={{
                    // scale: 0.98, // Scale the div by 10% on hover
                    // boxShadow: "0px 0px 10px rgba(0, 200, 0, 0.3)", // Add a shadow on hover
                    opacity: 0.1,
                    borderRadius: "20px",
                }}

                transition={{ duration: 0.3 }} // Set the duration of the animation
            >
                {text}

            </motion.div>
        </div>
    );
}