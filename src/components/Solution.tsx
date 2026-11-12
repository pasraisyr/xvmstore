import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { SITE_INFO } from '../data/salesData'

const FORMULA_STEPS = [
  { num: '01', text: 'Baca' },
  { num: '02', text: 'Faham' },
  { num: '03', text: 'Rancang' },
  { num: '04', text: 'Tempah' },
  { num: '05', text: 'Berangkat' },
  { num: '06', text: 'Tunaikan Umrah' },
]

export const Solution: React.FC = () => {
  return (
    <section id="solusi" className="section-pad solution-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag gold">
            <Sparkles size={14} />
            <span>Solusi Lengkap</span>
          </div>
          <p className="section-eyebrow-text">
            Sebab itu kami hasilkan...
          </p>
          <h2 className="section-title solution-main-title">{SITE_INFO.title}</h2>
          <p className="section-subtitle solution-desc-text">
            Buku ini dibuat untuk meringkaskan maklumat penting Umrah DIY supaya anda tidak perlu membuka puluhan website, video dan posting untuk mendapatkan gambaran keseluruhan perjalanan.
          </p>
        </div>

        {/* Formula Flow Steps */}
        <div className="solution-motto-box">
          <div className="solution-box-header">
            <span className="solution-box-tagline">Formula Langkah Demi Langkah:</span>
          </div>
          <div className="solution-formula-flow">
            {FORMULA_STEPS.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="formula-step-pill">
                  <span className="step-num-badge">{step.num}</span>
                  <span className="step-text-label">{step.text}</span>
                </div>
                {idx < FORMULA_STEPS.length - 1 && (
                  <div className="formula-arrow" aria-hidden="true">
                    <ArrowRight size={18} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
