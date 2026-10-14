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
          <span className="badge-tag gold">Dilema Bakal Jemaah DIY</span>
          <h2 className="section-title">Umrah DIY Nampak Susah &amp; Menakutkan?</h2>
          <p className="section-subtitle">
            Bila mula terdetik niat nak buat Umrah sendiri, macam-macam persoalan berlegar di fikiran tanpa jawapan yang tersusun:
          </p>
        </div>

        <div className="pain-grid">
          {PAIN_POINTS.map((item, idx) => (
            <div key={idx} className="pain-card">
              <div className="pain-icon-wrapper">
                {ICON_MAP[item.icon] || <AlertTriangle size={22} />}
              </div>
              <h3 className="pain-card-title">{item.title}</h3>
              <p className="pain-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="pain-alert-banner">
          <AlertTriangle size={32} color="#dc2626" style={{ flexShrink: 0 }} />
          <div>
            <strong>Maklumat terlalu banyak di internet.</strong>
            <p style={{ color: '#7f1d1d', marginTop: '4px', fontSize: '0.95rem' }}>
              Buka YouTube lain, tengok TikTok lain, baca blog lama info dah lapuk. Kadang-kadang <em>semakin cari, semakin pening dan keliru!</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
