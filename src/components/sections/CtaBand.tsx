import { COMPANY } from '../../config'
import { Button } from '../ui/Button'

interface CtaBandProps {
  headline: string
  subheadline: string
}

export function CtaBand({ headline, subheadline }: CtaBandProps) {
  return (
    <section className="bg-forest-dark text-white py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">{headline}</h2>
        <p className="text-white/80 mb-8">{subheadline}</p>
        <Button href={COMPANY.phoneHref} variant="primary" className="text-base px-10 py-4">
          📞 Call {COMPANY.phone}
        </Button>
      </div>
    </section>
  )
}
