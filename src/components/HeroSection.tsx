'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { heroSlides, siteConfig } from '@/lib/data';

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + heroSlides.length) % heroSlides.length);
    },
    []
  );

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[current].image}
            alt={heroSlides[current].title}
            fill
            priority={current === 0}
            className="object-cover animate-hero-zoom"
            sizes="100vw"
          />
          {/* Gradient Overlay — dark & dramatic for gym */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/80" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-bold">
                {heroSlides[current].subtitle}
              </p>
              <h1 className="heading-xl text-white mb-6">
                {heroSlides[current].title}
              </h1>
              <div className="accent-line mx-auto" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 flex items-center justify-center
                   text-white/60 hover:text-white bg-dark/20 hover:bg-primary/80
                   rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 flex items-center justify-center
                   text-white/60 hover:text-white bg-dark/20 hover:bg-primary/80
                   rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-primary w-8'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}

// ---- Intro Section (exported for Home page) ----
export function IntroSection() {
  return (
    <section className="py-20 md:py-28 bg-light">
      <div className="section-container text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
            Welcome to
          </p>
          <h2 className="heading-lg text-dark mb-6">{siteConfig.name}</h2>
          <div className="accent-line mx-auto mb-8" />
          <p className="text-muted text-lg leading-relaxed">
            We are a premium fitness studio dedicated to transforming lives through 
            expert coaching, world-class equipment, and an unstoppable community. 
            Whether you&apos;re lifting for the first time or chasing a new PR, 
            IronForge is where your strongest self is forged.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
