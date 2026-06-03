import { COMPANY } from '../../config'
import { Button } from '../ui/Button'

interface HeroProps {
  variant: 'home' | 'service'
  headline: string
  subheadline: string
  breadcrumb?: string
}

export function Hero({ variant, headline, subheadline, breadcrumb }: HeroProps) {
  const isHome = variant === 'home'
  return (
    <section className="bg-gradient-to-br from-forest-green to-forest-dark text-white">
      <div className={`max-w-6xl mx-auto px-4 text-center ${isHome ? 'py-20' : 'py-12'}`}>
        {breadcrumb && (
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">{breadcrumb}</p>
        )}
        {isHome && (
          <p className="text-white/70 text-sm uppercase tracking-widest mb-4">Serving {COMPANY.serviceArea}</p>
        )}
        <h1 className={`font-bold leading-tight mb-3 ${isHome ? 'text-5xl sm:text-6xl' : 'text-3xl sm:text-4xl'}`}>
          {headline}
        </h1>
        {isHome && (
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-5 py-1.5 text-white/80 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
            Locally Owned · Community Focused
          </div>
        )}
        <p className={`text-white/85 mb-8 max-w-xl mx-auto ${isHome ? 'text-lg' : 'text-base'}`}>
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={COMPANY.phoneHref} variant="primary" className="text-base px-8 py-4">
            📞 Call Now: {COMPANY.phone}
          </Button>
          {isHome && (
            <Button to="/services/wildlife-removal" variant="outline" className="text-base px-8 py-4 border-white/50 text-white hover:bg-white/10 hover:text-white">
              View Services
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
