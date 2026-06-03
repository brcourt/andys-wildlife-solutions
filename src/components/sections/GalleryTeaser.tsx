import { Link } from 'react-router-dom'

export function GalleryTeaser() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-forest-dark text-center mb-2">See Our Work</h2>
        <p className="text-gray-500 text-center text-sm mb-8">Real jobs, real results</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <div className="flex-1">
            <div className="w-full h-44 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">Before Photo</div>
            <p className="text-xs text-center text-gray-500 mt-2">Before</p>
          </div>
          <div className="flex-1">
            <div className="w-full h-44 bg-mint-light border border-forest-green/20 rounded-xl flex items-center justify-center text-forest-green text-sm">After Photo</div>
            <p className="text-xs text-center text-gray-500 mt-2">After</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link to="/services/wildlife-removal" className="text-forest-green font-semibold text-sm hover:underline">
            View more photos →
          </Link>
        </div>
      </div>
    </section>
  )
}
