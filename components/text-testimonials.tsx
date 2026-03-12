'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/data';

export function TextTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-white py-24 md:py-32 px-4 md:px-8 border-y border-black/5">
            <div className="w-full max-w-4xl mx-auto text-center">
                <p className="text-foreground/60 font-semibold text-sm tracking-[0.2em] uppercase mb-4">Client Experiences</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-16">Luxury Treatments. Lifelong Confidence.</h2>

                <div className="relative h-64 md:h-40 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-x-0"
                        >
                            <p className="text-xl md:text-3xl text-foreground font-serif italic leading-relaxed mb-8">
                                "{TESTIMONIALS[currentIndex].quote}"
                            </p>
                            <p className="text-sm font-semibold text-accent uppercase tracking-widest">
                                - {TESTIMONIALS[currentIndex].name}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary w-8' : 'bg-black/10 hover:bg-black/30'
                                }`}
                            aria-label={`Go to say ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
