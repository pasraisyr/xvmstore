import React from 'react'
import {
  Plane,
  Hotel,
  Smartphone,
  FileCheck,
  Car,
  MapPin,
  Coins,
  Luggage,
  BookOpen,
  AlertTriangle,
} from 'lucide-react'
import { PAIN_POINTS } from '../data/salesData'

const ICON_MAP: Record<string, React.ReactNode> = {
  Plane: <Plane size={22} />,
  Hotel: <Hotel size={22} />,
  Smartphone: <Smartphone size={22} />,
  FileCheck: <FileCheck size={22} />,
  Car: <Car size={22} />,
  MapPin: <MapPin size={22} />,
  Coins: <Coins size={22} />,
  Luggage: <Luggage size={22} />,
  BookOpen: <BookOpen size={22} />,
}

export const PainPoints: React.FC = () => {
  return (
    <section id="masalah" className="section-pad pain-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Umrah DIY nampak susah...</h2>
          <p className="section-subtitle">
            Bila mula cari maklumat, macam-macam yang perlu difikirkan:
          </p>
        </div>

        <div className="pain-grid">
          {PAIN_POINTS.map((item, idx) => (
            <div key={idx} className="pain-card">
              <div className="pain-icon-wrapper">
                {ICON_MAP[item.icon] || <AlertTriangle size={22} />}
              </div>
              <h3 className="pain-card-title">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="pain-alert-banner">
          <AlertTriangle size={28} color="#dc2626" style={{ flexShrink: 0 }} />
          <p style={{ color: '#7f1d1d', margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>
            Maklumat terlalu banyak. Kadang-kadang semakin cari, semakin pening.
          </p>
        </div>
      </div>
    </section>
  )
}
