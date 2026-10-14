import React from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, BookCheck, Clock } from 'lucide-react'
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
            <div className="hero-badge-row">
              <span className="badge-tag gold">
                <Sparkles size={14} />
                Panduan Terkini Umrah DIY 2025 / 2026
              </span>
              <span className="badge-tag">
                <Clock size={14} />
                Jimat Puluhan Jam Mencari Info
              </span>
            </div>

            <h1 className="hero-headline">
              NAK BUAT UMRAH DIY TAPI <span className="highlight">TAK TAHU NAK MULA</span> DARI MANA?
            </h1>

            <p className="hero-subheadline">
              Kenalkan <strong>{SITE_INFO.title}</strong> — {SITE_INFO.subtitle}. Dari persediaan di Malaysia, tempahan penerbangan dan hotel, pengurusan perjalanan, aplikasi penting (Nusuk), sehingga panduan ibadah Umrah — <strong>semuanya diringkaskan dalam satu buku ringkas dan padat.</strong>
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-cta pulse-anim"
                onClick={scrollToPricing}
              >
                <span>SAYA NAK UMRAH SO EASY</span>
                <ArrowRight size={20} />
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  const el = document.getElementById('preview')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <BookCheck size={18} />
                <span>Lihat Preview Buku</span>
              </button>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--slate-500)', marginBottom: '24px', fontStyle: 'italic' }}>
              *{SITE_INFO.tagline}
            </p>

            {/* Trust Points */}
            <div className="hero-trust-points">
              <div className="trust-item">
                <div className="trust-item-icon">
                  <ShieldCheck size={18} />
                </div>
                <div className="trust-item-text">Bayaran Selamat HitPay (FPX &amp; DuitNow)</div>
              </div>
              <div className="trust-item">
                <div className="trust-item-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div className="trust-item-text">Format Ringkas &amp; Terus Praktikal</div>
              </div>
              <div className="trust-item">
                <div className="trust-item-icon">
                  <BookCheck size={18} />
                </div>
                <div className="trust-item-text">Kurier Pantas Seluruh Malaysia</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="hero-visual-card">
            <div className="book-mockup-wrapper">
              <div className="mockup-badge">Edisi Lengkap Terkini</div>
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
