import React, { useState } from 'react';
import type { FloorPlan } from '../types/property';
import { Maximize2, Tag, ArrowRight } from 'lucide-react';

interface PricingTableProps {
  pricing: FloorPlan[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ pricing }) => {
  const [activePlan, setActivePlan] = useState<number>(0);

  return (
    <section id="pricing" className="py-32 bg-transparent relative overflow-hidden">
      <div className="page-wrap px-6 md:px-12">
        <div className="text-center mb-24 reveal-up">
          <span className="text-[10px] uppercase font-bold tracking-[0.6em] text-[var(--bronze-warm)] mb-6 block">The Selection</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[var(--forest-deep)] mb-8">Spatial <span className="italic font-light text-[var(--bronze-warm)]">Layout</span></h2>
          <p className="text-[var(--forest-mist)] opacity-60 max-w-2xl mx-auto font-light text-lg text-center">
            Meticulously crafted layouts designed to maximize biophilic interaction and urban functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* List of Plans */}
          <div className="lg:col-span-5 space-y-6 reveal-up">
            {pricing.map((plan, index) => (
              <button
                key={index}
                onClick={() => setActivePlan(index)}
                className={`w-full text-left p-8 rounded-[2rem] border-2 transition-all duration-500 group relative overflow-hidden ${
                  activePlan === index 
                    ? 'border-[var(--bronze-warm)] bg-[var(--forest-deep)] shadow-3xl translate-x-4' 
                    : 'border-[var(--forest-deep)]/5 bg-white/60 hover:border-[var(--bronze-warm)]/30 hover:bg-white/90 shadow-sm hover:shadow-md'
                } font-montserrat`}
              >
                {/* Active Indicator Line */}
                {activePlan === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--bronze-warm)]"></div>
                )}
                
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <h3 className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-500 ${activePlan === index ? '!text-white' : 'text-[var(--forest-deep)]'}`}>
                    {plan.unitType}
                  </h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 ${activePlan === index ? 'bg-[var(--bronze-warm)] rotate-45' : 'bg-[var(--forest-deep)]/5'}`}>
                    <ArrowRight size={20} className={activePlan === index ? 'text-[var(--forest-deep)]' : 'text-[var(--bronze-warm)]'} />
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-[14px] uppercase font-bold tracking-[0.2em] relative z-10">
                  <span className={`transition-colors duration-500 ${activePlan === index ? '!text-[var(--bronze-glow)]' : 'text-[var(--forest-deep)]/40'}`}>
                    {plan.sizeSqFt} SQ. FT.
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${activePlan === index ? 'bg-[var(--bronze-glow)]' : 'bg-[var(--bronze-warm)]/30'}`}></span>
                  <span className={`transition-colors duration-500 ${activePlan === index ? '!text-white/80' : 'text-[var(--forest-deep)]/60'}`}>
                    From {plan.startingPrice}
                  </span>
                </div>
                
                {activePlan === index && (
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[var(--bronze-warm)]/10 rounded-full blur-2xl"></div>
                )}
              </button>
            ))}
          </div>

          {/* Plan Layout Display */}
          <div className="lg:col-span-7 reveal-up">
            <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 border border-white shadow-3xl relative group">
              <div className="absolute top-10 right-10 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[var(--bronze-warm)] animate-pulse"></div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--forest-deep)]/40">Architectural Detail</span>
              </div>
              
              <div className="aspect-[4/3] w-full relative">
                {pricing[activePlan].layoutImage ? (
                  <img 
                    src={pricing[activePlan].layoutImage} 
                    alt={`${pricing[activePlan].unitType} Layout`} 
                    className="w-full h-full object-contain mix-blend-multiply transition-all duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center opacity-20">
                    <Maximize2 size={80} className="mb-6 text-[var(--forest-deep)]" />
                    <p className="font-serif italic text-2xl text-[var(--forest-deep)]">Technical Layout Rendering</p>
                  </div>
                )}
              </div>
              
              {/* Bronze Connector Path */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-[var(--bronze-warm)] to-transparent hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
