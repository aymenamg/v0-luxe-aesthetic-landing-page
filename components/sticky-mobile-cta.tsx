'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the sticky bar after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-[100] md:hidden transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            {/* Soft gradient above bar */}
            <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            <div className="bg-white/95 backdrop-blur-md border-t border-black/10 px-4 py-3 pb-safe flex items-center justify-between gap-4 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white border-black/10 w-12 h-12 flex-shrink-0 text-foreground hover:bg-black/5"
                    onClick={() => window.location.href = 'tel:+15550001234'}
                >
                    <Phone className="w-5 h-5" />
                </Button>
                <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full h-12 shadow-sm"
                    onClick={() => {
                        const form = document.querySelector('#quick-book-form');
                        if (form) {
                            form.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    Book Consultation
                </Button>
            </div>
        </div>
    );
}
