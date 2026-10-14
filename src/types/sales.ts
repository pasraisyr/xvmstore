export interface LearningPillar {
  id: string
  title: string
  icon: string
  tagline: string
  topics: string[]
}

export interface ComparisonItem {
  feature: string
  diyWithBook: string
  withoutBook: string
}

export interface BookPreviewPage {
  title: string
  badge: string
  description: string
  highlights: string[]
}

export interface BonusItem {
  id: string
  number: string
  title: string
  value: string
  description: string
  badge: string
  icon: string
}

export interface PricingPackage {
  id: string
  name: string
  badge?: string
  popular?: boolean
  originalPrice: number
  price: number
  description: string
  items: string[]
  bonuses: string[]
  format: 'digital' | 'physical' | 'combo'
  ctaText: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  location: string
  avatar: string
  quote: string
  rating: number
  highlight: string
}

export interface OrderFormData {
  packageId: string
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  postcode: string
  state: string
  notes?: string
  paymentMethod: 'fpx' | 'duitnow' | 'card'
}
