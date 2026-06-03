import type { ProcessStepData } from '../../types'

interface ProcessStepProps {
  step: ProcessStepData
}

export function ProcessStep({ step }: ProcessStepProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
        step.isOptional ? 'bg-amber' : 'bg-forest-green'
      }`}>
        {step.number}
      </div>
      <div>
        <span className="font-semibold text-forest-dark">{step.title}</span>
        {step.isOptional && <span className="ml-2 text-xs text-amber font-medium">(Optional)</span>}
        <p className="text-sm text-charcoal mt-0.5 leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}
