'use client'
import { motion } from "motion/react";

export default function CTASection() {
    return (
        <motion.div className="max-w-5xl py-16 mt-20 mb-40 md:pl-20 md:w-full max-md:mx-4 md:mx-auto flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left bg-linear-to-b from-pink-900 to-pink-950 rounded-2xl p-6 text-white"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <div >
                <motion.h1 className="text-4xl md:text-[46px] md:leading-15 font-semibold bg-linear-to-r from-white to-pink-400 text-transparent bg-clip-text"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                </motion.h1>
                <motion.p className="bg-linear-to-r from-white to-pink-400 text-transparent bg-clip-text text-lg"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                >
                    You are my everything — my smile, my strength, my peace.
I love you more than I can ever explain.
And I don’t want a future without you in it.
Will you be my future wife? 💍✨
                </motion.p>
            </div>

        </motion.div>
    );
}