'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Flame, Dumbbell, User } from 'lucide-react';

interface ClassData {
  id: number;
  name: string;
  category: string;
  image: string;
  difficulty: string;
  duration: string;
  calories: string;
  trainer: string;
  schedule: string;
  description: string;
}

interface ClassModalProps {
  classData: ClassData | null;
  onClose: () => void;
}

export default function ClassModal({ classData, onClose }: ClassModalProps) {
  if (!classData) return null;

  const difficultyClass =
    classData.difficulty === 'Beginner'
      ? 'difficulty-beginner'
      : classData.difficulty === 'Intermediate'
      ? 'difficulty-intermediate'
      : 'difficulty-advanced';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-dark-light rounded-2xl overflow-hidden max-w-lg w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Header */}
          <div className="relative h-56 sm:h-64">
            <Image
              src={classData.image}
              alt={classData.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 512px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark/60 flex items-center justify-center
                         text-white/80 hover:text-white hover:bg-primary transition-all duration-300"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-4 left-6">
              <span className={`difficulty-badge ${difficultyClass}`}>
                {classData.difficulty}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-display text-2xl text-white font-bold uppercase mb-2">
              {classData.name}
            </h3>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              {classData.category}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock size={16} className="text-primary shrink-0" />
                <span>{classData.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Flame size={16} className="text-accent shrink-0" />
                <span>{classData.calories} cal</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <User size={16} className="text-primary shrink-0" />
                <span>{classData.trainer}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Dumbbell size={16} className="text-accent shrink-0" />
                <span>{classData.category}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {classData.description}
            </p>

            {/* Schedule */}
            <div className="bg-dark rounded-lg p-4 mb-6">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Schedule</p>
              <p className="text-white font-medium text-sm">{classData.schedule}</p>
            </div>

            {/* CTA */}
            <a href="/contact" className="btn-primary w-full text-center">
              Enquire About This Class
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
