import { COMPANY } from '../../config'

const features = [
  { icon: '🔍', title: 'Thorough Inspections', description: 'We find every entry point — not just the obvious one.' },
  { icon: '🛡️', title: 'Licensed & Insured', description: 'Fully covered so you have nothing to worry about.' },
  { icon: '🏠', title: 'Full-Service', description: 'Removal, repair, and cleanup — one call covers it all.' },
  { icon: '📍', title: 'Local Expert', description: `We know the wildlife in ${COMPANY.city} — and how they get in.` },
]

export function WhyAndy() {
  return (
    <section className="bg-mint-light py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-forest-dark text-center mb-10">Why Homeowners Choose Andy</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map(f => (
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-forest-dark mb-1">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
