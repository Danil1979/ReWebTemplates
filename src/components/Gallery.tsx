import React from 'react';
import type { GalleryItem } from '../types/property';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="page-wrap px-6 md:px-12">
        <div className="text-center mb-16 reveal-up">
          <span className="text-xs uppercase font-bold tracking-[0.4em] text-[var(--gold-accent)] mb-4 block">Perspective</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--botanical-green)]">The Visual Showcase</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-50 reveal-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-[4/5] overflow-hidden">
                {item.type === 'image' ? (
                  <img 
                    src={item.url} 
                    alt={item.caption || `Gallery item ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <video 
                    src={item.url} 
                    poster={item.thumbnailUrl}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    muted
                    autoPlay
                    loop
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--botanical-green)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                {item.caption && (
                  <p className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
