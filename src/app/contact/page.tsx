import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: `Contact – ${siteConfig.name}`,
  description:
    'Get in touch with IronForge Fitness. Enquire about memberships, personal training, class schedules, or visit us in Pune.',
};

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: siteConfig.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`,
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark text-white">
        <div className="section-container text-center">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-bold">
              Get In Touch
            </p>
            <h1 className="heading-xl text-white mb-4">Contact Us</h1>
            <div className="accent-line mx-auto mb-6" />
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Ready to start your fitness journey? Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {contactInfo.map((item, index) => (
                <ScrollReveal key={item.label} delay={index * 0.1}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-muted uppercase tracking-wider font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="text-dark font-medium group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}

              {/* Hours */}
              <ScrollReveal delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted uppercase tracking-wider font-medium mb-1">
                      Working Hours
                    </p>
                    <p className="text-dark text-sm">{siteConfig.hours}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal variant="fadeRight">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
                  <h2 className="heading-md text-dark mb-2">Send a Message</h2>
                  <p className="text-muted text-sm mb-8">
                    Fill out the form below and our team will respond within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14199917038!2d73.72287814621498!3d18.524564857310045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IronForge Fitness Location"
        />
      </section>
    </>
  );
}
