import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import MobileNav from '@/components/mobile-nav';
import QuickBookForm from '@/components/quick-book-form';
import SkinQuiz from '@/components/skin-quiz';
import ServiceGrid from '@/components/service-grid';
import PricingSection from '@/components/pricing-section';
import TestimonialsSection from '@/components/testimonials-section';
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LuxeAesthetic Med Spa | Premium Beauty Treatments',
  description:
    'Experience luxury aesthetic treatments with Elena. Expert injectables, laser therapy, and personalized skincare in a serene environment.',
  keywords: ['med spa', 'botox', 'dermal fillers', 'laser treatment', 'aesthetic treatments'],
  openGraph: {
    title: 'LuxeAesthetic Med Spa | Premium Beauty Treatments',
    description: 'Experience luxury aesthetic treatments with Elena',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Navigation Header (Desktop) */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-accent">LuxeAesthetic</div>
          <div className="flex gap-8 items-center">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#results" className="text-foreground hover:text-accent transition-colors">
              Results
            </a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#quiz" className="text-foreground hover:text-accent transition-colors">
              Quiz
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book Appointment
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-24 px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold text-lg mb-2">Premium Aesthetic Treatments</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Reveal Your Best Self
              </h1>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                Expert injectables, laser therapies, and personalized skincare treatments tailored to enhance your natural beauty and confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="pt-4 flex gap-8 text-sm">
              <div>
                <p className="font-semibold text-foreground">500+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">10+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">99%</p>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=600&fit=crop"
              alt="Aesthetic treatment"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </section>

      {/* Quick Book CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Book Your Appointment
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Schedule your personalized consultation with our expert practitioners. We offer flexible appointment times to fit your lifestyle.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Professional consultations
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Customized treatment plans
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span> Luxury treatment environment
                </li>
              </ul>
            </div>

            <Card className="p-8 bg-card border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Booking</h3>
              <QuickBookForm />
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-semibold text-lg mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Premium Aesthetic Treatments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each treatment is carefully curated and expertly administered to enhance your natural beauty.
            </p>
          </div>

          <ServiceGrid />
        </div>
      </section>

      {/* Before & After Section */}
      <section id="results" className="py-12 md:py-24 px-4 md:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-semibold text-lg mb-2">Transformation Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Real Results from Real Clients
            </h2>
          </div>

          {/* Before & After Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[1, 2].map((item) => (
              <div key={item} className="relative rounded-lg overflow-hidden h-96 shadow-xl group cursor-pointer">
                <Image
                  src={`https://images.unsplash.com/photo-1${item === 1 ? '576091160550-112173f7f869' : '552820728-8ac41f1ce891'}?w=600&h=600&fit=crop`}
                  alt={`Result ${item}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent flex items-end p-6">
                  <p className="text-accent-foreground font-semibold">Result {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Quiz Section */}
      <section id="quiz" className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-semibold text-lg mb-2">Personalized Recommendations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Discover Your Perfect Treatment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our 3-minute skin quiz helps identify the ideal treatments based on your goals and skin type.
            </p>
          </div>

          <div className="bg-secondary p-8 md:p-12 rounded-lg border border-border">
            <SkinQuiz />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-semibold text-lg mb-2">Client Love</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Trusted by Hundreds of Satisfied Clients
            </h2>
          </div>

          <TestimonialsSection />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-accent font-semibold text-lg mb-2">Membership Plans</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Flexible Pricing for Every Beauty Goal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan to achieve your aesthetic goals with exclusive member benefits.
            </p>
          </div>

          <PricingSection />

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">All plans include a complimentary consultation</p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-xl font-bold mb-4">LuxeAesthetic</h4>
              <p className="text-background/80">Premium aesthetic treatments with expert care.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="#services" className="hover:text-background transition">All Services</a></li>
                <li><a href="#" className="hover:text-background transition">Injectables</a></li>
                <li><a href="#" className="hover:text-background transition">Laser Treatments</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-background/80 text-sm">
                <li><a href="#" className="hover:text-background transition">About</a></li>
                <li><a href="#" className="hover:text-background transition">Contact</a></li>
                <li><a href="#" className="hover:text-background transition">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-background/80 text-sm">
                <li>📞 (555) 123-4567</li>
                <li>📧 hello@luxeaesthetic.com</li>
                <li>📍 123 Beauty Lane, City</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">&copy; 2024 LuxeAesthetic. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-background/80 text-sm">
              <a href="#" className="hover:text-background transition">Terms</a>
              <a href="#" className="hover:text-background transition">Privacy</a>
              <a href="#" className="hover:text-background transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Text/Chat Button */}
      <div className="fixed bottom-20 md:bottom-6 left-4 md:left-auto md:right-6 z-20">
        <button
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-lg flex items-center gap-2 transition-all hover:scale-110"
          aria-label="Text us"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="hidden md:inline text-sm font-semibold">Text Us</span>
        </button>
      </div>
    </main>
  );
}
