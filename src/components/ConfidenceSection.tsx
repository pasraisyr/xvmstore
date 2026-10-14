import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { THREE_KEYS } from '../data/salesData'

export const ConfidenceSection: React.FC = () => {
  return (
    <section className="section-pad confidence-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">Ketenangan Minda</span>
          <h2 className="section-title">Tak Perlu Jadi &ldquo;Travel Expert&rdquo;</h2>
          <p className="section-subtitle">
            Anda tak perlu pengalaman pusing keliling dunia untuk mula merancang Umrah DIY yang berjaya. Yang anda perlukan hanyalah 3 perkara ini:
          </p>
        </div>

        <div className="three-keys-grid">
          {THREE_KEYS.map((k, idx) => (
            <div key={idx} className="key-card">
              <div className="key-card-num">{k.number}</div>
              <h3 className="key-card-title">{k.title}</h3>
              <p className="key-card-desc">{k.desc}</p>
            </div>
          ))}
        </div>

        <div className="confidence-verdict">
          <h4>
            <CheckCircle2 size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: 'var(--primary-700)' }} />
            Dan yang paling penting... Ada satu panduan tepat yang boleh dirujuk bila-bila masa!
          </h4>
        </div>
      </div>
    </section>
  )
}
