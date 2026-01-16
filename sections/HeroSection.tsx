'use client'
import { CheckIcon } from "lucide-react";
import TiltedImage from "@/components/TiltImage";
import { motion } from "motion/react";

export default function HeroSection() {
    const specialFeatures = [
        "I love you more than words can ever say",
        "You are my present, my future, my forever",
        "You are not just my better half, you are my whole heart",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center 
                        px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">

            {/* Glow background */}
            <div className="absolute top-24 sm:top-30 -z-10 left-1/2 -translate-x-1/2 
                            size-56 sm:size-64 md:size-72 bg-pink-600 blur-[300px]"></div>

            {/* Spacer badge */}
            <motion.a 
                href="#!" 
                className="group flex items-center gap-2 rounded-full 
                           p-1 pr-3 mt-28 sm:mt-36 md:mt-44 
                           text-pink-100 bg-pink-200/15"
            />

            {/* Heading */}
            <motion.h1 
                className="font-medium text-center w-full
                           text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                           leading-snug sm:leading-tight md:leading-[1.2]"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Hi Nimmi
                <span className="move-gradient block mx-auto mt-3
                                 px-4 py-2 rounded-xl text-nowrap
                                 text-base sm:text-lg md:text-xl lg:text-2xl
                                 w-fit text-center">
                    Happiest birthday love ❤️
                </span>
            </motion.h1>

            {/* Message */}
            <motion.p 
                className="text-center text-slate-200 mt-6
                           text-sm sm:text-base md:text-lg
                           max-w-md sm:max-w-lg px-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                I know life and situations sometimes test us, but one thing will never change —  
                my love for you. No matter where we stand today, my heart will always choose you,  
                again and again, every single day. ❤️
            </motion.p>

            {/* Features */}
            <div className="flex flex-wrap justify-center items-center 
                            gap-3 sm:gap-4 md:gap-10 mt-10 sm:mt-12 px-2">
                {specialFeatures.map((feature, index) => (
                    <motion.p 
                        className="flex items-center gap-2 text-center"
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        <CheckIcon className="size-4 sm:size-5 text-pink-600" />
                        <span className="text-slate-400 
                                     text-xs sm:text-sm md:text-base">
                            {feature}
                        </span>
                    </motion.p>
                ))}
            </div>

            {/* Image */}
            <div className="mt-12 sm:mt-16 w-full flex justify-center">
                <TiltedImage />
            </div>
        </div>
    );
}
