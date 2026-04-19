import { Link } from '@tanstack/react-router'
import EnlanceLogo from '../assets/enlance.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--stone-soft)]/90 backdrop-blur-xl border-b border-[var(--bronze-warm)]/10">
      <nav className="page-wrap px-6 md:px-12 flex items-center justify-between h-[var(--header-height)]">
        {/* Logo */}
        <Link to="/" className="flex items-center no-underline group py-2">
          <img 
            src={EnlanceLogo} 
            alt="Enlance Logo" 
            className="h-10 w-auto object-contain brightness-0 opacity-80 transition-transform duration-500 group-hover:scale-105" 
          />
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className="nav-link" activeProps={{ className: 'nav-link is-active' }}>
            Home
          </Link>
          <a href="#about" className="nav-link">Specification</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#pricing" className="nav-link">Layout</a>
          <a href="#contact" className="btn-primary no-underline">Register Interest</a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="text-[var(--forest-deep)] p-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
