import { useState } from 'react';

export type Status = 'idle' | 'loading' | 'success' | 'error';

export const useFormStatus = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const setIdle = () => setStatus('idle');
  const setLoading = () => setStatus('loading');
  const setSuccess = (msg?: string) => {
    setStatus('success');
    if (msg) setMessage(msg);
  };
  const setError = (msg: string) => {
    setStatus('error');
    setMessage(msg);
  };

  return {
    status,
    message,
    setIdle,
    setLoading,
    setSuccess,
    setError,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
};
