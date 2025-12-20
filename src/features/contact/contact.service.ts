import emailjs from '@/lib/emailjs';
import { emailjsConfig } from '@/lib/emailjs';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ContactFormData } from './contact.schema';

/**
 * Service layer for handling contact form submissions via EmailJS.
 */
export const contactService = {
  sendEmail: async (data: ContactFormData) => {
    try {
      // 1. Send Email via EmailJS
      const emailPromise = emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          user_name: data.name,
          user_email: data.email,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
        }
      );

      // 2. Save to Firestore
      const dbPromise = addDoc(collection(db, 'contacts'), {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        createdAt: serverTimestamp(),
        status: 'new'
      });

      // Execute both
      const [emailResponse] = await Promise.all([emailPromise, dbPromise]);
      return emailResponse;
    } catch (error) {
      console.error('Contact Service Error:', error);
      throw error;
    }
  },
};
