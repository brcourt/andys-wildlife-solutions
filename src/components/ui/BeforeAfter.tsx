import type { BeforeAfterData } from '../../types'

interface BeforeAfterProps {
  data: BeforeAfterData
}

export function BeforeAfter({ data }: BeforeAfterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        {data.beforeSrc ? (
          <img src={data.beforeSrc} alt={data.beforeAlt} className="w-full h-40 object-cover rounded-lg" />
        ) : (
          <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">Before Photo</div>
        )}
        <p className="text-xs text-center text-gray-500 mt-1">Before</p>
      </div>
      <div className="flex-1">
        {data.afterSrc ? (
          <img src={data.afterSrc} alt={data.afterAlt} className="w-full h-40 object-cover rounded-lg" />
        ) : (
          <div className="w-full h-40 bg-mint-light border border-forest-green/20 rounded-lg flex items-center justify-center text-forest-green text-sm">After Photo</div>
        )}
        <p className="text-xs text-center text-gray-500 mt-1">After</p>
      </div>
    </div>
  )
}
