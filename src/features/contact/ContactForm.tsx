import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from './contact.schema';
import { contactService } from './contact.service';
import { useFormStatus } from '@/hooks/useFormStatus';

export const ContactForm: React.FC = () => {
  const { status, message, setLoading, setSuccess, setError, isLoading } = useFormStatus();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading();
    try {
      await contactService.sendEmail(data);
      setSuccess('Your message has been sent successfully!');
      reset();
    } catch {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg border shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
          {message}
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            id="name"
            {...register('name')}
            className={`w-full h-10 px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.name ? 'border-red-500' : ''}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={`w-full h-10 px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.email ? 'border-red-500' : ''}`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
          <input
            id="subject"
            {...register('subject')}
            className={`w-full h-10 px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.subject ? 'border-red-500' : ''}`}
            placeholder="How can we help?"
          />
          {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            {...register('message')}
            rows={5}
            className={`w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Tell us more about your inquiry..."
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};
