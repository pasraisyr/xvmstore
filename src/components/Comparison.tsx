import React from 'react'
import { ArrowRight, Compass } from 'lucide-react'
import { SITE_INFO } from '../data/salesData'

const JOURNEY_ROUTE = [
  'Malaysia',
  'Flight',
  'Jeddah',
  'Makkah',
  'Umrah',
  'Madinah',
  'Airport',
  'Pulang ke Malaysia',
]

export const Comparison: React.FC = () => {
  return (
    <section className="section-pad comparison-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag gold">
            <Compass size={14} />
            <span>Kelebihan Utama</span>
          </div>
          <h2 className="section-title">Apa Yang Membezakan {SITE_INFO.title}?</h2>
          <p className="section-subtitle">
            Bukan buku yang tebal dan penuh teori memeningkan kepala.
          </p>
        </div>

        <div className="difference-box">
          <h3 className="difference-lead">
            <strong>{SITE_INFO.title}</strong> diringkaskan untuk orang biasa yang mahu memahami perjalanan Umrah DIY dengan cepat.
          </h3>
          <p className="difference-sublead">
            Satu buku untuk membantu anda melihat keseluruhan perjalanan dari A sampai Z:
          </p>

          <div className="journey-flow-cards">
            {JOURNEY_ROUTE.map((point, index) => (
              <React.Fragment key={index}>
                <div className="journey-flow-card">
                  <span className="journey-step-num">0{index + 1}</span>
                  <span className="journey-flow-name">{point}</span>
                </div>
                {index < JOURNEY_ROUTE.length - 1 && (
                  <div className="journey-flow-arrow" aria-hidden="true">
                    <ArrowRight size={16} />
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
