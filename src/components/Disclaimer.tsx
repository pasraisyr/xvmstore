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
              <strong>Penafian Undang-undang &amp; Polisi Perjalanan:</strong>
              <p style={{ marginTop: '4px' }}>{DISCLAIMER_TEXT}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
