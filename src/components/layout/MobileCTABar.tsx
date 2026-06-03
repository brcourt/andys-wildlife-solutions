import { COMPANY } from '../../config'

export function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-amber shadow-lg">
      <a
        href={COMPANY.phoneHref}
        className="flex items-center justify-center gap-2 text-white font-bold py-4 text-base w-full"
      >
        📞 Tap to Call: {COMPANY.phone}
      </a>
    </div>
  )
}
