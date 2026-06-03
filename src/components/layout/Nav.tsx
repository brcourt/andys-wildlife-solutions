import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { COMPANY } from '../../config'
import { servicesData } from '../../data/services'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-forest-dark shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-lg flex items-center gap-2" onClick={() => setOpen(false)}>
          <span>🐾</span>
          <span className="hidden sm:inline">{COMPANY.name}</span>
          <span className="sm:hidden">{COMPANY.shortName}</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-sm text-white/90">
          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 hover:text-white transition-colors py-2">
              Services <span className="text-xs">▾</span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] z-50">
                {servicesData.map(s => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-2 px-4 py-2 text-charcoal hover:bg-mint-light text-sm transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span>{s.emoji}</span> {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white transition-colors'}>About</NavLink>
          <NavLink to="/faq" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white transition-colors'}>FAQ</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white' : 'hover:text-white transition-colors'}>Contact</NavLink>
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={COMPANY.phoneHref}
            className="hidden md:inline-flex items-center gap-2 bg-amber text-white font-bold px-4 py-2 rounded-md text-sm hover:bg-amber/90 transition-colors"
          >
            📞 {COMPANY.phone}
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-white p-2"
            onClick={() => setOpen(o => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile menu" className="md:hidden bg-forest-dark border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1 text-white text-sm">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Services</p>
            {servicesData.map(s => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="flex items-center gap-2 py-2 pl-3 hover:text-amber transition-colors"
                onClick={() => setOpen(false)}
              >
                <span>{s.emoji}</span> {s.title}
              </Link>
            ))}
            <div className="border-t border-white/10 mt-2 pt-2 flex flex-col gap-1">
              <Link to="/about" className="py-2 hover:text-amber transition-colors" onClick={() => setOpen(false)}>About</Link>
              <Link to="/faq" className="py-2 hover:text-amber transition-colors" onClick={() => setOpen(false)}>FAQ</Link>
              <Link to="/contact" className="py-2 hover:text-amber transition-colors" onClick={() => setOpen(false)}>Contact</Link>
            </div>
            <a href={COMPANY.phoneHref} className="mt-3 flex items-center justify-center gap-2 bg-amber text-white font-bold px-4 py-3 rounded-md">
              📞 Call {COMPANY.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
