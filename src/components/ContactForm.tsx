'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  fitnessGoal: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const fitnessGoals = [
  'Weight Loss',
  'Muscle Building',
  'General Fitness',
  'Flexibility & Yoga',
  'Sports Performance',
  'Rehabilitation',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    fitnessGoal: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', fitnessGoal: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border border-dark/10 rounded-lg text-dark placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 12345"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="fitnessGoal" className="block text-sm font-medium text-dark mb-1.5">
            Fitness Goal
          </label>
          <select
            id="fitnessGoal"
            name="fitnessGoal"
            value={formData.fitnessGoal}
            onChange={handleChange}
            className={`${inputClass} ${!formData.fitnessGoal ? 'text-muted/50' : ''}`}
          >
            <option value="">Select a goal...</option>
            {fitnessGoals.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your fitness goals, preferred schedule, or any questions..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </motion.button>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg text-sm"
        >
          <CheckCircle size={18} />
          Thank you! We&apos;ll get back to you within 24 hours.
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg text-sm"
        >
          <AlertCircle size={18} />
          Something went wrong. Please try again or call us directly.
        </motion.div>
      )}
    </form>
  );
}
