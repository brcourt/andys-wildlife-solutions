import { Link } from 'react-router-dom'
import { COMPANY } from '../../config'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
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
      <div className="border-t border-gray-800 text-center text-xs py-4 text-gray-600">
        © {new Date().getFullYear()} {COMPANY.name} · Licensed & Insured · {COMPANY.city}, {COMPANY.state} ·{' '}
        <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
      </div>
    </footer>
  )
}
