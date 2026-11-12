import React, { useState } from 'react'
import { BookOpen, Menu, X, ShieldCheck, ShoppingCart } from 'lucide-react'
import { SITE_INFO } from '../data/salesData'

interface NavbarProps {
  onOpenOrder: (packageId?: string) => void
  cartCount?: number
  onOpenCart?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrder,
  cartCount = 0,
  onOpenCart,
}) => {
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
        <span>🕋 <strong>UMRAH SO EASY:</strong> Panduan Ringkas Umrah DIY dari Malaysia hingga Tanah Suci</span>
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
              <button type="button" className="nav-link" onClick={() => handleNavClick('solusi')}>
                Solusi
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
              <button type="button" className="nav-link" onClick={() => handleNavClick('produk')}>
                Pilihan Buku
              </button>
            </nav>

            <div className="navbar-right-actions">
              {onOpenCart && (
                <button
                  type="button"
                  className="nav-cart-btn"
                  onClick={onOpenCart}
                  aria-label="Troli pesanan"
                >
                  <ShoppingCart size={19} />
                  <span className="nav-cart-label">Troli</span>
                  {cartCount > 0 && <span className="nav-cart-badge">{cartCount}</span>}
                </button>
              )}

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
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <button type="button" className="nav-link" onClick={() => handleNavClick('masalah')}>
            Masalah
          </button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('solusi')}>
            Solusi
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
          <button type="button" className="nav-link" onClick={() => handleNavClick('produk')}>
            Pilihan Buku (RM 19.90)
          </button>

          {onOpenCart && (
            <button
              type="button"
              className="btn-secondary"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '10px' }}
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenCart()
              }}
            >
              <ShoppingCart size={18} />
              <span>Lihat Troli ({cartCount})</span>
            </button>
          )}

          <button
            type="button"
            className="btn-cta"
            style={{ width: '100%', marginTop: '8px' }}
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenOrder()
            }}
          >
            TEMPAH SEKARANG
          </button>
        </div>
      </header>
    </>
  )
}
