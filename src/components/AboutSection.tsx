import React from 'react';

interface AboutSectionProps {
  about: string;
  name: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about, name }) => {
  return (
    <section id="about" className="py-24 bg-[var(--petal-cream)]">
      <div className="page-wrap px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-up">
            <span className="text-xs uppercase font-bold tracking-[0.4em] text-[var(--gold-accent)] mb-4 block">The Concept</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Nature’s Tender Embrace in a Modern Sanctuary
            </h2>
            <div className="w-20 h-1 bg-[var(--gold-accent)] mb-8"></div>
            <p className="text-xl leading-relaxed text-[var(--slate-ink)] opacity-80 mb-6 font-light">
              {about}
            </p>
            <p className="text-lg leading-relaxed text-[var(--slate-ink)] opacity-70 italic">
              Experience the harmony of urban convenience and botanical tranquility.
            </p>
          </div>
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl reveal-up">
            <img 
              src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80" 
              alt="Nature's Embrace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--botanical-green)]/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
