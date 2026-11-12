import React from 'react'
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react'
import { SITE_INFO } from '../data/salesData'

interface FinalCTAProps {
  onOpenOrder: (packageId?: string) => void
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenOrder }) => {
  const scrollToPricing = () => {
    const el = document.getElementById('harga')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      onOpenOrder('fizikal')
    }
  }

  return (
    <section className="final-cta-section">
      <div className="container">
        <h2 className="final-cta-title">UMRAH DIY TAK SEMESTINYA SUSAH.</h2>

        <p className="final-cta-desc">
          Yang penting, anda tahu apa yang perlu dibuat dan bagaimana hendak bermula.
        </p>

        <div style={{ margin: '28px 0 24px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--gold-400)', letterSpacing: '0.04em' }}>
            {SITE_INFO.title}
          </h3>
          <p style={{ fontSize: '1.15rem', color: 'var(--gold-200)', fontWeight: 600, marginTop: '4px' }}>
            {SITE_INFO.subtitle}
          </p>
        </div>

        <div className="final-cta-bullets">
          <div className="final-bullet">
            <CheckCircle size={20} color="var(--gold-400)" />
            <span>Rancang sendiri.</span>
          </div>
          <div className="final-bullet">
            <CheckCircle size={20} color="var(--gold-400)" />
            <span>Fahami perjalanan.</span>
          </div>
          <div className="final-bullet">
            <CheckCircle size={20} color="var(--gold-400)" />
            <span>Lebih yakin.</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <button
            type="button"
            className="btn-cta pulse-anim"
            style={{ fontSize: '1.15rem', padding: '18px 42px' }}
            onClick={scrollToPricing}
          >
            <span>SAYA NAK UMRAH SO EASY</span>
            <ArrowRight size={22} />
          </button>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--sand-300)', fontSize: '0.92rem' }}>
          <ShieldCheck size={18} color="var(--gold-400)" />
          <span>Pembayaran online melalui HitPay.</span>
        </div>
      </div>
    </section>
  )
}
