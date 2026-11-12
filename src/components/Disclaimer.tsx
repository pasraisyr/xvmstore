import React from 'react'
import { Info } from 'lucide-react'
import { DISCLAIMER_TEXT } from '../data/salesData'

export const Disclaimer: React.FC = () => {
  return (
    <div className="disclaimer-section">
      <div className="container">
        <div className="disclaimer-box">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <Info size={20} color="var(--gold-700)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--slate-700)' }}>
                <strong>Nota:</strong> {DISCLAIMER_TEXT.replace(/^Nota:\s*/, '')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
