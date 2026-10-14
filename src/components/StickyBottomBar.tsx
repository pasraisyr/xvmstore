import React, { useState, useEffect } from 'react'
import { Clock, ArrowRight } from 'lucide-react'

interface StickyBottomBarProps {
  onOpenOrder: () => void
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenOrder }) => {
  const [visible, setVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 15 })

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

  // Simple countdown timer tick
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 }
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 4, minutes: 30, seconds: 0 }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  const formatNum = (n: number) => n.toString().padStart(2, '0')

  return (
    <div className="sticky-bottom-bar">
      <div className="sticky-inner">
        <div className="sticky-left">
          <div className="sticky-timer-box">
            <Clock size={16} color="var(--gold-400)" />
            <span>Tawaran Tamat:</span>
            <span className="sticky-timer-val">
              {formatNum(timeLeft.hours)}:{formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
            </span>
          </div>

          <div className="sticky-title">
            UMRAH SO EASY — Termasuk 3 Bonus Percuma
          </div>
        </div>

        <div className="sticky-right">
          <div className="sticky-price">
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0', marginRight: '4px' }}>
              Dari
            </span>
            RM 39
          </div>

          <button
            type="button"
            className="sticky-cta-btn"
            onClick={onOpenOrder}
          >
            <span>Tempah Sekarang</span>
            <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '4px' }} />
          </button>
        </div>
      </div>
    </div>
  )
}
