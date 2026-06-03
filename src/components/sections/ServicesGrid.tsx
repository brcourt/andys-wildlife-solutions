import { servicesData } from '../../data/services'
import { ServiceCard } from '../ui/ServiceCard'

export function ServicesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-forest-dark text-center mb-2">Our Services</h2>
        <p className="text-gray-500 text-center text-sm mb-10">Click any service to learn more</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {servicesData.map(s => (
            <ServiceCard
              key={s.slug}
              emoji={s.emoji}
              title={s.title}
              description={s.animals.map(a => a.name).join(', ')}
              to={`/services/${s.slug}`}
            />
          ))}
          <ServiceCard
            emoji="📞"
            title="Not Sure?"
            description="Call us — we'll help identify the problem"
            to="/contact"
            highlight
          />
        </div>
      </div>
    </section>
  )
}
