import { z } from 'zod';

export const quickBookSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  service: z.string().min(1, 'Please select a service'),
});

export type QuickBookFormData = z.infer<typeof quickBookSchema>;

export const quizSchema = z.object({
  goal: z.string().min(1, 'Please select a goal'),
  skinType: z.string().min(1, 'Please select your skin type'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export type QuizFormData = z.infer<typeof quizSchema>;
