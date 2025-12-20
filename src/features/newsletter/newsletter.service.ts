import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

/**
 * Service layer for handling newsletter subscriptions.
 */
export const newsletterService = {
  subscribe: async (email: string) => {
    try {
      // 1. Check if already subscribed
      const q = query(collection(db, 'subscribers'), where('email', '==', email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        throw new Error('You are already subscribed to our newsletter!');
      }

      // 2. Save to Firestore
      const docRef = await addDoc(collection(db, 'subscribers'), {
        email,
        subscribedAt: serverTimestamp(),
        status: 'active',
        source: 'footer_newsletter'
      });

      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Newsletter Service Error:', error);
      throw error;
    }
  },
};
