import React, { useState } from 'react';
import BuildingImg from '../assets/Building.jpg';
import { Info, Calendar, Home, Layers, Clock, Tag, Maximize } from 'lucide-react';
import { ImageModal } from './ImageModal';

interface AboutSectionProps {
  about: string;
  name: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const specs = [
    { label: 'Unit Type', value: 'Serviced Apartment', icon: Home },
    { label: 'Built-up', value: '474 - 1733 sqft', icon: Maximize },
    { label: 'Total Units', value: '438', icon: Layers },
    { label: 'Tenure', value: 'Leasehold (99 Years)', icon: Clock },
    { label: 'Estimated Completion', value: 'Q4 2029', icon: Calendar },
    { label: 'Priced From', value: 'RM438,000 onwards', icon: Tag },
  ];

  return (
    <section id="about" className="py-32 bg-transparent relative overflow-hidden">
      <div className="page-wrap px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="reveal-up">
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12 leading-[1.1] text-[var(--forest-deep)]">
              Project <span className="italic font-light text-[var(--bronze-warm)]">Specifications</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="p-8 bg-white/60 backdrop-blur-md border border-white text-center rounded-[2rem] hover:border-[var(--bronze-warm)]/40 transition-all duration-500 group shadow-sm">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[var(--forest-deep)]/5 flex items-center justify-center text-[var(--bronze-warm)] group-hover:bg-[var(--bronze-warm)] group-hover:text-white transition-all duration-500">
                      <spec.icon size={20} />
                    </div>
                    <span className="text-[15px] text-left uppercase font-bold tracking-[0.2em] text-[var(--forest-deep)]">
                      {spec.label}
                    </span>
                  </div>
                  <p className="text-[15px] uppercase font-bold text-[var(--forest-deep)] leading-tight">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="relative group reveal-up lg:mt-12 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="absolute -inset-4 border border-[var(--bronze-warm)]/20 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
            <div className="relative h-[650px] overflow-hidden rounded-2xl shadow-3xl">
              <img 
                src={BuildingImg} 
                alt="Enlace Suites Architecture" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/40 to-transparent" />
              
              {/* Zoom Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <Maximize size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={BuildingImg}
        caption="Enlace Suites Architecture"
      />
    </section>
  );
};

export default AboutSection;
