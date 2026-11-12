import React from 'react'
import { THREE_KEYS } from '../data/salesData'

export const ConfidenceSection: React.FC = () => {
  return (
    <section className="section-pad confidence-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">TAK PERLU JADI TRAVEL EXPERT</h2>
          <p className="section-subtitle">
            Anda tak perlu mahir travel untuk mula merancang Umrah DIY.
          </p>
          <p style={{ fontSize: '1.15rem', color: 'var(--slate-800)', fontWeight: 700, marginTop: '12px' }}>
            Yang penting ialah:
          </p>
        </div>

        <div className="three-keys-grid">
          {THREE_KEYS.map((k, idx) => (
            <div key={idx} className="key-card">
              <div className="key-card-num">{k.number}</div>
              <h3 className="key-card-title">{k.title}</h3>
            </div>
          ))}
        </div>

        <div className="confidence-verdict">
          <p className="confidence-verdict-sub">
            Dan yang paling penting...
          </p>
          <h3 className="confidence-verdict-title">
            Ada panduan yang boleh dirujuk.
          </h3>
        </div>
      </div>
    </section>
  )
}
