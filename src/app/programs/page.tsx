import { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import ClassGrid from '@/components/ClassGrid';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: `Programs – ${siteConfig.name}`,
  description:
    'Browse our full range of fitness programs – Strength Training, HIIT, Yoga, CrossFit, Zumba & more at IronForge Fitness, Pune.',
};

export default function ProgramsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark text-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
              What We Offer
            </p>
            <h1 className="heading-xl text-white mb-4">Our Programs</h1>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              From heavy lifts to mindful flows — find the class that ignites your fire.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Class Grid with Filters */}
      <section className="py-16 md:py-24 bg-light">
        <div className="section-container">
          <ClassGrid />
        </div>
      </section>
    </>
  );
}
