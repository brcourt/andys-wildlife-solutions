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
        headline="Protecting Your Home."
        subheadline={`Restoring your peace of mind — we humanely remove unwanted wildlife and seal your home to keep them out for good. Serving ${COMPANY.serviceArea}.`}
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
