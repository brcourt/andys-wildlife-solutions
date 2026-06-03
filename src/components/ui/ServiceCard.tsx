import { Link } from 'react-router-dom'

interface ServiceCardProps {
  emoji: string
  title: string
  description: string
  to: string
  highlight?: boolean
}

export function ServiceCard({ emoji, title, description, to, highlight = false }: ServiceCardProps) {
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
