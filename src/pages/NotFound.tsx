import { Link } from 'react-router-dom'
import { COMPANY } from '../config'

export function NotFound() {
  return (
    <main>
      <section className="bg-forest-dark text-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-6xl mb-6">🐾</p>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-white/80 mb-8">
            That page doesn't exist — but we can still help with your wildlife problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={COMPANY.phoneHref}
              className="bg-amber text-white font-semibold rounded-full px-8 py-3 inline-block hover:opacity-90 transition"
            >
              📞 Call {COMPANY.phone}
            </a>
            <Link
              to="/"
              className="border border-white/50 text-white font-semibold rounded-full px-8 py-3 inline-block hover:bg-white/10 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
