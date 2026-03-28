import React, { useState } from 'react';
import type { FloorPlan } from '../types/property';
import { Maximize2, Tag } from 'lucide-react';

interface PricingTableProps {
  pricing: FloorPlan[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ pricing }) => {
  const [activePlan, setActivePlan] = useState<number>(0);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="page-wrap px-6 md:px-12">
        <div className="text-center mb-16 reveal-up">
          <span className="text-xs uppercase font-bold tracking-[0.4em] text-[var(--gold-accent)] mb-4 block">Selection</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--botanical-green)]">Floor Plans & Pricing</h2>
          <div className="w-20 h-1 bg-[var(--gold-accent)] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* List of Plans */}
          <div className="lg:col-span-4 space-y-4 reveal-up">
            {pricing.map((plan, index) => (
              <button
                key={index}
                onClick={() => setActivePlan(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activePlan === index 
                    ? 'border-[var(--gold-accent)] bg-[var(--botanical-green)] text-white shadow-xl' 
                    : 'border-[var(--botanical-green)]/10 bg-[var(--petal-cream)]/30 text-[var(--botanical-green)] hover:border-[var(--gold-accent)]/50'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-serif font-bold">{plan.unitType}</h3>
                  <div className={`p-2 rounded-full ${activePlan === index ? 'bg-white/20' : 'bg-[var(--botanical-green)]/5'}`}>
                    <Maximize2 size={16} />
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm opacity-80">
                  <span className="font-bold">{plan.sizeSqFt} SQ. FT.</span>
                  <span className="w-1 h-1 rounded-full bg-current"></span>
                  <span className="flex items-center gap-1"><Tag size={12} /> From {plan.startingPrice}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Plan Layout Display */}
          <div className="lg:col-span-8 reveal-up">
            <div className="bg-[var(--petal-cream)] rounded-3xl p-8 md:p-12 border border-[var(--botanical-green)]/5 shadow-inner relative flex items-center justify-center">
              <div className="aspect-[4/3] w-full relative group">
                {pricing[activePlan].layoutImage ? (
                  <img 
                    src={pricing[activePlan].layoutImage} 
                    alt={`${pricing[activePlan].unitType} Layout`} 
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center opacity-30">
                    <Maximize2 size={64} className="mx-auto mb-4" />
                    <p className="font-serif italic">Layout Image Placeholder</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
