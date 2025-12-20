# EQI | EqualRights Institute

A premium, learning-focused web application for the **EqualRights Institute**, built to empower advocates and promote global equality through education and strategic action.

![Logo](public/favicon.png)

## 🌟 Overview

EqualRights Institute (EQI) is a digital platform designed to provide elite-level training and resources for social justice advocates. The application features a sophisticated "Modern Institute" aesthetic, leveraging nature-inspired palettes, textured background patterns, and orchestrated motion design to create a high-end educational experience.

### Key Features

- **Dynamic Learning Hub**: Orchestrated entrance animations for course and workshop exploration.
- **Elite Branding**: Custom "Evergreen" theme with gold highlights and glassmorphism.
- **Interactive Advocacy**: Real-time waitlist and newsletter integration via Firebase Firestore.
- **Automated Communication**: Seamless lead capture and auto-reply integration with EmailJS.
- **Mobile-Responsive**: Fluid layouts optimized for both desktop breakout sections and mobile touch interfaces.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend/DB**: [Firebase](https://firebase.google.com/) (Firestore & Auth)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/EqualRights.git
   cd EqualRights
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your environment variables (see below).

### Local Development

Run the development server:

```bash
npm run dev
```

### Building for Production

Create an optimized production build:

```bash
npm run build
```

---

## 🔑 Environment Variables

The project requires the following environment variables for Firebase and EmailJS integration:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📦 Deployment

The project is configured for seamless deployment on **Vite**-compatible platforms like Vercel or Netlify.

### Notes

- Ensure all environment variables are added to your deployment platform's dashboard.
- The build output is located in the `dist/` directory.

---

## 🎨 Design Philosophy

EQI follows a **"Nature-Inspired Premium"** design language:

- **Evergreen Primary**: Represents stability and growth.
- **Warm Gold/Amber**: Symbolizes enlightenment and high-value education.
- **Textured Backdrop**: Subtle dot and grid patterns provide depth without distraction.
- **Motion Orchestration**: Every element enters with intent, using staggered reveals to guide the user's attention.

---

© 2025 EqualRights Institute. All rights reserved.
