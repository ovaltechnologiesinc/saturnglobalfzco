import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please write your name (at least 2 letters).' })
    .max(50, { message: 'Name is too long.' }),
  email: z
    .string()
    .email({ message: 'Please write a correct email address.' }),
  phone: z
    .string()
    .min(7, { message: 'Please enter a valid phone number.' }),
  serviceType: z.enum([
    'buy-gold',
    'sell-scrap-gold',
    'assaying-testing',
    'refining-melting',
    'vault-storage',
    'shipping-delivery',
    'mining-partnership',
    'other',
  ], {
    required_error: 'Please choose what you need help with.',
  }),
  message: z
    .string()
    .min(5, { message: 'Please write a short note about how we can help you.' })
    .max(1000, { message: 'Message is too long.' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
