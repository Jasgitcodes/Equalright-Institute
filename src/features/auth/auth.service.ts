import { 
  signOut as firebaseSignOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

/**
 * Service layer for authentication.
 * Enforces strict separation of concerns by wrapping Firebase logic.
 */
export const authService = {
  /**
   * Listen for authentication state changes.
   */
  // eslint-disable-next-line no-unused-vars
  subscribeToAuthChanges: (callback: (user: FirebaseUser | null) => void) => {
    return onAuthStateChanged(auth, callback);
  },

  /**
   * Log the current user out.
   */
  signOut: async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  },
};
