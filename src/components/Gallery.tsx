import React from 'react';
import type { GalleryItem } from '../types/property';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <section id="gallery" className="py-32 bg-transparent relative">
      <div className="page-wrap px-6 md:px-12">
        <div className="text-center mb-24 reveal-up">
          <span className="text-[10px] uppercase font-bold tracking-[0.6em] text-[var(--bronze-warm)] mb-6 block">The Perspective</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[var(--forest-deep)] mb-8">Visual <span className="italic font-light text-[var(--bronze-warm)]">Immersion</span></h2>
          <div className="w-24 h-px bg-[var(--bronze-warm)] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-[var(--stone-grey)] shadow-2xl reveal-up" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                {item.type === 'image' ? (
                  <img 
                    src={item.url} 
                    alt={item.caption || `Enlace Gallery ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                ) : (
                  <video 
                    src={item.url} 
                    poster={item.thumbnailUrl}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    muted
                    autoPlay
                    loop
                  />
                )}
              </div>
              
              {/* Luxury Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)] via-[var(--forest-deep)]/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-700 flex flex-col justify-end p-10">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                  <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[var(--bronze-glow)] mb-3 block">View Detail</span>
                  <h3 className="text-white font-serif text-3xl font-bold leading-tight">
                    {item.caption || "Enlace Suites"}
                  </h3>
                  <div className="w-12 h-px bg-[var(--bronze-glow)] mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300 origin-left"></div>
                </div>
              </div>
              
              {/* Glass reflection effect on corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
