import { createFileRoute } from '@tanstack/react-router'
import AboutSection from '../components/AboutSection'
import Gallery from '../components/Gallery'
import FacilitySection from '../components/FacilitySection'
import LocationSection from '../components/LocationSection'
import PricingTable from '../components/PricingTable'
import ContactSection from '../components/ContactSection'
import ContactWidgets from '../components/ContactWidgets'
import { mockProperty } from '../utils/mockData'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const property = mockProperty;

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Artist Impression Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80" 
            alt="Artist's Impression" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>

        <div className="page-wrap relative z-10 px-6 text-center text-white reveal-up">
          <p className="mb-6 uppercase tracking-[0.4em] text-sm font-bold opacity-90">{property.tagline}</p>
          <h1 className="mb-8 text-5xl md:text-8xl font-serif font-bold leading-tight text-white drop-shadow-2xl">
            {property.name}
          </h1>
          <p className="mb-12 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed opacity-90">
            {property.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#about" className="btn-primary min-w-[200px] border-white/20 no-underline flex items-center justify-center">
              Discover More
            </a>
            <a href="#gallery" className="btn-outline min-w-[200px] !text-white !border-white/50 hover:!bg-white hover:!text-[var(--botanical-green)] no-underline flex items-center justify-center">
              Visual Tour
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Scroll</span>
          <div className="w-px h-10 bg-white/30"></div>
        </div>
      </section>

      <AboutSection about={property.about} name={property.name} />
      <Gallery items={property.gallery} />
      <FacilitySection facilities={property.facilities} />
      <LocationSection location={property.location} />
      <PricingTable pricing={property.pricing} />
      <ContactSection contact={property.contact} />
      <ContactWidgets contact={property.contact} />
    </main>
  )
}
