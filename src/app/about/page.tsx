import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import StatsCounter from '@/components/StatsCounter';
import FacilityGallery from '@/components/FacilityGallery';
import { siteConfig, aboutData } from '@/lib/data';
import * as LucideIcons from 'lucide-react';

export const metadata: Metadata = {
  title: `About – ${siteConfig.name}`,
  description:
    'Learn about IronForge Fitness — our story, values, world-class facility, and the team that powers your transformation.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark text-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
              Who We Are
            </p>
            <h1 className="heading-xl text-white mb-4">About IronForge</h1>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              More than a gym. A community forged in sweat, discipline, and relentless progress.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                  alt="IronForge Gym Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight">
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
                  Our Story
                </p>
                <h2 className="heading-lg text-dark mb-8">Built on Grit,{' '}
                  <span className="text-primary">Fueled by Fire</span>
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  {aboutData.story.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-light">
        <div className="section-container">
          <StatsCounter stats={aboutData.stats} />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
                What Drives Us
              </p>
              <h2 className="heading-lg text-dark mb-4">Our Core Values</h2>
              <div className="accent-line mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.values.map((val, index) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const icons = LucideIcons as any;
              const IconComponent = icons[val.icon] || LucideIcons.Star;

              return (
                <ScrollReveal key={val.title} delay={index * 0.08}>
                  <div className="glass-card p-6 text-center group hover:bg-primary hover:text-white transition-colors duration-500">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                      <IconComponent
                        size={28}
                        className="text-primary group-hover:text-white transition-colors duration-500"
                      />
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase mb-2">
                      {val.title}
                    </h3>
                    <p className="text-muted text-sm group-hover:text-white/80 transition-colors duration-500">
                      {val.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-20 md:py-28 bg-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
                Our Space
              </p>
              <h2 className="heading-lg text-dark mb-4">The IronForge Facility</h2>
              <div className="accent-line mx-auto" />
            </div>
          </ScrollReveal>

          <FacilityGallery images={aboutData.facilityImages} />
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 md:py-28 bg-dark text-white">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
                Milestones
              </p>
              <h2 className="heading-lg text-white mb-4">Achievements</h2>
              <div className="accent-line mx-auto" />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {aboutData.achievements.map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 bg-white/5 rounded-lg p-5 border border-white/10">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  <p className="text-white/80 text-sm leading-relaxed">{achievement}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
