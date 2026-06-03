export interface AnimalItem {
  emoji: string
  name: string
}

export interface ProcessStepData {
  number: number
  title: string
  description: string
  isOptional?: boolean
}

export interface WarningSignData {
  emoji: string
  text: string
}

export interface BeforeAfterData {
  beforeSrc?: string
  afterSrc?: string
  beforeAlt: string
  afterAlt: string
  caption: string
}

export interface ServiceData {
  slug: string
  title: string
  emoji: string
  heroDescription: string
  animalsLabel: string
  animals: AnimalItem[]
  warningSignsLabel: string
  warningSigns: WarningSignData[]
  processSteps: ProcessStepData[]
  beforeAfter: BeforeAfterData
  ctaBandHeadline: string
  ctaBandSubheadline: string
}

export interface ReviewData {
  text: string
  author: string
  location: string
}

export interface FAQItem {
  question: string
  answer: string
}
