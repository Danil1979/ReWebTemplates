import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--petal-cream)]/80 backdrop-blur-md border-b border-[var(--botanical-green)]/10">
      <nav className="page-wrap px-6 md:px-12 flex items-center justify-between h-[var(--header-height)]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <div className="w-10 h-10 rounded-full bg-[var(--botanical-green)] flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-[var(--gold-accent)] font-serif text-xl font-bold">R</span>
          </div>
          <span className="font-serif text-xl font-bold text-[var(--botanical-green)] tracking-tight">
            NARA <span className="text-xs uppercase font-sans font-normal tracking-[0.2em] block -mt-1 opacity-70">Showcase</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="nav-link" activeProps={{ className: 'nav-link is-active' }}>
            Home
          </Link>
          <a href="#about" className="nav-link">About</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#contact" className="btn-primary no-underline text-xs">Register Interest</a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-[var(--botanical-green)]">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
