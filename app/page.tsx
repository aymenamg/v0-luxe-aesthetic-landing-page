'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/mobile-nav';
import QuickBookForm from '@/components/quick-book-form';
import SkinQuiz from '@/components/skin-quiz';
import { Phone, ArrowRight, Heart } from 'lucide-react';
import { SERVICES, TESTIMONIALS, PRICING_TIERS } from '@/lib/data';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="bg-transparent text-foreground">
      <MobileNav />

      {/* Desktop Navigation */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-accent">LuxeAesthetic</div>
          <div className="flex gap-10 items-center text-sm font-medium">
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              Book Now
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-40 pb-16 md:pb-32 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-accent font-semibold text-sm tracking-widest uppercase">The Art of Refinement</p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-tight text-balance">
              Elevate Your Natural Radiance
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-balance max-w-3xl mx-auto">
              Personalized aesthetic treatments from Elena, a master practitioner with 10+ years of expertise in subtle enhancement and transformative results.
            </p>
          </motion.div>

          {/* CTA Section with Glow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <Button 
                size="lg"
                className="relative bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold px-10 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-12 flex flex-col md:flex-row gap-8 md:gap-16 justify-center text-sm bg-white/30 backdrop-blur-md rounded-3xl py-8 px-6"
          >
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-accent">500+</p>
              <p className="text-foreground/70 mt-1">Satisfied Clients</p>
            </div>
            <div className="hidden md:block h-12 w-px bg-foreground/20"></div>
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-accent">10+</p>
              <p className="text-foreground/70 mt-1">Years of Excellence</p>
            </div>
            <div className="hidden md:block h-12 w-px bg-foreground/20"></div>
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-accent">99%</p>
              <p className="text-foreground/70 mt-1">Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Magazine Style */}
      <section id="services" className="py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Signature Services</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Premium Aesthetic Solutions</h2>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  
                  {/* Title Overlay - Glassmorphism */}
                  <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/10 border-t border-white/20 p-6 transform transition-all duration-300 group-hover:translate-y-0">
                    <h3 className="font-serif text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{service.description}</p>
                  </div>
                </div>

                {/* Hover Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transformation Stories - Zig-Zag Layout */}
      <section id="results" className="py-24 md:py-32 px-4 md:px-8 bg-white/20 backdrop-blur-md rounded-3xl mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Real Results</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Client Transformations</h2>
          </motion.div>

          <div className="space-y-24">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}
              >
                {/* Image */}
                <div className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Text */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="pt-4">
                    <p className="font-serif font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-accent text-sm font-semibold">{testimonial.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Quiz Section */}
      <section id="quiz" className="py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SkinQuiz />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 px-4 md:px-8 bg-white/20 backdrop-blur-md rounded-3xl mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Investment</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Membership Plans</h2>
            <p className="text-foreground/70 mt-4">Flexible packages tailored to your aesthetic journey</p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative rounded-3xl backdrop-blur-md border transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 ${
                  tier.highlighted
                    ? 'border-accent/50 bg-white/30 shadow-lg transform md:scale-105'
                    : 'border-white/20 bg-white/10 hover:bg-white/20'
                }`}
              >
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{tier.name}</h3>
                    <p className="text-foreground/70 text-sm mt-2">{tier.description}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-accent">${tier.monthlyPrice}</p>
                    <p className="text-foreground/70 text-sm">per month</p>
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-foreground/80 text-sm">
                        <span className="text-accent font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full font-semibold py-3 rounded-full transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg'
                        : 'border border-accent text-accent hover:bg-accent/10'
                    }`}
                    variant={tier.highlighted ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Footer - VIP Concierge Style */}
      <section className="py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-4xl backdrop-blur-md bg-gradient-to-br from-white/30 to-white/10 border border-white/30 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="relative p-12 md:p-16 text-center space-y-6">
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Ready for Your Transformation?</h3>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Let's schedule a personalized consultation with Elena to explore the perfect treatments for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg rounded-full shadow-lg"
                >
                  Book Appointment
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold px-10 py-6 text-lg rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us (555) 000-1234
                </Button>
              </div>

              {/* Quick Book Form */}
              <div className="mt-12 pt-12 border-t border-white/20">
                <p className="text-sm text-foreground/70 mb-6">Quick booking form</p>
                <QuickBookForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-foreground/70 text-sm">
          <p>&copy; 2024 LuxeAesthetic Med Spa. All rights reserved.</p>
          <p className="mt-4">Elena's Aesthetic Sanctuary • Elevating Natural Beauty</p>
        </div>
      </footer>
    </main>
  );
}
