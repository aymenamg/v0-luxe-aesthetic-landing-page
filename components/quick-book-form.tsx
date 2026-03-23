'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SERVICES } from '@/lib/data';
import { quickBookSchema, type QuickBookFormData } from '@/lib/schemas';
import { Loader2 } from 'lucide-react';

interface QuickBookFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function QuickBookForm({ onSuccess, className = '' }: QuickBookFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<QuickBookFormData>({
    resolver: zodResolver(quickBookSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
    },
  });

  const onSubmit = async (data: QuickBookFormData) => {
    setIsLoading(true);
    try {
      // Call actual backend endpoint
      console.log('[v0] Form data:', data);
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          skinType: 'Unknown',
          goal: 'General Consultation',
          source: 'quick-book',
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      toast.success("Booking request received! We'll contact you within 24 hours.");
      form.reset();
      onSuccess?.();
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground text-sm">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground text-sm">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground text-sm">Phone (10 digits)</FormLabel>
              <FormControl>
                <Input
                  placeholder="5551234567"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground text-sm">Service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-card border-border">
                  {SERVICES.map((service) => (
                    <SelectItem key={service.id} value={service.id} className="text-foreground">
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />

        <div className="space-y-4 pt-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Booking...' : 'Request Booking'}
          </Button>
          <div className="text-center space-y-1">
            <p className="text-xs text-foreground/60 flex items-center justify-center gap-1.5">
              <span role="img" aria-label="lock">🔒</span> HIPAA Compliant & Secure
            </p>
            <p className="text-[11px] text-foreground/40 italic">No credit card required to request a consultation.</p>
          </div>
        </div>
      </form>
    </Form>
  );
}
