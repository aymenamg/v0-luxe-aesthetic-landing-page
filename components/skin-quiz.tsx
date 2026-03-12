'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QUIZ_GOALS, SKIN_TYPES, QUIZ_RECOMMENDATIONS } from '@/lib/data';
import { quizSchema, type QuizFormData } from '@/lib/schemas';
import { ChevronRight, Check } from 'lucide-react';

type QuizStep = 'goal' | 'skin' | 'contact' | 'recommendation';

export default function SkinQuiz() {
  const [step, setStep] = useState<QuizStep>('goal');
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedSkinType, setSelectedSkinType] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [quizResult, setQuizResult] = useState<{ goal: string; skinType: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    mode: 'onBlur',
  });

  const onSubmitContact = async (data: QuizFormData) => {
    setIsLoading(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show recommendation
      setQuizResult({ goal: data.goal, skinType: data.skinType });
      setStep('recommendation');
      toast.success('Quiz completed! Check your recommendations below.');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
  };

  const goToSkinType = async () => {
    if (!selectedGoal) {
      toast.error('Please select a treatment goal');
      return;
    }
    setStep('skin');
  };

  const handleSkinTypeSelect = (skinId: string) => {
    setSelectedSkinType(skinId);
  };

  const goToContact = () => {
    if (!selectedSkinType) {
      toast.error('Please select your skin type');
      return;
    }
    setStep('contact');
  };

  const handleSubmitClick = async () => {
    const isValid = await trigger();
    if (isValid) {
      const formData = getValues();
      onSubmitContact({ ...formData, goal: selectedGoal, skinType: selectedSkinType });
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Personalized Path</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Find Your Perfect Treatment</h2>
        <p className="text-foreground/70 text-lg">Let Elena understand your goals and skin type for personalized recommendations</p>
      </div>
      <AnimatePresence mode="wait">
        {step === 'goal' && (
          <motion.div
            key="goal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">What's your primary goal?</h3>
                <p className="text-muted-foreground">Let's find the perfect treatment for you</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {QUIZ_GOALS.map((goal) => (
                  <motion.button
                    key={goal.id}
                    onClick={() => handleGoalSelect(goal.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${selectedGoal === goal.id
                        ? 'border-accent bg-accent/10'
                        : 'border-border bg-card hover:border-accent/50'
                      }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="font-semibold text-foreground">{goal.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
                  </motion.button>
                ))}
              </div>

              <Button
                onClick={goToSkinType}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Continue <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 'skin' && (
          <motion.div
            key="skin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">What's your skin type?</h3>
                <p className="text-muted-foreground">This helps us customize your treatment plan</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {SKIN_TYPES.map((type) => (
                  <motion.button
                    key={type.id}
                    onClick={() => handleSkinTypeSelect(type.id)}
                    className={`p-3 rounded-lg border-2 text-center transition-all ${selectedSkinType === type.id
                        ? 'border-accent bg-accent/10'
                        : 'border-border bg-card hover:border-accent/50'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="font-medium text-foreground">{type.label}</p>
                  </motion.button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setStep('goal')}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  Back
                </Button>
                <Button
                  onClick={goToContact}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Continue <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 bg-card border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Complete Your Profile</h3>

              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Enter your name"
                    className="mt-2 bg-background border-border"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="you@example.com"
                    className="mt-2 bg-background border-border"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground">
                    Phone (10 digits)
                  </Label>
                  <Input
                    id="phone"
                    {...register('phone')}
                    placeholder="1234567890"
                    className="mt-2 bg-background border-border"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={() => setStep('skin')}
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={handleSubmitClick}
                      disabled={isLoading}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {isLoading ? 'Submitting...' : `See ${QUIZ_GOALS.find(g => g.id === selectedGoal)?.label || ''} Recommendations`}
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-foreground/50 flex items-center justify-center gap-1.5">
                      <span role="img" aria-label="lock">🔒</span> Your privacy is 100% guaranteed.
                    </p>
                  </div>
                </div>
              </form>
            </Card>
          </motion.div>
        )}

        {step === 'recommendation' && quizResult && (
          <motion.div
            key="recommendation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Your Personalized Plan</h3>
              </div>

              <div className="bg-card p-4 rounded-lg mb-6 border border-border">
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {QUIZ_RECOMMENDATIONS[quizResult.goal]?.title}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {QUIZ_RECOMMENDATIONS[quizResult.goal]?.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Recommended treatments:</p>
                  <ul className="space-y-1">
                    {QUIZ_RECOMMENDATIONS[quizResult.goal]?.treatments.map((treatment, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Schedule Your Consultation
              </Button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
