import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

/**
 * Service layer for handling waitlist signups.
 */
export const waitlistService = {
  join: async (email: string) => {
    try {
      // 1. Check if already joined (optional but good practice)
      const q = query(collection(db, 'waitlist'), where('email', '==', email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        throw new Error('This email is already on our waitlist!');
      }

      // 2. Save to Firestore
      const docRef = await addDoc(collection(db, 'waitlist'), {
        email,
        createdAt: serverTimestamp(),
        source: 'waitlist_form'
      });

      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Waitlist Service Error:', error);
      throw error;
    }
  },
};
