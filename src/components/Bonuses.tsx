import React from 'react'
import { Gift, CheckSquare, FileSpreadsheet, Video, Sparkles } from 'lucide-react'
import { BONUSES } from '../data/salesData'

const ICON_MAP: Record<string, React.ReactNode> = {
  CheckSquare: <CheckSquare size={26} />,
  FileSpreadsheet: <FileSpreadsheet size={26} />,
  Video: <Video size={26} />,
}

export const Bonuses: React.FC = () => {
  return (
    <section id="bonus" className="section-pad bonuses-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">
            <Gift size={14} />
            Hadiah Khas Pembeli Terawal
          </span>
          <h2 className="section-title">3 Bonus Percuma Eksklusif Menanti Anda</h2>
          <p className="section-subtitle">
            Dapatkan alat bantu tambahan ini secara percuma apabila anda membuat pesanan hari ini. Direka untuk memudahkan perancangan anda dari hari pertama.
          </p>
        </div>

        <div className="bonuses-grid">
          {BONUSES.map((bonus) => (
            <div key={bonus.id} className="bonus-card">
              <div className="bonus-top-bar">
                <span className="bonus-number">{bonus.number}</span>
                <span className="bonus-valBadge">{bonus.value}</span>
              </div>

              <div className="bonus-icon-box">
                {ICON_MAP[bonus.icon] || <Gift size={26} />}
              </div>

              <h3 className="bonus-title">{bonus.title}</h3>
              <p className="bonus-desc">{bonus.description}</p>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed var(--gold-200)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} color="var(--gold-600)" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--gold-800)' }}>
                  {bonus.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
