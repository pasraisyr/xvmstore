import React, { useState } from 'react'
import { BookOpen, Menu, X, ShieldCheck } from 'lucide-react'
import { SITE_INFO } from '../data/salesData'

interface NavbarProps {
  onOpenOrder: (packageId?: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <span>🕌 <strong>Tawaran Khas:</strong> Percuma 3 Bonus Eksklusif (Checklist + Planning Sheet + Video Guide)</span>
      </div>

      {/* Main Navbar */}
      <header className="site-navbar">
        <div className="container">
          <div className="navbar-inner">
            <a href="#" className="brand-wrapper" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="brand-symbol">
                <BookOpen size={22} />
              </div>
              <div className="brand-text">
                <span className="brand-title">{SITE_INFO.title}</span>
                <span className="brand-sub">{SITE_INFO.subtitle}</span>
              </div>
            </a>

            <nav className="nav-menu">
              <button type="button" className="nav-link" onClick={() => handleNavClick('masalah')}>
                Masalah
              </button>
              <button type="button" className="nav-link" onClick={() => handleNavClick('modul')}>
                Apa Dipelajari
              </button>
              <button type="button" className="nav-link" onClick={() => handleNavClick('preview')}>
                Preview Buku
              </button>
              <button type="button" className="nav-link" onClick={() => handleNavClick('bonus')}>
                Bonus
              </button>
              <button type="button" className="nav-link" onClick={() => handleNavClick('harga')}>
                Harga &amp; Pakej
              </button>
              <button type="button" className="nav-link" onClick={() => handleNavClick('faq')}>
                Soalan Lazim
              </button>
            </nav>

            <button
              type="button"
              className="nav-cta-btn"
              onClick={() => onOpenOrder()}
            >
              <ShieldCheck size={18} />
              <span>Tempah Sekarang</span>
            </button>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <button type="button" className="nav-link" onClick={() => handleNavClick('masalah')}>
            Masalah
          </button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('modul')}>
            Apa Dipelajari
          </button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('preview')}>
            Preview Buku
          </button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('bonus')}>
            Bonus Percuma
          </button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('harga')}>
            Pilihan Pakej
          </button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('faq')}>
            Soalan Lazim
          </button>
          <button
            type="button"
            className="btn-cta"
            style={{ width: '100%', marginTop: '8px' }}
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenOrder()
            }}
          >
            SAYA NAK UMRAH SO EASY
          </button>
        </div>
      </header>
    </>
  )
}
