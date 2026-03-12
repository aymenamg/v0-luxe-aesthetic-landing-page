'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <header className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="font-serif text-3xl font-bold text-foreground tracking-tighter">LuxeAesthetic</div>
        <div className="flex gap-10 items-center text-sm font-light tracking-wide">
          <a href="#services" className="text-foreground/80 hover:text-accent transition-colors duration-300">
            Services
          </a>
          <a href="#results" className="text-foreground/80 hover:text-accent transition-colors duration-300">
            Transformations
          </a>
          <a href="#pricing" className="text-foreground/80 hover:text-accent transition-colors duration-300">
            Pricing
          </a>
          <a href="#quiz" className="text-foreground/80 hover:text-accent transition-colors duration-300">
            Skin Quiz
          </a>
          <Button 
            size="sm"
            className={`font-medium px-8 py-2.5 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20' 
                : 'bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/5'
            }`}
          >
            Book Now
          </Button>
        </div>
      </nav>
    </header>
  );
}
