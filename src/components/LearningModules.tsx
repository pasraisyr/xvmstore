import React from 'react'
import {
  PlaneTakeoff,
  Smartphone,
  Compass,
  HeartHandshake,
  ClipboardCheck,
  CheckCircle2,
} from 'lucide-react'
import { LEARNING_PILLARS } from '../data/salesData'

const ICON_MAP: Record<string, React.ReactNode> = {
  PlaneTakeoff: <PlaneTakeoff size={22} />,
  Smartphone: <Smartphone size={22} />,
  Compass: <Compass size={22} />,
  HeartHandshake: <HeartHandshake size={22} />,
  ClipboardCheck: <ClipboardCheck size={22} />,
}

export const LearningModules: React.FC = () => {
  return (
    <section id="modul" className="section-pad curriculum-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag gold">Kandungan Buku</div>
          <h2 className="section-title">Apa Yang Anda Akan Belajar?</h2>
          <p className="section-subtitle">
            Semua langkah penting diringkaskan mengikut 5 fasa utama supaya anda faham dengan cepat.
          </p>
        </div>

        <div className="curriculum-pillars-container">
          {LEARNING_PILLARS.map((pillar, idx) => (
            <div key={pillar.id} className="curriculum-pillar-card">
              <div className="curriculum-card-head">
                <div className="curriculum-head-icon">
                  {ICON_MAP[pillar.icon]}
                </div>
                <div className="curriculum-head-info">
                  <span className="curriculum-phase-num">Modul 0{idx + 1}</span>
                  <h3 className="curriculum-head-title">{pillar.title}</h3>
                </div>
              </div>

              <div className="curriculum-divider" />

              <ul className="curriculum-topics-list">
                {pillar.topics.map((topic, i) => (
                  <li key={i} className="curriculum-topic-row">
                    <CheckCircle2 size={16} className="topic-check-icon" />
                    <span className="topic-text">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
