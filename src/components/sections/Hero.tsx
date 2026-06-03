import { COMPANY } from '../../config'
import { Button } from '../ui/Button'

interface HeroProps {
  variant: 'home' | 'service'
  headline: string
  subheadline: string
  breadcrumb?: string
  imageSrc?: string
}

export function Hero({ variant, headline, subheadline, breadcrumb, imageSrc }: HeroProps) {
  const isHome = variant === 'home'
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background: image or gradient */}
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Gradient overlay: dark on left where text sits, lighter on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/40" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green to-forest-dark" />
      )}

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-4 ${isHome ? 'py-28 text-left max-w-3xl' : 'py-12 text-center'}`}>
        {breadcrumb && (
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">{breadcrumb}</p>
        )}
        {isHome && (
          <p className="text-white/70 text-sm uppercase tracking-widest mb-4">Serving {COMPANY.serviceArea}</p>
        )}
        <h1 className={`font-bold leading-tight mb-3 ${isHome ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-3xl sm:text-4xl'}`}>
          {headline}
        </h1>
        {isHome && (
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 rounded-full px-5 py-1.5 text-white/80 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
            Locally Owned · Community Focused
          </div>
        )}
        <p className={`text-white/85 mb-8 ${isHome ? 'text-lg max-w-lg' : 'text-base max-w-xl mx-auto'}`}>
          {subheadline}
        </p>
        <div className={`flex flex-col sm:flex-row gap-3 ${isHome ? '' : 'justify-center'}`}>
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
