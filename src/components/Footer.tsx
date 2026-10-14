import React from 'react'
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_INFO } from '../data/salesData'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--primary-800)',
                  color: 'var(--gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BookOpen size={20} />
              </div>
              <h3 style={{ margin: 0 }}>{SITE_INFO.title}</h3>
            </div>
            <p>
              Panduan Ringkas Umrah DIY yang membantu bakal tetamu Allah merancang perjalanan ibadah dengan lebih tersusun, yakin, dan jimat.
            </p>
            <p style={{ marginTop: '10px', fontSize: '0.82rem', color: 'var(--slate-500)' }}>
              Dikeluarkan &amp; diedarkan secara rasmi oleh <strong>{SITE_INFO.merchantName}</strong>.
            </p>
          </div>

          <div className="footer-col">
            <h4>Pautan Pantas</h4>
            <ul className="footer-links">
              <li><a href="#masalah">Masalah Pelanggan</a></li>
              <li><a href="#solusi">Formula &amp; Solusi</a></li>
              <li><a href="#modul">Apa Yang Dipelajari</a></li>
              <li><a href="#preview">Preview Buku</a></li>
              <li><a href="#bonus">Bonus Percuma</a></li>
              <li><a href="#harga">Pakej &amp; Harga</a></li>
              <li><a href="#faq">Soalan Lazim (FAQ)</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Khidmat Pelanggan</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--gold-400)" />
                <a href={`mailto:${SITE_INFO.supportEmail}`}>{SITE_INFO.supportEmail}</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="var(--gold-400)" />
                <a
                  href={`https://wa.me/${SITE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: {SITE_INFO.whatsappDisplay}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--slate-400)' }}>
                <MapPin size={16} color="var(--gold-400)" />
                <span>Kuala Lumpur &amp; Selangor, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {currentYear} {SITE_INFO.merchantName} ({SITE_INFO.title}). Hak Cipta Terpelihara.
          </div>
          <div style={{ color: 'var(--slate-500)' }}>
            Transaksi gerbang bayaran diproses dengan selamat oleh <strong>HitPay</strong>.
          </div>
        </div>
      </div>
    </footer>
  )
}
