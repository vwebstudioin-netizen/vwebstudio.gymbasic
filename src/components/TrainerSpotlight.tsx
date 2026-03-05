'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck } from 'lucide-react';
import { trainerSpotlight } from '@/lib/data';

export default function TrainerSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-dark text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={trainerSpotlight.image}
                alt={trainerSpotlight.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 md:right-6 bg-primary rounded-xl p-5 shadow-2xl"
            >
              <div className="flex gap-6 text-white">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold">{trainerSpotlight.stats.experience}</p>
                  <p className="text-xs uppercase tracking-wider text-white/80">Years</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-bold">{trainerSpotlight.stats.members}</p>
                  <p className="text-xs uppercase tracking-wider text-white/80">Members</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-bold">{trainerSpotlight.stats.certifications}</p>
                  <p className="text-xs uppercase tracking-wider text-white/80">Certs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
              Meet Your Coach
            </p>
            <h2 className="heading-lg text-white mb-2">{trainerSpotlight.name}</h2>
            <p className="text-accent font-semibold mb-6">{trainerSpotlight.title}</p>
            <p className="text-white/70 leading-relaxed mb-8">
              {trainerSpotlight.bio}
            </p>

            {/* Specialties */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trainerSpotlight.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm text-white/80 font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* Quick Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Award size={18} className="text-primary" />
                <span>ACE Certified Personal Trainer</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <ShieldCheck size={18} className="text-primary" />
                <span>CrossFit Level 2 Trainer</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Users size={18} className="text-primary" />
                <span>Group & Individual Sessions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
