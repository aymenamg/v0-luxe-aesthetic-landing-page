'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<QuickBookFormData>({
    resolver: zodResolver(quickBookSchema),
    defaultValues: {
      service: '',
    },
  });

  const selectedService = watch('service');

  const onSubmit = async (data: QuickBookFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call - Replace with actual backend call
      console.log('[v0] Form data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Booking request received! We\'ll contact you within 24 hours.');
      reset();
      onSuccess?.();
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
      <div>
        <Label htmlFor="name" className="text-foreground text-sm">
          Name
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Your name"
          className="mt-2 bg-background border-border text-foreground placeholder:text-muted-foreground"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground text-sm">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="you@example.com"
          className="mt-2 bg-background border-border text-foreground placeholder:text-muted-foreground"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="phone" className="text-foreground text-sm">
          Phone (10 digits)
        </Label>
        <Input
          id="phone"
          {...register('phone')}
          placeholder="5551234567"
          className="mt-2 bg-background border-border text-foreground placeholder:text-muted-foreground"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <Label htmlFor="service" className="text-foreground text-sm">
          Service
        </Label>
        <Select value={selectedService} onValueChange={(value) => setValue('service', value)}>
          <SelectTrigger className="mt-2 bg-background border-border text-foreground">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            {SERVICES.map((service) => (
              <SelectItem key={service.id} value={service.id} className="text-foreground">
                {service.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? 'Booking...' : 'Request Booking'}
      </Button>
    </form>
  );
}
