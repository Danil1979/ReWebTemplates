import React from 'react';
import { Link } from '@tanstack/react-router';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Zap } from 'lucide-react';
import EnlanceLogo from '../assets/enlance.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--forest-deep)] text-[var(--stone-soft)] pt-32 pb-12 relative overflow-hidden">
      {/* Biophilic pattern overlay */}
      <div className="absolute inset-0 pattern-forest opacity-10 pointer-events-none"></div>
      
      <div className="page-wrap px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          {/* Brand and Mission */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center no-underline mb-10 group">
              <img src={EnlanceLogo} alt="Enlance Logo" className="h-12 w-auto object-contain brightness-0 invert opacity-90 transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-[var(--stone-grey)] opacity-60 leading-relaxed mb-10 max-w-md text-lg font-light">
              Redefining luxury through the lens of <span className="text-[var(--bronze-glow)] italic font-medium">Urban Forest Connectivity</span>. A sanctuary where architecture honors the ancient rhythm of the forest.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-[var(--bronze-warm)] hover:text-[var(--forest-deep)] hover:border-transparent transition-all duration-500"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.4em] text-[var(--bronze-glow)] mb-10">The Journey</h3>
            <ul className="space-y-6">
              {['Home', 'About', 'Gallery', 'Pricing', 'Location'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-[var(--bronze-glow)] transition-all no-underline text-sm font-bold uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.4em] text-[var(--bronze-glow)] mb-10">The Connection</h3>
            <p className="text-sm text-white/50 mb-8 leading-relaxed">
              Register to receive private viewing invitations and architectural insights.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Exclusive Member Email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--bronze-warm)] transition-all placeholder:text-white/20"
              />
              <button className="absolute right-2 top-2 w-11 h-11 rounded-full bg-[var(--bronze-warm)] text-[var(--forest-deep)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg">
                <ArrowUp size={20} />
              </button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-[var(--bronze-glow)] opacity-60">
              <Zap size={14} />
              <span className="text-[10px] uppercase font-bold tracking-widest">Limited Release Phase I</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] text-white/30 uppercase tracking-[0.5em] font-bold">
            © 2026 ENLACE SHOWCASE • Pantai Sentral Park
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--bronze-glow)]"
          >
            Ascend to Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500 bg-white/5">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
