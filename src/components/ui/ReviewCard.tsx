import type { ReviewData } from '../../types'

interface ReviewCardProps {
  review: ReviewData
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border-l-4 border-amber shadow-sm">
      <p className="text-sm text-gray-600 italic leading-relaxed">"{review.text}"</p>
      <p className="mt-3 text-sm font-semibold text-forest-dark">
        — {review.author}, <span className="font-normal text-gray-500">{review.location}</span>
      </p>
    </div>
  )
}
