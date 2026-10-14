import React from 'react'
import { Sparkles, ArrowRight, Compass } from 'lucide-react'
import { SITE_INFO, JOURNEY_STEPS } from '../data/salesData'

export const Solution: React.FC = () => {
  return (
    <section id="solusi" className="section-pad solution-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">
            <Sparkles size={14} />
            Jawapan Lengkap Dalam Satu Rujukan
          </span>
          <h2 className="section-title">Sebab Itu Kami Hasilkan: {SITE_INFO.title}</h2>
          <p className="section-subtitle">
            Buku ini dicipta khusus untuk meringkaskan segala maklumat penting Umrah DIY, supaya anda tidak perlu lagi membuang masa membuka puluhan website, blog lama, posting Facebook atau video TikTok yang berselerak.
          </p>
        </div>

        {/* Dynamic Flow Box */}
        <div className="solution-motto-box">
          <div className="motto-eyebrow">Formula Mudah Umrah DIY</div>
          <div className="motto-flow">
            Baca <span style={{ color: 'var(--gold-400)' }}>→</span> Faham{' '}
            <span style={{ color: 'var(--gold-400)' }}>→</span> Rancang{' '}
            <span style={{ color: 'var(--gold-400)' }}>→</span> Tempah{' '}
            <span style={{ color: 'var(--gold-400)' }}>→</span> Berangkat{' '}
            <span style={{ color: 'var(--gold-400)' }}>→</span> Tunaikan Umrah
          </div>
        </div>

        {/* Visual Roadmap of the Journey */}
        <div className="roadmap-container">
          <div className="roadmap-title">
            <Compass size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: 'var(--primary-700)' }} />
            Gambaran Keseluruhan Perjalanan Anda Dari A Hingga Z
          </div>

          <div className="roadmap-grid">
            {JOURNEY_STEPS.map((item, idx) => (
              <div key={idx} className="roadmap-step-card">
                <span className="step-num">{item.step}</span>
                <h4 className="step-title">{item.title}</h4>
                <p className="step-desc">{item.desc}</p>
                {idx < JOURNEY_STEPS.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '-8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      display: 'none', // for responsive grid
                    }}
                  >
                    <ArrowRight size={14} color="var(--gold-500)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
