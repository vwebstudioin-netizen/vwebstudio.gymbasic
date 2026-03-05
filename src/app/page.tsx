import { Metadata } from 'next';
import HeroSection, { IntroSection } from '@/components/HeroSection';
import TrainerSpotlight from '@/components/TrainerSpotlight';
import ScrollReveal from '@/components/ScrollReveal';
import { programClasses, siteConfig } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: `${siteConfig.name} – Transform Your Body, Forge Your Strength`,
  description:
    'Premium fitness studio in Pune offering Strength Training, HIIT, Yoga, CrossFit, Zumba & more. Join IronForge Fitness today!',
};

export default function HomePage() {
  // Featured: first 6 classes
  const featured = programClasses.slice(0, 6);

  return (
    <>
      <HeroSection />
      <IntroSection />

      {/* Featured Programs Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
                Our Programs
              </p>
              <h2 className="heading-lg text-dark mb-4">
                Forge Your Perfect Workout
              </h2>
              <div className="accent-line mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((cls, index) => (
              <ScrollReveal key={cls.id} delay={index * 0.08}>
                <div className="group bg-light rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={cls.image}
                      alt={cls.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white/90 text-xs font-bold uppercase tracking-wider bg-primary/80 px-3 py-1 rounded-full">
                      {cls.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-dark font-bold uppercase mb-2">
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
                    <p className="text-muted text-sm line-clamp-2">{cls.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link href="/programs" className="btn-primary inline-flex items-center gap-2">
                View All Programs <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trainer Spotlight */}
      <TrainerSpotlight />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=60"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="section-container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="heading-lg text-white mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Join IronForge Fitness today and get your first week free. No contracts, no pressure — just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Start Free Trial
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
