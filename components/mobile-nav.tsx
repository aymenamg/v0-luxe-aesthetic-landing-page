'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  onBookClick?: () => void;
}

export default function MobileNav({ onBookClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-5 right-5 z-40 backdrop-blur-md bg-white/80 border border-black/10 text-foreground p-2 rounded-full hover:bg-white/90 transition-all duration-300 shadow-sm"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Slide-out Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
            />

            {/* Menu Drawer */}
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-64 backdrop-blur-lg bg-white/90 border-l border-black/10 z-40 md:hidden shadow-xl"
            >
              <div className="pt-20 px-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors text-lg font-medium"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-4 border-t border-border">
                  <Button
                    onClick={() => {
                      onBookClick?.();
                      setIsOpen(false);
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fixed Bottom CTA Bar (Mobile Only) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 md:hidden backdrop-blur-lg bg-white/90 border-t border-black/10 text-foreground p-4 z-30 shadow-xl"
      >
        <div className="flex gap-3">
          <a href="tel:+15551234567" className="flex-1">
            <Button variant="outline" className="w-full gap-2 border-foreground/20 text-foreground hover:bg-foreground/5">
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
          </a>
          <Button
            onClick={onBookClick}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md"
          >
            Book Now
          </Button>
        </div>
      </motion.div>
    </>
  );
}
