import React, { useState, useEffect } from 'react'
import { ArrowRight, ShoppingCart } from 'lucide-react'

interface StickyBottomBarProps {
  onOpenOrder: () => void
  cartCount?: number
  cartTotal?: number
  onOpenCart?: () => void
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenOrder,
  cartCount = 0,
  cartTotal = 0,
  onOpenCart,
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down 400px
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  const handleAction = () => {
    if (cartCount > 0 && onOpenCart) {
      onOpenCart()
    } else {
      const el = document.getElementById('produk') || document.getElementById('harga')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        onOpenOrder()
      }
    }
  }

  return (
    <div className="sticky-bottom-bar">
      <div className="sticky-inner">
        <div className="sticky-left">
          <div className="sticky-title" style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
            UMRAH SO EASY — Panduan Ringkas Umrah DIY
          </div>
        </div>

        <div className="sticky-right">
          <div className="sticky-price">
            {cartCount > 0 ? (
              <span style={{ fontSize: '0.95rem' }}>
                RM {cartTotal.toFixed(2)}{' '}
                <small style={{ fontSize: '0.78rem', opacity: 0.85 }}>({cartCount} naskhah)</small>
              </span>
            ) : (
              <span>RM 19.90</span>
            )}
          </div>

          <button
            type="button"
            className="sticky-cta-btn"
            onClick={handleAction}
          >
            {cartCount > 0 ? (
              <>
                <ShoppingCart size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                <span>LIHAT TROLI &amp; TEMPAH</span>
              </>
            ) : (
              <>
                <span>PILIH BUKU SEKARANG</span>
                <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
