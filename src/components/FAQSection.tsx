import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { FAQS } from '../data/salesData'

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-pad faq-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">
            <HelpCircle size={14} />
            Ada Sebarang Keraguan?
          </span>
          <h2 className="section-title">Soalan Lazim (FAQ)</h2>
          <p className="section-subtitle">
            Jawapan pantas kepada soalan yang paling kerap ditanya oleh bakal jemaah Umrah DIY sebelum membuat pembelian.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>
                {isOpen && (
                  <div className="faq-answer-box">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
