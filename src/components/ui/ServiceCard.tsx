import { Link } from 'react-router-dom'

interface ServiceCardProps {
  emoji: string
  title: string
  description: string
  to: string
  highlight?: boolean
  imageSrc?: string
}

export function ServiceCard({ emoji, title, description, to, highlight = false, imageSrc }: ServiceCardProps) {
  if (imageSrc) {
    return (
      <Link
        to={to}
        className="block relative rounded-xl overflow-hidden aspect-[4/3] group shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay: heavy at bottom for text, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/50 to-forest-dark/10" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-white font-bold text-sm uppercase tracking-wide leading-tight">{title}</p>
          <p className="text-white/70 text-xs mt-1 leading-relaxed">{description}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={to}
      className={`block border rounded-xl p-5 text-center transition-shadow hover:shadow-md ${
        highlight ? 'border-forest-green bg-mint-light' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="text-3xl mb-2">{emoji}</div>
      <div className={`text-sm font-semibold ${highlight ? 'text-forest-green' : 'text-forest-dark'}`}>{title}</div>
      <div className="text-xs text-gray-500 mt-1">{description}</div>
    </Link>
  )
}
