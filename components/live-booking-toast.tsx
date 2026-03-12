'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { MapPin } from 'lucide-react';

const CITIES = ['San Francisco', 'Oakland', 'San Jose', 'Palo Alto', 'Berkeley', 'Marin', 'Atherton'];
const SERVICES = ['Botox Consultation', 'Lip Filler', 'Laser Skin Resurfacing', 'Microneedling', 'Custom Facial'];

export function LiveBookingToast() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const showRandomToast = () => {
            const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
            const randomService = SERVICES[Math.floor(Math.random() * SERVICES.length)];

            toast(
                <div className="flex flex-col gap-1 w-full">
                    <p className="font-semibold text-sm flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        New Appointment Secured
                    </p>
                    <p className="text-xs text-foreground/70 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Someone from {randomCity} just booked a {randomService}.
                    </p>
                </div>,
                {
                    duration: 4000,
                    position: 'bottom-right',
                }
            );
        };

        // Show first toast after 10 seconds
        const initialTimeout = setTimeout(() => {
            showRandomToast();
        }, 10000);

        // Then show a toast randomly every 45-90 seconds
        const intervalStr = setInterval(() => {
            showRandomToast();
        }, Math.floor(Math.random() * (90000 - 45000 + 1) + 45000));

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(intervalStr);
        };
    }, []);

    if (!isMounted) return null;

    return null; // This component just mounts the useEffect logic
}
