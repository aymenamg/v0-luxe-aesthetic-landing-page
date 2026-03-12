'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import CompareSlider from '@/components/compare-slider';
import { TESTIMONIALS } from '@/lib/data';

// Derive unique categories from testimonials
const categories = ['All', ...Array.from(new Set(TESTIMONIALS.map((t) => t.category)))];

export function ResultsGallery() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredTestimonials = activeCategory === 'All'
        ? TESTIMONIALS
        : TESTIMONIALS.filter((t) => t.category === activeCategory);

    return (
        <div className="w-full">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                ? 'bg-foreground text-background border-foreground shadow-md'
                                : 'bg-white/50 text-foreground/70 border-black/10 hover:bg-black/5'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Gallery */}
            <div className="space-y-32">
                <AnimatePresence mode="popLayout">
                    {filteredTestimonials.map((testimonial, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            key={testimonial.name + testimonial.category}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''
                                }`}
                        >
                            {/* Interactive Drag Slider */}
                            <div
                                className={`relative h-[30rem] rounded-3xl overflow-hidden shadow-xl border border-black/5 ${index % 2 === 1 ? 'md:order-2' : ''
                                    }`}
                            >
                                <CompareSlider
                                    beforeImage="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1500&auto=format&fit=crop"
                                    afterImage={testimonial.image}
                                />
                            </div>

                            {/* Text */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                <div className="flex gap-1.5 text-accent">
                                    {[...Array(5)].map((_, i) => (
                                        <Heart key={i} className="w-6 h-6 fill-current" />
                                    ))}
                                </div>
                                <p className="text-2xl md:text-3xl font-serif text-foreground/90 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="pt-6 border-t border-black/10">
                                    <p className="font-serif text-xl font-bold text-foreground">{testimonial.name}</p>
                                    <p className="text-accent text-sm font-semibold tracking-wide uppercase mt-1">
                                        {testimonial.category}
                                    </p>
                                    <p className="text-xs text-foreground/50 mt-1 font-light tracking-wide">
                                        Actual patient • Results may vary
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
