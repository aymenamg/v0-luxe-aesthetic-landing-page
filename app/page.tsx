'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/mobile-nav';
import QuickBookForm from '@/components/quick-book-form';
import SkinQuiz from '@/components/skin-quiz';
import FAQAccordion from '@/components/faq-accordion';
import CompareSlider from '@/components/compare-slider';
import LeadMagnet from '@/components/lead-magnet';
import { ResultsGallery } from '@/components/results-gallery';
import { TextTestimonials } from '@/components/text-testimonials';
import { MedicalTooltip } from '@/components/medical-tooltip';
import { MagneticButton } from '@/components/magnetic-button';
import { Phone, ArrowRight, Heart, Award, ShieldCheck, Sparkles, Star, MapPin } from 'lucide-react';
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
      <MobileNav
        onBookClick={() => document.getElementById('quick-book-form')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* Desktop Navigation */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
        <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="font-serif text-3xl font-bold text-foreground tracking-wide">LuxeAesthetic</div>
          <div className="flex gap-10 items-center text-sm font-medium tracking-wide">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              Services
            </a>
            <a href="#results" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              Transformations
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              Pricing
            </a>
            <a href="#quiz" className="text-foreground/80 hover:text-primary transition-colors duration-300">
              Skin Quiz
            </a>
            <Button
              size="sm"
              onClick={() => {
                document.getElementById('quick-book-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-2.5 rounded-full transition-all duration-300 shadow-md"
            >
              Book Now
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-36 px-4 md:px-8 relative overflow-hidden bg-white">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/photos/5240217/pexels-photo-5240217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover opacity-[0.25]"
          >
            <source src="https://videos.pexels.com/video-files/5240217/5240217-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-xs font-medium tracking-wide mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Currently accepting a limited number of new patients for this month
            </div>
            <p className="text-foreground font-semibold text-sm tracking-[0.2em] uppercase">The Art of Refinement</p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground tracking-tight leading-[1.1] text-balance">
              Elevate Your Natural Radiance
            </h1>
            <p className="text-lg md:text-2xl text-foreground/70 leading-relaxed text-balance max-w-3xl mx-auto font-light">
              Personalized aesthetic treatments from Elena, a master practitioner with 10+ years of expertise in subtle enhancement and transformative results.
            </p>
          </motion.div>

          {/* CTA Section with Glow & Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center pt-8 space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
              <div className="relative group">
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
                <MagneticButton>
                  <Button
                    size="lg"
                    onClick={() => {
                      document.getElementById('quick-book-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-7 text-lg rounded-full transition-all duration-300 tracking-wide"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </MagneticButton>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold px-12 py-7 text-lg rounded-full backdrop-blur-sm transition-all duration-300 bg-white/50"
              >
                Explore Services
              </Button>
            </div>

            {/* Social Proof Stars */}
            <div className="flex flex-col items-center space-y-2 mt-4">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-sm text-foreground/70 font-medium">Rated 4.9/5 by 200+ clients in our clinic</p>
              <p className="text-xs text-foreground/50 font-light mt-1 w-full max-w-sm">Complimentary, educational consultations. No pressure, ever.</p>
            </div>
          </motion.div>

          {/* Quick-Link Category Navigation (Competitor Mirror) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="pt-12 w-full max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold tracking-wider uppercase text-foreground/70">
              <a href="#services" className="hover:text-primary transition-colors hover:underline underline-offset-4">Injectables</a>
              <span className="hidden sm:inline text-black/10">|</span>
              <a href="#services" className="hover:text-primary transition-colors hover:underline underline-offset-4">Laser & Light Treatments</a>
              <span className="hidden sm:inline text-black/10">|</span>
              <a href="#services" className="hover:text-primary transition-colors hover:underline underline-offset-4">Skin Rejuvenation</a>
              <span className="hidden sm:inline text-black/10">|</span>
              <a href="#services" className="hover:text-primary transition-colors hover:underline underline-offset-4">Wellness</a>
            </div>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="pt-16 flex flex-col md:flex-row gap-12 md:gap-24 justify-center text-sm bg-white/50 border border-black/5 shadow-sm backdrop-blur-xl rounded-3xl py-10 px-8"
          >
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-foreground">500+</p>
              <p className="text-foreground/60 mt-2 font-medium tracking-wide">Satisfied Clients</p>
            </div>
            <div className="hidden md:block w-px bg-black/10"></div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-foreground">10+</p>
              <p className="text-foreground/60 mt-2 font-medium tracking-wide">Years of Excellence</p>
            </div>
            <div className="hidden md:block w-px bg-black/10"></div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-foreground">99%</p>
              <p className="text-foreground/60 mt-2 font-medium tracking-wide">Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Magazine Style */}
      <section id="services" className="py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Our Featured Treatments</h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group cursor-pointer"
              >
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg border border-black/5">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-500"></div>

                  {/* Title Overlay - Glassmorphism */}
                  <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-white/80 border-t border-black/5 p-8 transform transition-all duration-500 group-hover:bg-white/95">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{service.name}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Expert Section - The Trust Anchor */}
      <section id="expert" className="py-24 md:py-32 px-4 md:px-8 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[40rem] rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Replace with a real photo of the injector. Placeholder used for now. */}
              <div className="absolute inset-0 bg-accent/20"></div>
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
                alt="Elena, Lead Aesthetic Practitioner"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/90 rounded-2xl border border-black/5 shadow-lg">
                <p className="font-serif text-2xl font-bold text-foreground">Elena M.</p>
                <p className="text-sm font-semibold text-accent uppercase tracking-widest mt-1">Lead Aesthetic Injector, RN, BSN</p>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <p className="text-foreground/60 font-semibold text-sm tracking-[0.2em] uppercase mb-4">Your Vision. Our Expertise. Endless Possibilities.</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">Where Artistry Meets Expertise.</h2>
              </div>

              <div className="space-y-4 text-lg text-foreground/70 font-light leading-relaxed">
                <p>
                  Step inside our world of luxury, innovation, and care, where every treatment is an art form, and you're the masterpiece. Our team blends medical mastery with creative vision to deliver lasting confidence.
                </p>
                <p>
                  "My goal is never to change how you look. My goal is to restore the architecture of your youth, leaving you looking incredibly refreshed, yet completely natural."
                </p>
                <div className="text-sm border-l-2 border-accent/50 pl-4 mt-6">
                  Expertise deep-dive:{' '}
                  <MedicalTooltip
                    term="Neurotoxins"
                    definition="Purified proteins temporarily relaxing specific facial muscles to prevent and treat expression lines."
                    className="mr-3"
                  >
                    Neurotoxins
                  </MedicalTooltip>
                  <MedicalTooltip
                    term="Hyaluronic Acid Fillers"
                    definition="A natural substance found in skin that is injected to restore volume and hydration to depleted areas."
                    className="mr-3"
                  >
                    Hyaluronic Acid
                  </MedicalTooltip>
                  <MedicalTooltip
                    term="Collagen Induction"
                    definition="Stimulating the body's natural collagen and elastin production for long-term skin tightening and renewal."
                  >
                    Collagen Induction
                  </MedicalTooltip>
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-black/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Board Certified</h4>
                    <p className="text-sm text-foreground/60 mt-1">Rigorous medical training and continuous education.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Safety First</h4>
                    <p className="text-sm text-foreground/60 mt-1">Highest clinical standards and sanitized environments.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-md"
                >
                  Explore Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Text Testimonials Slider */}
      <TextTestimonials />

      {/* Transformation Stories - Zig-Zag Layout */}
      <section id="results" className="py-32 md:py-48 px-4 md:px-8 bg-secondary/30 rounded-[3rem] mx-4 md:mx-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <p className="text-foreground/60 font-semibold text-sm tracking-[0.2em] uppercase mb-4">Real Results</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Client Transformations</h2>
          </motion.div>

          <ResultsGallery />
        </div>
      </section>

      {/* Skin Quiz Section */}
      <section id="quiz" className="py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <SkinQuiz />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-48 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <p className="text-foreground/60 font-semibold text-sm tracking-[0.2em] uppercase mb-4">Investment</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Membership Plans</h2>
            <p className="text-foreground/60 mt-6 text-lg">Flexible packages tailored to your aesthetic journey</p>
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
                className={`relative rounded-[2rem] backdrop-blur-md border transition-all duration-500 hover:shadow-xl ${tier.highlighted
                  ? 'border-accent bg-accent/5 shadow-lg transform md:scale-105 z-10'
                  : 'border-black/5 bg-white hover:bg-white/90'
                  }`}
              >
                <div className="p-10 space-y-8">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-foreground/60 text-sm">{tier.description}</p>
                  </div>

                  <div className="space-y-2 pb-8 border-b border-black/10">
                    <p className="text-sm font-medium tracking-wide uppercase text-foreground/60">Starting At</p>
                    <p className="text-5xl font-bold text-foreground">${tier.monthlyPrice}</p>
                    <p className="text-foreground/50 text-sm font-medium tracking-wide uppercase">per month</p>
                  </div>

                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex gap-4 text-foreground/80 text-sm">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                    <Button
                      className={`w-full font-semibold py-6 text-lg rounded-full transition-all duration-300 tracking-wide ${tier.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md'
                        : 'bg-secondary text-secondary-foreground hover:bg-black/5'
                        }`}
                      variant={tier.highlighted ? 'default' : 'secondary'}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12 mb-8"
          >
            <p className="text-sm text-foreground/60 max-w-xl mx-auto flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent/50 inline-block"></span>
              As low as $49/mo with Cherry or CareCredit. Pre-qualify with no impact to your credit score.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-4 md:px-8 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Questions of Clarity.</h2>
              <p className="text-lg text-foreground/70 font-light leading-relaxed">
                Embarking on an aesthetic journey requires absolute trust. We believe in total transparency regarding our procedures, pricing, and expectations.
              </p>
              <div className="pt-6 hidden lg:block">
                <p className="text-sm text-foreground/50 italic mb-4">Still have questions?</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    document.getElementById('quick-book-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-black/10 hover:bg-black/5 rounded-full px-8 py-6"
                >
                  Ask Elena Directly
                </Button>
              </div>
            </motion.div>

            {/* Accordion Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7"
            >
              <FAQAccordion />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Footer - VIP Concierge Style */}
      <section className="py-24 md:py-48 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-[3rem] bg-secondary border border-black/5 overflow-hidden shadow-xl"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/30 rounded-full blur-[80px] -ml-20 -mb-20"></div>

            <div className="relative p-12 md:p-20 text-center space-y-8">
              <h3 className="font-serif text-4xl md:text-6xl font-bold text-foreground">Ready for Your Transformation?</h3>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
                Let's schedule a personalized consultation with Elena to explore the perfect treatments for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button
                  size="lg"
                  onClick={() => {
                    document.getElementById('quick-book-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-7 text-lg rounded-full shadow-lg transition-all duration-300"
                >
                  Book Appointment
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = 'tel:+15550001234'}
                  className="bg-white border-black/10 text-foreground hover:bg-black/5 font-semibold px-12 py-7 text-lg rounded-full transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Us (555) 000-1234
                </Button>
              </div>

              {/* Quick Book Form */}
              <div className="mt-12 pt-12 border-t border-black/10">
                <p className="text-sm text-foreground/70 mb-6 font-medium tracking-wide">QUICK BOOKING</p>
                <QuickBookForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Localized Intent & Maps Integration */}
      <section id="location" className="py-24 md:py-32 px-4 md:px-8 border-t border-black/5 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Map Frame */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-black/5 h-[32rem]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191834161877!2d-122.40149022359223!3d37.78912807185078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806202425515%3A0xc34a8bc377f0c10a!2sFinancial%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1709664567210!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '2rem', filter: 'grayscale(100%) contrast(90%) opacity(80%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* Visit Us Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8 pl-8"
            >
              <div>
                <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Your Destination
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">Plan Your Visit</h2>
                <div className="space-y-6 text-foreground/70">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">LuxeAesthetic Flagship Clinic</h3>
                    <p className="mt-1 leading-relaxed">100 Luxury Boulevard, Suite 500<br />San Francisco, CA 94104</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Clinic Hours</h3>
                    <ul className="mt-1 space-y-1 text-sm leading-relaxed">
                      <li className="flex gap-4"><span>Mon - Fri</span> <span>9:00 AM - 6:00 PM</span></li>
                      <li className="flex gap-4"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
                      <li className="flex gap-4"><span>Sunday</span> <span>Closed</span></li>
                    </ul>
                  </div>
                  <div className="pt-4 mt-8 border-t border-black/10">
                    <p className="text-sm italic"><span className="text-accent font-medium">•</span> Complimentary valet parking available at rear entrance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Rich Text Block */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-foreground/80 font-light leading-relaxed">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Step Into Your Most Iconic Self</h2>
            <h3 className="text-xl md:text-2xl font-serif italic text-foreground/70">When You Look Iconic, You Feel Unstoppable</h3>
          </div>

          <p className="text-lg">
            Welcome to San Francisco's premier destination for luxury aesthetics: LuxeAesthetic Med Spa, where science, artistry, and intention come together to create iconic transformations. At our clinic in San Francisco, we personalize every experience, curate every detail, and design every result to help you feel unapologetically confident in your own skin.
          </p>
          <p className="text-lg">
            We believe beauty isn't about changing who you are. It's about refining, enhancing, and elevating your natural features to reflect the most radiant version of yourself. From injectables that sculpt and smooth to skin rejuvenation treatments that restore your glow or body contouring and wellness programs that empower transformation from the inside out—we perform every service with precision, care, and a commitment to excellence.
          </p>

          <div className="mt-12 space-y-6">
            <h4 className="font-serif text-2xl font-bold text-foreground">Where Luxury Meets Innovation</h4>
            <p>
              LuxeAesthetic combines cutting-edge technology with elevated, boutique-level service. We specialize in advanced treatments, like Morpheus8 skin tightening, Hydrafacial glow restoration, PDO thread lifts, and custom injectable artistry, each performed by highly trained experts who understand that confidence is the ultimate accessory. Here, your journey is never rushed—it's intentional, informed, and guided by a shared goal: timeless refinement.
            </p>

            <h4 className="font-serif text-2xl font-bold text-foreground mt-12">A Tailored Approach to Every Client</h4>
            <p>
              Your beauty is iconic, and your treatment plan should be, too. That's why we take time to understand your goals, your lifestyle, and your vision of confidence. Together, we create a custom aesthetic roadmap designed to deliver harmony, balance, and undeniable radiance—whether you're seeking subtle refreshment or a fully transformative experience.
            </p>

            <h4 className="font-serif text-2xl font-bold text-foreground mt-12">Experience the Difference</h4>
            <p>
              From the moment you step inside, you'll feel the difference: a space designed for calm, luxury, and empowerment. Every treatment is an invitation to pause, breathe, and invest in yourself, because confidence isn't created in a moment; it's cultivated over time with expert guidance and intentional care.
            </p>
            <p className="font-medium text-foreground italic mt-6 border-l-2 border-accent/40 pl-4">
              Discover why discerning clients choose our medical spa in San Francisco for their aesthetic and wellness journeys. Refine. Elevate. Transform. Because iconic isn't a look—it's a feeling.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-24 px-4 md:px-8 border-t border-black/5 bg-white relative z-10 -mt-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <LeadMagnet />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 md:px-8 border-t border-black/5 bg-white/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center text-foreground/50 text-sm">
          <p>&copy; 2024 LuxeAesthetic Med Spa. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 opacity-70">
            <a href="/legal/privacy-policy" className="hover:text-primary transition-colors hover:underline">Privacy Policy</a>
            <a href="/legal/terms" className="hover:text-primary transition-colors hover:underline">Terms of Service</a>
            <a href="/legal/medical-disclaimer" className="hover:text-primary transition-colors hover:underline">Medical Disclaimer</a>
          </div>
          <p className="mt-8 tracking-widest uppercase text-xs font-semibold text-foreground/40">Elena's Aesthetic Sanctuary &bull; Elevating Natural Beauty</p>
        </div>
      </footer>
    </main>
  );
}
