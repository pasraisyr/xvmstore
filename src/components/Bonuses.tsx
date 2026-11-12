import React from 'react'
import { Gift, CheckSquare, FileSpreadsheet, Video } from 'lucide-react'
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
          <h2 className="section-title">CADANGAN BONUS</h2>
          <p className="section-subtitle" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gold-700)' }}>
            🎁 Bonus Percuma
          </p>
        </div>

        <div className="bonuses-grid">
          {BONUSES.map((bonus) => (
            <div key={bonus.id} className="bonus-card">
              <div className="bonus-top-bar">
                <span className="bonus-number">{bonus.number}</span>
              </div>

              <div className="bonus-icon-box">
                {ICON_MAP[bonus.icon] || <Gift size={26} />}
              </div>

              <h3 className="bonus-title">{bonus.title}</h3>
              <p className="bonus-desc">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
