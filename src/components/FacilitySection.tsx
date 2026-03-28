import React from 'react';
import type { PropertyFacility } from '../types/property';

interface FacilitySectionProps {
  facilities: PropertyFacility[];
}

export const FacilitySection: React.FC<FacilitySectionProps> = ({ facilities }) => {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="page-wrap px-6 md:px-12">
        <div className="text-center mb-16 reveal-up">
          <span className="text-xs uppercase font-bold tracking-[0.4em] text-[var(--gold-accent)] mb-4 block">Lifestyle</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--botanical-green)]">Exquisite Facilities</h2>
          <div className="w-20 h-1 bg-[var(--gold-accent)] mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="group flex flex-col reveal-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg border border-[var(--botanical-green)]/5">
                {facility.imageUrl ? (
                  <img 
                    src={facility.imageUrl} 
                    alt={facility.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--petal-cream)] flex items-center justify-center">
                    <span className="text-[var(--gold-accent)] font-serif italic">Facility Image</span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-serif font-bold text-[var(--botanical-green)] mb-2">{facility.name}</h3>
              {facility.description && (
                <p className="text-sm text-[var(--slate-ink)] opacity-70 leading-relaxed font-light">
                  {facility.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
