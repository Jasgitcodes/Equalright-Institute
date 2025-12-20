import { User as FirebaseUser } from 'firebase/auth';

export type User = FirebaseUser | null;

export interface AuthState {
  user: User;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  signOut: () => Promise<void>;
}
