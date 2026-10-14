import React from 'react'
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react'

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
        <div className="final-cta-eyebrow">Peluang Ke Tanah Suci Kini Di Tangan Anda</div>

        <h2 className="final-cta-title">UMRAH DIY TAK SEMESTINYA SUSAH.</h2>

        <p className="final-cta-desc">
          Yang penting, anda tahu apa yang perlu dibuat, bila perlu bertindak, dan bagaimana hendak bermula dengan panduan yang betul.
        </p>

        <div className="final-cta-bullets">
          <div className="final-bullet">
            <CheckCircle size={20} color="var(--gold-400)" />
            <span>Rancang Sendiri</span>
          </div>
          <div className="final-bullet">
            <CheckCircle size={20} color="var(--gold-400)" />
            <span>Fahami Perjalanan</span>
          </div>
          <div className="final-bullet">
            <CheckCircle size={20} color="var(--gold-400)" />
            <span>Lebih Yakin &amp; Tenang</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <button
            type="button"
            className="btn-cta pulse-anim"
            style={{ fontSize: '1.15rem', padding: '18px 40px' }}
            onClick={scrollToPricing}
          >
            <span>SAYA NAK UMRAH SO EASY SEKARANG</span>
            <ArrowRight size={22} />
          </button>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--sand-300)', fontSize: '0.9rem' }}>
          <ShieldCheck size={18} color="var(--gold-400)" />
          <span>Pembayaran selamat diproses melalui gerbang HitPay (FPX, DuitNow QR, Kad Debit/Kredit)</span>
        </div>
      </div>
    </section>
  )
}
