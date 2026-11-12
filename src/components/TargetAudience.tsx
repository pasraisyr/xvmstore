import React from 'react'
import { CheckCircle2, Users } from 'lucide-react'
import { TARGET_AUDIENCES } from '../data/salesData'

export const TargetAudience: React.FC = () => {
  return (
    <section className="section-pad audience-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag gold">
            <Users size={14} />
            <span>Sasaran Pembaca</span>
          </div>
          <h2 className="section-title">UNTUK SIAPA?</h2>
          <p className="section-subtitle">
            Buku ini ditulis dan direka khas untuk anda yang:
          </p>
        </div>

        <div className="audience-list-grid">
          {TARGET_AUDIENCES.map((item, idx) => (
            <div key={idx} className="audience-card">
              <div className="audience-check-circle">
                <CheckCircle2 size={20} />
              </div>
              <span className="audience-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
