'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Clock, Flame, ArrowRight } from 'lucide-react';
import { programClasses, programCategories } from '@/lib/data';
import ClassModal from './ClassModal';

export default function ClassGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedClass, setSelectedClass] = useState<typeof programClasses[0] | null>(null);

  const filteredClasses =
    activeCategory === 'All'
      ? programClasses
      : programClasses.filter((cls) => cls.category === activeCategory);

  const difficultyClass = (level: string) =>
    level === 'Beginner'
      ? 'difficulty-beginner'
      : level === 'Intermediate'
      ? 'difficulty-intermediate'
      : 'difficulty-advanced';

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {programCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 text-sm uppercase tracking-wider font-bold rounded-sm
                       transition-all duration-300 ${
                         activeCategory === cat
                           ? 'bg-primary text-white'
                           : 'bg-dark/5 text-muted hover:bg-dark/10 hover:text-dark'
                       }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Class Cards Grid */}
      <LayoutGroup>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((cls) => (
              <motion.div
                key={cls.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
                onClick={() => setSelectedClass(cls)}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={cls.image}
                    alt={cls.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`difficulty-badge ${difficultyClass(cls.difficulty)}`}>
                      {cls.difficulty}
                    </span>
                  </div>
                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/90 text-xs font-bold uppercase tracking-wider bg-primary/80 px-3 py-1 rounded-full">
                      {cls.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl text-dark font-bold uppercase mb-2 group-hover:text-primary transition-colors duration-300">
                    {cls.name}
                  </h3>

                  <div className="flex items-center gap-4 text-muted text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {cls.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame size={14} />
                      {cls.calories} cal
                    </span>
                  </div>

                  <p className="text-muted text-sm line-clamp-2 mb-4">
                    {cls.description}
                  </p>

                  <div className="flex items-center text-primary text-sm font-semibold uppercase tracking-wider group-hover:gap-2 transition-all duration-300">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {/* Class Detail Modal */}
      {selectedClass && (
        <ClassModal
          classData={selectedClass}
          onClose={() => setSelectedClass(null)}
        />
      )}
    </>
  );
}
