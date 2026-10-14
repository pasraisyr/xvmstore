import React from 'react'
import { Star, MessageSquareQuote } from 'lucide-react'
import { TESTIMONIALS } from '../data/salesData'

export const Testimonials: React.FC = () => {
  return (
    <section className="section-pad testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">
            <MessageSquareQuote size={14} />
            Pengalaman Jemaah Sebenar
          </span>
          <h2 className="section-title">Apa Kata Mereka Yang Telah Mencuba?</h2>
          <p className="section-subtitle">
            Kisah inspirasi jemaah Malaysia yang berjaya menunaikan Umrah DIY dengan yakin dan lancar berpandukan panduan kami.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div>
                <div className="rating-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="var(--gold-500)" />
                  ))}
                </div>
                <h4 className="testimonial-highlight">&ldquo;{t.highlight}&rdquo;</h4>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              </div>

              <div className="testimonial-user">
                <div className="user-avatar">{t.avatar}</div>
                <div className="user-details">
                  <span className="user-name">{t.name}</span>
                  <span className="user-role">{t.role} • {t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
