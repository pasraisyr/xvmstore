import React from 'react'
import { Check, Users } from 'lucide-react'
import { TARGET_AUDIENCES } from '../data/salesData'

export const TargetAudience: React.FC = () => {
  return (
    <section className="section-pad audience-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">
            <Users size={14} />
            Kesesuaian Pembaca
          </span>
          <h2 className="section-title">Adakah Buku Ini Sesuai Untuk Anda?</h2>
          <p className="section-subtitle">
            Buku panduan ini ditulis khusus untuk membantu anda yang berada dalam situasi berikut:
          </p>
        </div>

        <div className="audience-list">
          {TARGET_AUDIENCES.map((item, idx) => (
            <div key={idx} className="audience-card">
              <div className="audience-check">
                <Check size={18} strokeWidth={3} />
              </div>
              <span className="audience-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
