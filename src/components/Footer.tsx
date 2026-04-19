import React from 'react';
import { Link } from '@tanstack/react-router';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp, Zap, Mail, MessageCircle } from 'lucide-react';
import EnlanceLogo from '../assets/enlance.png';

interface FooterProps {
  contact?: {
    email: string;
    phone: string;
    whatsapp: string;
    instagram: string;
  };
}

export default function Footer({ contact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--forest-deep)] text-[var(--stone-soft)] pt-20 pb-12 relative overflow-hidden">
      {/* Biophilic pattern overlay */}
      <div className="absolute inset-0 pattern-forest opacity-10 pointer-events-none"></div>
      
      <div className="page-wrap px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center no-underline group">
              <img src={EnlanceLogo} alt="Enlance Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90 transition-transform group-hover:scale-105" />
            </Link>
            <p className="text-[var(--stone-grey)] opacity-50 leading-relaxed max-w-sm text-sm font-light font-inter">
              Redefining luxury through the lens of <span className="text-[var(--bronze-glow)] italic font-medium">Urban Forest Connectivity</span>.
            </p>
          </div>

          {/* Contact Links in One Line */}
          {contact && (
            <div id="contact" className="flex flex-wrap items-center gap-8 md:gap-12">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 group no-underline">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--bronze-warm)]/10 transition-colors">
                  <Mail size={16} className="text-[var(--bronze-glow)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest opacity-40 font-montserrat font-bold">Email</span>
                  <span className="text-sm font-medium font-inter">{contact.email}</span>
                </div>
              </a>
              
              <a href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} className="flex items-center gap-3 group no-underline">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--bronze-warm)]/10 transition-colors">
                  <MessageCircle size={16} className="text-[var(--bronze-glow)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest opacity-40 font-montserrat font-bold">WhatsApp</span>
                  <span className="text-sm font-medium font-inter">{contact.whatsapp}</span>
                </div>
              </a>

              <a href={`https://instagram.com/${contact.instagram}`} className="flex items-center gap-3 group no-underline">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--bronze-warm)]/10 transition-colors">
                  <Instagram size={16} className="text-[var(--bronze-glow)]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest opacity-40 font-montserrat font-bold">Instagram</span>
                  <span className="text-sm font-medium font-inter">@{contact.instagram}</span>
                </div>
              </a>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] text-white/30 uppercase tracking-[0.5em] font-bold font-montserrat">
            
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--bronze-glow)] font-montserrat"
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
