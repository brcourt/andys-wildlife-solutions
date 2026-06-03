import type { ServiceData } from '../types'
import { Hero } from '../components/sections/Hero'
import { CtaBand } from '../components/sections/CtaBand'
import { WarningSign } from '../components/ui/WarningSign'
import { ProcessStep } from '../components/ui/ProcessStep'
import { BeforeAfter } from '../components/ui/BeforeAfter'

interface ServicePageProps {
  service: ServiceData
}

export function ServicePage({ service }: ServicePageProps) {
  return (
    <>
      <Hero
        variant="service"
        headline={service.title}
        subheadline={service.heroDescription}
        breadcrumb="Services"
      />

      {/* Animals section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-forest-dark mb-6">{service.animalsLabel}</h2>
          <div className="flex flex-wrap gap-3">
            {service.animals.map((animal) => (
              <span
                key={animal.name}
                className="bg-mint-light text-forest-dark rounded-full px-3 py-1 text-sm font-medium flex items-center gap-1"
              >
                <span>{animal.emoji}</span>
                <span>{animal.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs section */}
      <section className="bg-mint-light">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-forest-dark mb-6">{service.warningSignsLabel}</h2>
          <div className="space-y-4">
            {service.warningSigns.map((sign) => (
              <WarningSign key={sign.text} sign={sign} />
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-forest-dark mb-6">Our Process</h2>
          <div className="space-y-6">
            {service.processSteps.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After section */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-forest-dark mb-6">Before & After</h2>
          <BeforeAfter data={service.beforeAfter} />
          <p className="text-center text-charcoal mt-4">{service.beforeAfter.caption}</p>
        </div>
      </section>

      <CtaBand
        headline={service.ctaBandHeadline}
        subheadline={service.ctaBandSubheadline}
      />
    </>
  )
}
