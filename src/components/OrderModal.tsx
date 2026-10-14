import React, { useState } from 'react'
import { X, ShieldCheck, CheckCircle2, CreditCard, MessageCircle, Loader2 } from 'lucide-react'
import { PRICING_PACKAGES, SITE_INFO } from '../data/salesData'
import type { OrderFormData } from '../types/sales'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  initialPackageId?: string
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialPackageId = 'fizikal',
}) => {
  const [selectedPkgId, setSelectedPkgId] = useState(initialPackageId)
  const [paymentMethod, setPaymentMethod] = useState<'fpx' | 'duitnow' | 'card'>('fpx')
  const [formData, setFormData] = useState<Omit<OrderFormData, 'packageId' | 'paymentMethod'>>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    state: 'Selangor',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  if (!isOpen) return null

  const selectedPackage =
    PRICING_PACKAGES.find((p) => p.id === selectedPkgId) || PRICING_PACKAGES[1]

  const isPhysical = selectedPackage.format !== 'digital'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate HitPay payment gateway processing
    setTimeout(() => {
      setIsSubmitting(false)
      setOrderComplete(true)
    }, 1200)
  }

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Assalamualaikum ${SITE_INFO.merchantName},\n\nSaya ingin menempah panduan ${SITE_INFO.title}:\n\n` +
        `• Pakej: ${selectedPackage.name} (RM ${selectedPackage.price})\n` +
        `• Nama: ${formData.fullName || '-'}\n` +
        `• Telefon: ${formData.phone || '-'}\n` +
        `• Emel: ${formData.email || '-'}\n` +
        (isPhysical
          ? `• Alamat Penghantaran: ${formData.address || '-'}, ${formData.postcode || ''} ${formData.city || ''}, ${formData.state}\n`
          : '') +
        `• Kaedah Bayaran: ${paymentMethod.toUpperCase()} (HitPay)\n\nMohon bantu saya untuk langkah pembayaran seterusnya. Terima kasih!`
    )
    window.open(`https://wa.me/${SITE_INFO.whatsappNumber}?text=${text}`, '_blank')
  }

  const MALAYSIAN_STATES = [
    'Selangor',
    'Kuala Lumpur',
    'Johor',
    'Penang',
    'Perak',
    'Kedah',
    'Pahang',
    'Negeri Sembilan',
    'Melaka',
    'Kelantan',
    'Terengganu',
    'Perlis',
    'Sabah',
    'Sarawak',
    'Putrajaya',
    'Labuan',
  ]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>Borang Pesanan Rasmi</h3>
            <span style={{ fontSize: '0.82rem', color: 'var(--slate-500)' }}>
              Pembayaran Selamat Melalui HitPay Payment Gateway
            </span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          {orderComplete ? (
            <div className="success-box">
              <div className="success-icon">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="success-title">Pesanan Berjaya Diterima!</h3>
              <p className="success-desc">
                Terima kasih, <strong>{formData.fullName || 'Tuan/Puan'}</strong>. Pengesahan tempahan dan invois pembayaran <strong>HitPay</strong> telah dihantar ke <strong>{formData.email}</strong>.
              </p>

              <div
                style={{
                  background: 'var(--sand-50)',
                  border: '1px solid var(--sand-300)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  marginBottom: '24px',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: '6px' }}>Ringkasan Pesanan:</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--slate-700)' }}>
                  Pakej: <strong>{selectedPackage.name}</strong>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--slate-700)' }}>
                  Jumlah Bayaran: <strong>RM {selectedPackage.price}.00</strong>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--slate-700)' }}>
                  Saluran: <strong>{paymentMethod.toUpperCase()} (HitPay)</strong>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  type="button"
                  className="btn-cta"
                  style={{ width: '100%', background: '#25D366' }}
                  onClick={handleWhatsAppOrder}
                >
                  <MessageCircle size={20} />
                  <span>Hantar Salinan ke WhatsApp Customer Service</span>
                </button>

                <button
                  type="button"
                  className="btn-secondary"
                  style={{ width: '100%' }}
                  onClick={onClose}
                >
                  Selesai &amp; Kembali ke Halaman Utama
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Package Selector */}
              <div className="package-selector">
                <label className="package-selector-label">1. Pilih Pakej Pilihan Anda:</label>
                <div className="package-option-cards">
                  {PRICING_PACKAGES.map((pkg) => {
                    const isSelected = pkg.id === selectedPkgId
                    return (
                      <div
                        key={pkg.id}
                        className={`package-option-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => setSelectedPkgId(pkg.id)}
                      >
                        <div className="package-option-left">
                          <input
                            type="radio"
                            name="selectedPkg"
                            checked={isSelected}
                            onChange={() => setSelectedPkgId(pkg.id)}
                            style={{ accentColor: 'var(--primary-700)' }}
                          />
                          <div>
                            <div className="package-option-name">
                              {pkg.name} {pkg.popular && <span style={{ color: 'var(--gold-600)', fontSize: '0.8rem' }}>(Pilihan Popular)</span>}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)' }}>
                              {pkg.bonuses.length} Bonus Percuma Termasuk
                            </div>
                          </div>
                        </div>
                        <div className="package-option-price">RM {pkg.price}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Customer Information */}
              <div style={{ marginBottom: '20px' }}>
                <label className="package-selector-label">2. Maklumat Penerima &amp; Penghantaran:</label>
                <div className="form-grid">
                  <div className="form-group full">
                    <label className="form-label">Nama Penuh *</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Ahmad bin Ismail"
                      className="form-input"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Nombor WhatsApp / Telefon *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 0123456789"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Alamat Emel Rasmi *</label>
                    <input
                      type="email"
                      required
                      placeholder="Untuk terima pautan &amp; resit"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {isPhysical && (
                    <>
                      <div className="form-group full">
                        <label className="form-label">Alamat Lengkap Penghantaran Pos *</label>
                        <input
                          type="text"
                          required
                          placeholder="No. Rumah, Jalan, Taman / Kawasan"
                          className="form-input"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Bandar *</label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Shah Alam"
                          className="form-input"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Poskod *</label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: 40000"
                          className="form-input"
                          value={formData.postcode}
                          onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        />
                      </div>

                      <div className="form-group full">
                        <label className="form-label">Negeri *</label>
                        <select
                          className="form-select"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        >
                          {MALAYSIAN_STATES.map((st) => (
                            <option key={st} value={st}>
                              {st}
                            </option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="payment-selector">
                <label className="package-selector-label">3. Kaedah Pembayaran (HitPay Gateway):</label>
                <div className="payment-options-grid">
                  <button
                    type="button"
                    className={`payment-option-btn ${paymentMethod === 'fpx' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('fpx')}
                  >
                    🏦 FPX Online Banking
                  </button>
                  <button
                    type="button"
                    className={`payment-option-btn ${paymentMethod === 'duitnow' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('duitnow')}
                  >
                    📱 DuitNow QR
                  </button>
                  <button
                    type="button"
                    className={`payment-option-btn ${paymentMethod === 'card' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    💳 Kad Debit / Visa
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="order-summary-box">
                <div>
                  <div className="order-total-label">Jumlah Perlu Dibayar:</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--slate-500)' }}>
                    {isPhysical ? 'Termasuk E-Book + 3 Bonus + Penghantaran' : 'Akses Segera Emel'}
                  </div>
                </div>
                <div className="order-total-price">RM {selectedPackage.price}.00</div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cta pulse-anim"
                  style={{ width: '100%', padding: '16px' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Menyambungkan ke HitPay...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard size={20} />
                      <span>BAYAR SEKARANG VIA HITPAY (RM {selectedPackage.price})</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="btn-secondary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                  onClick={handleWhatsAppOrder}
                >
                  <MessageCircle size={18} color="#16a34a" />
                  <span>Atau Tempah Terus Melalui WhatsApp</span>
                </button>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginTop: '16px',
                  fontSize: '0.78rem',
                  color: 'var(--slate-500)',
                }}
              >
                <ShieldCheck size={16} color="var(--primary-700)" />
                <span>Transaksi dienkripsi dengan piawaian keselamatan perbankan SSL HitPay.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
