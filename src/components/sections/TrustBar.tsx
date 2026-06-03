import { COMPANY } from '../../config'

const items = [
  { icon: '✅', label: 'Licensed & Insured' },
  { icon: '⭐', label: '5-Star Reviews' },
  { icon: '🏠', label: 'Residential & Commercial' },
  { icon: '📍', label: `Serving ${COMPANY.serviceArea}` },
]

export function TrustBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {items.map(item => (
          <div key={item.label} className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 py-1">
            <span>{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
