import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface LocationSectionProps {
  location: {
    address: string;
    highlights: string[];
    mapImageUrl?: string;
  };
}

export const LocationSection: React.FC<LocationSectionProps> = ({ location }) => {
  return (
    <section id="location" className="py-24 bg-[var(--petal-cream)]">
      <div className="page-wrap px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 reveal-up">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {/* Map Placeholder */}
              <img 
                src={location.mapImageUrl || "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"} 
                alt="Location Map" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal-up">
            <span className="text-xs uppercase font-bold tracking-[0.4em] text-[var(--gold-accent)] mb-4 block">Connections</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--botanical-green)] mb-8">Prime Location</h2>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[var(--botanical-green)]/10 flex items-center justify-center shrink-0">
                <MapPin className="text-[var(--gold-accent)]" size={20} />
              </div>
              <p className="text-xl text-[var(--slate-ink)] font-medium leading-relaxed">
                {location.address}
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-sm uppercase font-bold tracking-widest text-[var(--botanical-green)]/50">Nearby Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {location.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[var(--botanical-green)]/5 shadow-sm">
                    <Navigation className="text-[var(--gold-accent)]" size={16} />
                    <span className="text-sm font-semibold text-[var(--slate-ink)] opacity-80">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
