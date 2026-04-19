import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import MapImg from '../assets/MapLocation.jpg';

interface LocationSectionProps {
  location: {
    address: string;
    highlights: string[];
    mapImageUrl?: string;
  };
}

export const LocationSection: React.FC<LocationSectionProps> = ({ location }) => {
  return (
    <section id="location" className="py-32 bg-transparent relative">
      <div className="page-wrap px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative group reveal-up">
            <div className="absolute inset-0 bg-[var(--forest-deep)]/10 rounded-[3rem] -rotate-3 transform scale-95 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-3xl border-[12px] border-white/80 backdrop-blur-xl">
              <img 
                src={MapImg} 
                alt="Enlace Suites Strategic Map" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
              />
              {/* Glass Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 pointer-events-none" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal-up">
            <span className="text-[10px] uppercase font-bold tracking-[0.6em] text-[var(--bronze-warm)] mb-6 block">Strategic Connectivity</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[var(--forest-deep)] mb-10">Where City <br/><span className="italic font-light text-[var(--bronze-warm)]">Meets Forest</span></h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-[var(--forest-deep)]/5 flex items-center justify-center shrink-0 border border-[var(--bronze-warm)]/10 group-hover:bg-[var(--bronze-warm)] transition-colors duration-500">
                  <MapPin className="text-[var(--bronze-warm)] group-hover:text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--forest-deep)]/40 mb-2">Address</h3>
                  <p className="text-xl text-[var(--forest-deep)] font-medium leading-relaxed">
                    {location.address}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--forest-deep)]/40">The Connectivity Link</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {location.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 border border-white/60 shadow-sm backdrop-blur-md hover:border-[var(--bronze-warm)]/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[var(--bronze-warm)] shadow-[0_0_10px_rgba(166,124,82,0.5)]"></div>
                      <span className="text-sm font-bold text-[var(--forest-deep)]/80 uppercase tracking-wider">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
