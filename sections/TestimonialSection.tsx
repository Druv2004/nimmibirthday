import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsData } from "@/data/testimonial";
import { ITestimonial } from "@/types";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
    return (
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle 
                text1="Our Love Story" 
                text2="Moments from the heart" 
                text3="These are not just images — they are feelings, memories, and promises that make our journey special. Every smile, every tear, every memory with you means everything to me." 
            />

            {/* Left to Right */}
            <Marquee className="max-w-5xl mx-auto mt-11" gradient speed={25} gradientColor="#000">
                <div className="flex items-center gap-6 py-5">
                    {[...testimonialsData, ...testimonialsData].map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt="memory"
                            className="w-50 h-50 md:w-50 md:h-50 
                                       rounded-xl object-cover 
                                       shadow-md"
                        />
                    ))}
                </div>
            </Marquee>

            {/* Right to Left */}
            <Marquee className="max-w-5xl mx-auto" gradient speed={25} direction="right" gradientColor="#000">
                <div className="flex items-center gap-6 py-5">
                    {[...testimonialsData, ...testimonialsData].map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt="memory"
                            className="w-50 h-50 md:w-50 md:h-50 
                                       rounded-xl object-cover 
                                       shadow-md"
                        />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}