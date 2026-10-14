import React from 'react'
import { Check, X, ShieldAlert, Award } from 'lucide-react'
import { COMPARISONS, SITE_INFO } from '../data/salesData'

export const Comparison: React.FC = () => {
  return (
    <section className="section-pad comparison-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">Perbandingan Nyata</span>
          <h2 className="section-title">Apa Yang Membezakan {SITE_INFO.title}?</h2>
          <p className="section-subtitle">
            Bukan buku tebal berjela-jela yang penuh teori akademik. Buku ini diringkaskan untuk orang biasa yang mahu faham perjalanan Umrah DIY dengan cepat dan terus bertindak.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="col-feature">Faktor Perjalanan</th>
                <th className="col-book">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={18} color="var(--gold-400)" />
                    <span>Dengan {SITE_INFO.title}</span>
                  </div>
                </th>
                <th className="col-without">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldAlert size={18} color="#dc2626" />
                    <span>Cari Sendiri di Internet</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 700, color: 'var(--slate-800)' }}>{row.feature}</td>
                  <td className="cell-book">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Check size={18} color="var(--primary-700)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.diyWithBook}</span>
                    </div>
                  </td>
                  <td className="cell-without">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <X size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.withoutBook}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 9: Value Proposition Card */}
        <div className="value-prop-card">
          <div className="value-prop-left">
            <h3>Bayangkan Jika Semua Ini Anda Cari Sendiri...</h3>
            <p>
              YouTube, Google, TikTok, Facebook Group, WhatsApp, blog pelancongan lama, laman web syarikat penerbangan dan berpuluh-puluh ulasan hotel.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>Berapa nilai masa dan ketenangan fikiran anda?</strong> Daripada berjam-jam pening menyaring maklumat bercanggah, UMRAH SO EASY mengumpulkan panduan tepat dalam satu rujukan mesra jemaah.
            </p>
          </div>

          <div className="value-stats-box">
            <div className="stat-row">
              <span className="stat-label">Purata Masa Cari Info di Internet</span>
              <span className="stat-val" style={{ color: '#f87171' }}>40+ Jam</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Masa Khatam UMRAH SO EASY</span>
              <span className="stat-val" style={{ color: 'var(--gold-400)' }}>1.5 - 2 Jam</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Risiko Maklumat Usang / Lapuk</span>
              <span className="stat-val" style={{ color: '#4ade80' }}>Sifar (Terkini)</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Penjimatan Kos Berbanding Pakej Agensi</span>
              <span className="stat-val" style={{ color: 'var(--gold-400)' }}>Hingga RM3,000+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
