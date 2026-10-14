import React, { useState } from 'react'
import {
  PlaneTakeoff,
  Smartphone,
  Compass,
  HeartHandshake,
  ClipboardCheck,
  CheckCircle,
} from 'lucide-react'
import { LEARNING_PILLARS } from '../data/salesData'

const ICON_MAP: Record<string, React.ReactNode> = {
  PlaneTakeoff: <PlaneTakeoff size={24} />,
  Smartphone: <Smartphone size={24} />,
  Compass: <Compass size={24} />,
  HeartHandshake: <HeartHandshake size={24} />,
  ClipboardCheck: <ClipboardCheck size={24} />,
}

export const LearningModules: React.FC = () => {
  const [activeTab, setActiveTab] = useState(LEARNING_PILLARS[0].id)

  const currentPillar = LEARNING_PILLARS.find((p) => p.id === activeTab) || LEARNING_PILLARS[0]

  return (
    <section id="modul" className="section-pad curriculum-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Kandungan Padat &amp; Menyeluruh</span>
          <h2 className="section-title">Apa Yang Anda Akan Belajar?</h2>
          <p className="section-subtitle">
            Setiap fasa disusun mengikut kronologi perjalanan sebenar supaya anda faham setiap tindakan yang perlu diambil dengan tenang.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="pillar-tabs">
          {LEARNING_PILLARS.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              className={`pillar-tab-btn ${activeTab === pillar.id ? 'active' : ''}`}
              onClick={() => setActiveTab(pillar.id)}
            >
              {ICON_MAP[pillar.icon]}
              <span>{pillar.title}</span>
            </button>
          ))}
        </div>

        {/* Active Content Card */}
        <div className="curriculum-card">
          <div className="curriculum-card-head">
            <div className="curriculum-head-left">
              <div className="curriculum-head-icon">
                {ICON_MAP[currentPillar.icon]}
              </div>
              <div>
                <h3 className="curriculum-head-title">{currentPillar.title}</h3>
                <p className="curriculum-head-tagline">{currentPillar.tagline}</p>
              </div>
            </div>
            <span className="badge-tag gold" style={{ margin: 0 }}>
              {currentPillar.topics.length} Topik Praktikal
            </span>
          </div>

          <div className="topics-grid">
            {currentPillar.topics.map((topic, i) => (
              <div key={i} className="topic-item">
                <CheckCircle size={18} className="topic-bullet" />
                <span className="topic-item-text">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
