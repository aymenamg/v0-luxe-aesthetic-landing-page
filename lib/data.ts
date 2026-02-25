// Mock database structure - easily swappable for CMS/API
export const SERVICES = [
  {
    id: 'botox',
    name: 'Botox & Injectables',
    description: 'Smooth fine lines and wrinkles with precision injections',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
  },
  {
    id: 'fillers',
    name: 'Dermal Fillers',
    description: 'Restore volume and enhance facial contours',
    image: 'https://images.unsplash.com/photo-1576091160511-112173f7f869?w=600&h=400&fit=crop',
  },
  {
    id: 'laser',
    name: 'Laser Treatments',
    description: 'Advanced skin rejuvenation and hair removal',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop',
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    description: 'Collagen induction therapy for glowing skin',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    description: 'Non-invasive hydration and skin resurfacing',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop',
  },
  {
    id: 'skincare',
    name: 'Professional Skincare',
    description: 'Customized treatments for all skin types',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop',
  },
];

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 199,
    description: 'Single service focused',
    features: [
      'One service per month',
      'Priority booking',
      '10% service discount',
      'Email support',
    ],
  },
  {
    id: 'preferred',
    name: 'Preferred',
    monthlyPrice: 399,
    description: 'Most popular',
    features: [
      'Two services per month',
      'Priority + VIP booking',
      '20% service discount',
      'Phone & email support',
      'Free skin analysis quarterly',
      'Member-exclusive events',
    ],
    highlighted: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    monthlyPrice: 599,
    description: 'Premium white-glove service',
    features: [
      'Four services per month',
      'Concierge booking service',
      '30% service discount',
      '24/7 VIP support',
      'Custom treatment plans',
      'Exclusive product access',
      'Personal beauty consultant',
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    category: 'Botox',
    quote: 'I look refreshed, not frozen. Elena truly understands the art of subtle enhancement.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    name: 'Jessica Chen',
    category: 'Laser Treatment',
    quote: 'The results exceeded my expectations. My skin has never looked better!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    name: 'Amanda Rodriguez',
    category: 'Fillers',
    quote: 'Elena made me feel comfortable and beautiful. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
];

export const QUIZ_GOALS = [
  { id: 'botox', label: 'Reduce Fine Lines', description: 'Smooth forehead, crow\'s feet & frown lines' },
  { id: 'volume', label: 'Restore Volume', description: 'Fuller cheeks, lips & jawline' },
  { id: 'glow', label: 'Radiant Glow', description: 'Brighter, clearer, youthful skin' },
  { id: 'skin', label: 'Skin Quality', description: 'Texture, tone & overall refinement' },
];

export const SKIN_TYPES = [
  { id: 'oily', label: 'Oily' },
  { id: 'dry', label: 'Dry' },
  { id: 'combination', label: 'Combination' },
  { id: 'sensitive', label: 'Sensitive' },
];

export const QUIZ_RECOMMENDATIONS: Record<string, { title: string; description: string; treatments: string[] }> = {
  botox: {
    title: 'Neurotoxin Treatment Plan',
    description: 'Personalized Botox or Dysport injections to smooth dynamic wrinkles and prevent future lines.',
    treatments: ['Botox/Dysport Injections', 'Preventative Care', 'Follow-up at 2 weeks'],
  },
  volume: {
    title: 'Dermal Filler Customization',
    description: 'Strategic filler placement to restore youthful volume and enhance facial structure.',
    treatments: ['Premium Dermal Fillers', 'Contouring Consultation', 'Results optimization'],
  },
  glow: {
    title: 'Laser & Light Therapy',
    description: 'Advanced treatments to rejuvenate skin, improve texture, and achieve that coveted luminous complexion.',
    treatments: ['Laser Resurfacing', 'IPL Photofacial', 'Monthly maintenance'],
  },
  skin: {
    title: 'Comprehensive Skin Renewal',
    description: 'Multi-modality approach combining injectables, lasers, and professional skincare for optimal results.',
    treatments: ['Customized Treatment Plan', 'Professional Skincare', 'Regular follow-ups'],
  },
};
