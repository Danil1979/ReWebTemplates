import { createFileRoute } from '@tanstack/react-router'
import AboutSection from '../components/AboutSection'
import Gallery from '../components/Gallery'
import FacilitySection from '../components/FacilitySection'
import LocationSection from '../components/LocationSection'
import PricingTable from '../components/PricingTable'
import ContactWidgets from '../components/ContactWidgets'
import { mockProperty } from '../utils/mockData'
import LobbyImage from '../assets/Lobby.jpg'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const property = mockProperty;

  return (
    <main className="min-h-screen pattern-forest">
      {/* Hero section - Visual Only */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={LobbyImage} 
            alt="Enlace Suites Lobby" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest-deep)]/20 via-transparent to-[var(--stone-soft)]" />
        </div>
        
        {/* Decorative Badge */}
        <div className="absolute bottom-12 right-12 z-10 hidden md:block">
          <div className="w-32 h-32 rounded-full border border-[var(--bronze-warm)]/30 flex items-center justify-center backdrop-blur-md">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[var(--forest-deep)] text-center">Architectural<br/>Excellence</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-[var(--bronze-warm)] to-transparent"></div>
        </div>
      </section>

      {/* Vision Section - Dedicated Wording Section */}
      <section className="py-24 bg-[var(--stone-soft)] relative z-10">
        <div className="page-wrap px-6 text-center reveal-up">
          <p className="mb-8 uppercase tracking-[0.8em] text-[11px] font-bold text-[var(--bronze-warm)]">
            {property.tagline}
          </p>
          <h1 className="mb-10 text-6xl md:text-9xl font-serif font-bold leading-none text-[var(--forest-deep)]">
            {property.name}
          </h1>
          <div className="w-32 h-px bg-[var(--bronze-warm)] mx-auto mb-12 opacity-40"></div>
          <p className="mb-16 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed text-[var(--slate-ink)] opacity-80">
            {property.description}
          </p>
        </div>
      </section>

      <div className="section-link-bronze">
        <AboutSection about={property.about} name={property.name} />
      </div>
      <div className="section-link-bronze">
        <Gallery items={property.gallery} />
      </div>
      {/* <FacilitySection facilities={property.facilities} /> */}
      <div className="section-link-bronze">
        <LocationSection location={property.location} />
      </div>
      <div className="section-link-bronze">
        <PricingTable pricing={property.pricing} />
      </div>
      <ContactWidgets contact={property.contact} />
    </main>
  )
}
