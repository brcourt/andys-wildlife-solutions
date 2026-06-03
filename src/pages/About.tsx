import { COMPANY } from '../config'

export function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-forest-dark text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Andy's Wildlife Solutions</h1>
          <p className="text-lg">Family-owned, locally operated, and passionate about humane wildlife management.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-forest-dark">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            Andy started his wildlife removal business after spending over a decade working in wildlife management and animal control. What began as a passion for humane wildlife solutions evolved into a mission: to serve his local community with integrity, expertise, and compassion. Today, Andy's Wildlife Solutions is fully licensed, insured, and dedicated to solving wildlife problems the right way—whether that's through exclusion, live trapping, or other humane methods that protect both families and animals.
          </p>
          <p className="text-lg text-gray-700">
            We believe wildlife removal isn't just about removing the problem—it's about understanding it. That's why we take time to assess each situation thoroughly, provide honest recommendations, and only do the work that's actually needed. Our goal is to give you peace of mind, protect your property, and handle every job with the professionalism and care you deserve.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-mint-light py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-forest-dark">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Humane Methods */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🐾</div>
              <h3 className="text-xl font-bold text-forest-dark mb-3">Humane Methods</h3>
              <p className="text-gray-700">We use exclusion and live trapping whenever possible.</p>
            </div>

            {/* Card 2: Honest Assessments */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-forest-dark mb-3">Honest Assessments</h3>
              <p className="text-gray-700">We tell you exactly what the problem is — no upselling.</p>
            </div>

            {/* Card 3: Your Home Protected */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-forest-dark mb-3">Your Home, Protected</h3>
              <p className="text-gray-700">Every entry point sealed. Every job finished right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest-dark text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg mb-6">Give us a call — we're happy to talk through any wildlife concern, no commitment required.</p>
          <a
            href={COMPANY.phoneHref}
            className="bg-amber text-white rounded-full px-8 py-3 font-semibold inline-block hover:opacity-90 transition"
          >
            Call {COMPANY.phone}
          </a>
        </div>
      </section>
    </main>
  )
}
