import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const emailjsConfig = {
  serviceId,
  templateId,
  publicKey,
};

// Initialize EmailJS
if (publicKey) {
  emailjs.init(publicKey);
}

export default emailjs;
