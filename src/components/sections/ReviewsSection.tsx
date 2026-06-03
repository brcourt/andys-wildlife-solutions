import { reviews } from '../../data/reviews'
import { ReviewCard } from '../ui/ReviewCard'

export function ReviewsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-forest-dark text-center mb-10">⭐ What Customers Say</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reviews.slice(0, 2).map(r => (
            <ReviewCard key={r.author} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
