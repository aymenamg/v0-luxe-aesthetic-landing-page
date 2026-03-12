'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Do injectables hurt?",
    answer: "Your comfort is our top priority. We use industry-leading topical numbing creams and specialized techniques to ensure treatments are virtually painless. Most clients describe the sensation as a tiny pinch that disappears instantly."
  },
  {
    question: "Will I look 'done' or unnatural?",
    answer: "Never. Elena's entire philosophy is built on 'undetectable enhancements.' We believe in restoring your natural bone structure and hydration, not changing your face. People will tell you that you look incredibly rested, but they won't know why."
  },
  {
    question: "How long do results last?",
    answer: "This depends entirely on the treatment and your unique biology. Neuromodulators (like Botox) typically last 3-4 months, while dermal fillers can last anywhere from 9 to 18 months. We will map out a customized maintenance plan during your consultation."
  },
  {
    question: "Is there any downtime after treatments?",
    answer: "Most of our signature treatments are 'lunchtime procedures' with zero to minimal downtime. You may experience slight redness or minor swelling, but you can typically return to your normal routine immediately."
  },
  {
    question: "How do I know which treatment is right for me?",
    answer: "You don't need to know exactly what you need before you arrive! During your complimentary consultation, Elena will perform a comprehensive facial analysis, listen to your goals, and recommend a personalized, step-by-step treatment plan."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            initial={false}
            animate={{ backgroundColor: isOpen ? 'rgb(250 250 250)' : 'transparent' }}
            className={`border border-black/5 rounded-2xl overflow-hidden transition-colors duration-300 ${
              isOpen ? 'shadow-sm' : ''
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl font-medium text-foreground pr-8">
                {faq.question}
              </span>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground/50 hover:bg-black/5'
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 text-foreground/70 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
