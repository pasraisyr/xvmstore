import React from 'react'
import { SITE_INFO } from '../data/salesData'

const CHANNELS = [
  'YouTube',
  'Google',
  'TikTok',
  'Facebook',
  'WhatsApp',
  'Blog',
  'Website Airline',
  'Website Hotel',
  'Pelbagai Aplikasi Travel',
]

export const ValueProposition: React.FC = () => {
  return (
    <section className="section-pad value-prop-section">
      <div className="container">
        <div className="value-prop-card">
          <div className="value-prop-content">

            <h2 className="value-prop-heading">
              Bayangkan kalau semua ini perlu anda cari sendiri...
            </h2>

            <div className="channel-pills">
              {CHANNELS.map((ch, idx) => (
                <span key={idx} className="channel-pill">
                  {ch}
                </span>
              ))}
            </div>

            <p className="value-prop-highlight">
              Berjam-jam mencari maklumat.
            </p>

            <p className="value-prop-solution">
              <strong>{SITE_INFO.title}</strong> membantu meringkaskan perkara penting dalam satu rujukan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
