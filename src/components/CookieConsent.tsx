'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md
                     z-50 bg-dark text-white rounded-xl p-5 shadow-2xl border border-white/10"
        >
          <button
            onClick={decline}
            className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <div className="flex items-start gap-3">
            <Cookie size={24} className="text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm leading-relaxed text-white/80 mb-4">
                We use cookies to enhance your experience. By continuing to visit
                this site, you agree to our use of cookies.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={accept}
                  className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-md
                             hover:bg-primary-light transition-colors duration-300"
                >
                  Accept
                </button>
                <button
                  onClick={decline}
                  className="px-5 py-2 border border-white/20 text-white/70 text-sm font-medium rounded-md
                             hover:bg-white/10 transition-colors duration-300"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
