'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PRICING_TIERS } from '@/lib/data';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier?: (tierId: string) => void;
}

export default function PricingSection({ onSelectTier }: PricingSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
    >
      {PRICING_TIERS.map((tier) => (
        <motion.div key={tier.id} variants={itemVariants}>
          <Card
            className={`relative overflow-hidden h-full border-2 transition-all ${
              tier.highlighted
                ? 'border-accent bg-accent/5 shadow-xl scale-105 md:scale-105'
                : 'border-border bg-card hover:border-accent/30'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-semibold rounded-bl-lg">
                MOST POPULAR
              </div>
            )}

            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-6">
                <p className="text-4xl font-bold text-accent">
                  ${tier.monthlyPrice}
                  <span className="text-lg font-normal text-muted-foreground">/month</span>
                </p>
              </div>

              <div className="flex-1 mb-6 space-y-3">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{feature}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => onSelectTier?.(tier.id)}
                className={`w-full ${
                  tier.highlighted
                    ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-foreground border border-border'
                }`}
              >
                Get Started
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
