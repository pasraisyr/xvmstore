import React from 'react'
import { Check, ShieldCheck, ArrowRight, Sparkles, CreditCard } from 'lucide-react'
import { PRICING_PACKAGES, HITPAY_PAYMENT_METHODS } from '../data/salesData'

interface PricingProps {
  onSelectPackage: (packageId: string) => void
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  return (
    <section id="harga" className="section-pad pricing-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">Pilih Pakej Anda</span>
          <h2 className="section-title">Mulakan Perancangan Umrah DIY Anda Hari Ini</h2>
          <p className="section-subtitle">
            Pelaburan kecil untuk penjimatan ribuan ringgit dan ketenangan ibadah sekeluarga di Tanah Suci. Pembayaran selamat melalui HitPay.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
            >
              {pkg.popular && <div className="popular-badge">{pkg.badge}</div>}

              <div className="package-header">
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-desc">{pkg.description}</p>
                <div className="price-wrapper">
                  <span className="price-original">RM {pkg.originalPrice}</span>
                  <span className="price-currency">RM</span>
                  <span className="price-current">{pkg.price}</span>
                </div>
              </div>

              <div className="package-items-title">Apa Yang Anda Dapat:</div>
              <ul className="package-items-list">
                {pkg.items.map((item, idx) => (
                  <li key={idx} className="package-item">
                    <Check size={18} className="package-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {pkg.bonuses.length > 0 && (
                <div className="package-bonus-box">
                  <div className="package-bonus-title">
                    <Sparkles size={14} />
                    <span>Termasuk 3 Bonus Percuma:</span>
                  </div>
                  {pkg.bonuses.map((b, i) => (
                    <div key={i} className="package-bonus-item">
                      ✓ {b}
                    </div>
                  ))}
                </div>
              )}

              <button
                type="button"
                className={pkg.popular ? 'btn-cta pulse-anim' : 'btn-secondary'}
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={() => onSelectPackage(pkg.id)}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* HitPay Gateway Compliance & Security Strip */}
        <div className="payment-gateway-strip">
          <div className="gateway-left">
            <div className="gateway-badge">
              <ShieldCheck size={20} color="var(--primary-700)" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
              Gerbang Pembayaran Rasmi HitPay
            </div>
            <span style={{ fontSize: '0.88rem', color: 'var(--slate-600)' }}>
              Transaksi selamat dengan enkripsi 256-bit SSL &amp; PCI-DSS.
            </span>
          </div>

          <div className="gateway-methods">
            {HITPAY_PAYMENT_METHODS.map((method, idx) => (
              <span key={idx} className="method-tag">
                <CreditCard size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px', color: 'var(--slate-500)' }} />
                {method.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
