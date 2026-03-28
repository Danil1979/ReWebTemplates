import React from 'react';
import { Link } from '@tanstack/react-router';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--petal-cream)] border-t border-[var(--botanical-green)]/10 pt-24 pb-12">
      <div className="page-wrap px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand and Mission */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 no-underline mb-8">
              <div className="w-10 h-10 rounded-full bg-[var(--botanical-green)] flex items-center justify-center">
                <span className="text-[var(--gold-accent)] font-serif text-xl font-bold">R</span>
              </div>
              <span className="font-serif text-xl font-bold text-[var(--botanical-green)] tracking-tight">
                NARA <span className="text-xs uppercase font-sans font-normal tracking-[0.2em] block -mt-1 opacity-70">Showcase</span>
              </span>
            </Link>
            <p className="text-[var(--slate-ink)] opacity-70 leading-relaxed mb-8 max-w-sm">
              Crafting premium real-estate experiences through architectural excellence and nature-inspired design. NARA represents the pinnacle of modern sanctuary living.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-[var(--botanical-green)]/10 flex items-center justify-center text-[var(--botanical-green)] hover:bg-[var(--botanical-green)] hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm uppercase font-bold tracking-[0.2em] text-[var(--botanical-green)] mb-8">Discovery</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Gallery', 'Pricing', 'Location'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[var(--slate-ink)] opacity-70 hover:opacity-100 hover:text-[var(--gold-accent)] transition-all no-underline text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Support */}
          <div className="lg:col-span-2">
            <h3 className="text-sm uppercase font-bold tracking-[0.2em] text-[var(--botanical-green)] mb-8">Legal</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[var(--slate-ink)] opacity-70 hover:opacity-100 hover:text-[var(--gold-accent)] transition-all no-underline text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Hint */}
          <div className="lg:col-span-4">
            <h3 className="text-sm uppercase font-bold tracking-[0.2em] text-[var(--botanical-green)] mb-8">Exclusivity</h3>
            <p className="text-sm text-[var(--slate-ink)] opacity-70 mb-6">
              Subscribe to receive early-bird updates and exclusive project insights.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white border border-[var(--botanical-green)]/10 rounded-full px-6 py-3 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[var(--gold-accent)]/20"
              />
              <button className="w-12 h-12 rounded-full bg-[var(--botanical-green)] text-white flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[var(--botanical-green)]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[var(--slate-ink)] opacity-50 uppercase tracking-widest font-bold">
            © 2026 NARA SHOWCASE. ALL RIGHTS RESERVED.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-[var(--botanical-green)]"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-[var(--botanical-green)]/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
