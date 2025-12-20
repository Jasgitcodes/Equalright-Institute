import React, { useState } from 'react';
import { waitlistService } from './waitlist.service';
import { useFormStatus } from '@/hooks/useFormStatus';

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const { status, message, setLoading, setSuccess, setError, isLoading } = useFormStatus();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading();
    try {
      await waitlistService.join(email);
      setSuccess('Successfully joined our waitlist! We will be in touch soon.');
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join waitlist.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 border rounded-xl shadow-lg bg-card text-center animate-in zoom-in duration-500">
      <h3 className="text-2xl font-bold mb-2">Be the First to Know</h3>
      <p className="text-muted-foreground mb-6">
        Join our exclusive waitlist and get early access to our upcoming educational platform.
      </p>

      {status === 'success' ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-12 px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
          />
          {status === 'error' && (
            <p className="text-sm text-red-500 text-left">{message}</p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-transform active:scale-95 disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Secure My Spot'}
          </button>
          <p className="text-[10px] text-muted-foreground italic">
            By joining, you agree to our privacy policy and terms.
          </p>
        </form>
      )}
    </div>
  );
};
