'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function LeadMagnet() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsSuccess(true);
            toast.success("Your request has been received!");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent/10 border border-accent/20 rounded-[2rem] p-8 md:p-12 text-center"
            >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Plan Initiated</h3>
                <p className="text-foreground/70">We've received your request. One of our specialists will reach out shortly to begin building your custom treatment plan and unlock your savings.</p>
            </motion.div>
        );
    }

    return (
        <div className="bg-white border border-black/5 shadow-xl rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Don't Leave Without Your Personalized Plan</p>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                        Build Your Treatment Plan & Unlock Savings!
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                        Every iconic transformation begins with intention. Build your custom treatment plan and discover the perfect path to timeless confidence—crafted just for you.
                    </p>
                    <ul className="space-y-3 text-sm text-foreground/80 mb-8">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                            Personalized treatment recommendations
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                            Exclusive savings and introductory offers
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                            Direct access to our expert practitioners
                        </li>
                    </ul>
                </div>

                <div className="bg-secondary/50 rounded-3xl p-8 border border-black/5">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="lead-email" className="text-sm font-medium text-foreground">Where should we send your details?</label>
                            <div className="relative">
                                <Input
                                    id="lead-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="pl-11 h-14 bg-white border-black/10 rounded-xl"
                                    required
                                />
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                            </div>
                        </div>
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base rounded-xl transition-all"
                        >
                            {isLoading ? 'Sending...' : 'Build My Treatment Plan'}
                        </Button>
                        <p className="text-xs text-center text-foreground/40 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
