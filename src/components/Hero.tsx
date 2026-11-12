import React from 'react'
import { ArrowRight } from 'lucide-react'
import { SITE_INFO } from '../data/salesData'

interface HeroProps {
  onOpenOrder: (packageId?: string) => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  const scrollToPricing = () => {
    const el = document.getElementById('harga')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      onOpenOrder('fizikal')
    }
  }

  return (
    <section className="hero-wrapper">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Copy */}
          <div className="hero-content">
            <p style={{ fontSize: '1.05rem', color: 'var(--gold-600)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Kenalkan: {SITE_INFO.title}
            </p>

            <h1 className="hero-headline">
              NAK BUAT UMRAH DIY TAPI <span className="highlight">TAK TAHU NAK MULA</span> DARI MANA?
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--slate-800)', fontWeight: 700, marginBottom: '16px' }}>
              {SITE_INFO.subtitle}
            </p>

            <p className="hero-subheadline">
              Dari persediaan di Malaysia, tempahan penerbangan dan hotel, pengurusan perjalanan, aplikasi penting, sehingga panduan ibadah Umrah — semuanya diringkaskan dalam satu buku.
            </p>

            <div className="hero-cta-group" style={{ marginBottom: '20px' }}>
              <button
                type="button"
                className="btn-cta pulse-anim"
                onClick={scrollToPricing}
              >
                <span>SAYA NAK UMRAH SO EASY</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)', fontStyle: 'italic', maxWidth: '520px' }}>
              *{SITE_INFO.tagline}
            </p>
          </div>

          {/* Hero Visual Mockup */}
          <div className="hero-visual-card">
            <div className="book-mockup-wrapper">
              <img
                src="/images/book-mockup.jpg"
                alt="Buku UMRAH SO EASY - Panduan Ringkas Umrah DIY"
                className="book-mockup-img"
                width={420}
                height={560}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
