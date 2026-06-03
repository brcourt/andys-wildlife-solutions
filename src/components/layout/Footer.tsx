import { Link } from 'react-router-dom'
import { COMPANY } from '../../config'

export function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold text-base mb-2">🐾 {COMPANY.name}</p>
          <p className="text-xs leading-relaxed">Professional wildlife removal, damage repair, and cleanup serving {COMPANY.serviceArea}.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Services</p>
          <div className="flex flex-col gap-1 text-xs">
            <Link to="/services/wildlife-removal" className="hover:text-white transition-colors">Wildlife Removal</Link>
            <Link to="/services/snake-removal" className="hover:text-white transition-colors">Snake Removal</Link>
            <Link to="/services/rodent-control" className="hover:text-white transition-colors">Rodent Control</Link>
            <Link to="/services/damage-repair" className="hover:text-white transition-colors">Damage Repair</Link>
            <Link to="/services/cleanup" className="hover:text-white transition-colors">Cleanup & Decontamination</Link>
          </div>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Contact</p>
          <div className="flex flex-col gap-1 text-xs">
            <a href={COMPANY.phoneHref} className="hover:text-white transition-colors">📞 {COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">✉️ {COMPANY.email}</a>
            <p className="mt-1 text-gray-500">{COMPANY.hours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4">
        <p className="text-amber text-sm italic mb-1">{COMPANY.tagline} 🐾</p>
        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} {COMPANY.name} · Licensed & Insured · {COMPANY.city}, {COMPANY.state}</p>
      </div>

      {/* Pine tree silhouette */}
      <div aria-hidden="true" className="overflow-hidden" style={{ height: 48 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
          <defs>
            <pattern id="treeline" x="0" y="0" width="120" height="48" patternUnits="userSpaceOnUse">
              <polygon points="35,4 10,42 30,42 30,48 40,48 40,42 60,42" fill="#263d12" />
              <polygon points="90,14 69,42 85,42 85,48 95,48 95,42 111,42" fill="#263d12" />
            </pattern>
          </defs>
          <rect width="1440" height="48" fill="url(#treeline)" />
        </svg>
      </div>
    </footer>
  )
}
