import { COMPANY } from '../config'
import { Hero } from '../components/sections/Hero'
import { TrustBar } from '../components/sections/TrustBar'
import { ServicesGrid } from '../components/sections/ServicesGrid'
import { WhyAndy } from '../components/sections/WhyAndy'
import { GalleryTeaser } from '../components/sections/GalleryTeaser'
import { ReviewsSection } from '../components/sections/ReviewsSection'
import { CtaBand } from '../components/sections/CtaBand'

export function Home() {
  return (
    <main>
      <Hero
        variant="home"
        headline="Wildlife Problems? We've Got You Covered."
        subheadline={`Licensed & insured removal of raccoons, squirrels, snakes, rodents, and more. Serving ${COMPANY.serviceArea}.`}
      />
      <TrustBar />
      <ServicesGrid />
      <WhyAndy />
      <GalleryTeaser />
      <ReviewsSection />
      <CtaBand
        headline="Ready to Get Rid of the Problem?"
        subheadline="Most jobs scheduled within 24–48 hours. Call now for a free phone consultation."
      />
    </main>
  )
}
