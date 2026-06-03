import type { WarningSignData } from '../../types'

interface WarningSignProps {
  sign: WarningSignData
}

export function WarningSign({ sign }: WarningSignProps) {
  return (
    <div className="flex gap-3 items-start text-sm text-charcoal leading-relaxed">
      <span className="text-base flex-shrink-0 mt-0.5">{sign.emoji}</span>
      <span>{sign.text}</span>
    </div>
  )
}
