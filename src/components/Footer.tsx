import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const socialIcons = [
  { icon: Instagram, href: siteConfig.socialLinks.instagram, label: 'Instagram' },
  { icon: Facebook, href: siteConfig.socialLinks.facebook, label: 'Facebook' },
  { icon: Twitter, href: siteConfig.socialLinks.twitter, label: 'Twitter' },
  { icon: Youtube, href: siteConfig.socialLinks.youtube, label: 'YouTube' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/70">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-white font-bold mb-4 uppercase tracking-wider">
              Iron<span className="text-primary">Forge</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                             hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-300 hover:pl-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-white font-semibold mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Forged with 💪 for fitness</p>
        </div>
      </div>
    </footer>
  );
}
