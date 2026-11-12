import React, { useState } from 'react'
import { X, ShieldCheck, CheckCircle2, CreditCard, MessageCircle, Loader2 } from 'lucide-react'
import { SITE_INFO, PRODUCTS } from '../data/salesData'
import type { OrderFormData, CartItem } from '../types/sales'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  initialPackageId?: string
  cartItems?: CartItem[]
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cartItems = [],
}) => {
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

  // Calculate items and total based on cartItems or fallback
  const hasCart = cartItems.length > 0
  const activeItems: CartItem[] = hasCart
    ? cartItems
    : [{ product: PRODUCTS[0], quantity: 1 }]

  const totalPrice = activeItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const itemsDescription = activeItems
    .map((item) => `${item.product.name} (x${item.quantity})`)
    .join(', ')

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
    const itemsListText = activeItems
      .map(
        (it) =>
          `  - ${it.product.name} x ${it.quantity} = RM ${(it.product.price * it.quantity).toFixed(2)}`
      )
      .join('\n')

    const text = encodeURIComponent(
      `Assalamualaikum ${SITE_INFO.merchantName},\n\nSaya ingin membuat tempahan ${SITE_INFO.title}:\n\n` +
        `• Senarai Pesanan:\n${itemsListText}\n` +
        `• Jumlah Bayaran: RM ${totalPrice.toFixed(2)}\n\n` +
        `• Butiran Penghantaran:\n` +
        `  - Nama: ${formData.fullName || '-'}\n` +
        `  - Telefon: ${formData.phone || '-'}\n` +
        `  - Emel: ${formData.email || '-'}\n` +
        `  - Alamat: ${formData.address || '-'}, ${formData.postcode || ''} ${formData.city || ''}, ${formData.state}\n` +
        `• Kaedah Bayaran Pilihan: ${paymentMethod.toUpperCase()} (HitPay)\n\nMohon bantu saya untuk proses penghantaran & pembayaran. Terima kasih!`
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
                <div style={{ fontSize: '0.9rem', color: 'var(--slate-700)', marginBottom: '4px' }}>
                  Produk: <strong>{itemsDescription}</strong>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--slate-700)' }}>
                  Jumlah Bayaran: <strong>RM {totalPrice.toFixed(2)}</strong>
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
              {/* Product Confirmation Card */}
              <div style={{ background: 'var(--primary-900)', borderRadius: 'var(--radius-lg)', padding: '16px 20px', color: '#ffffff', marginBottom: '22px', border: '1px solid var(--gold-600)' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--gold-400)', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em' }}>
                  Ringkasan Tempahan Anda
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                  {activeItems.map((it) => (
                    <div key={it.product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={it.product.image} alt={it.product.name} style={{ width: '36px', height: '48px', objectFit: 'cover', borderRadius: '4px' }} />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{it.product.name}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--slate-300)' }}>RM {it.product.price.toFixed(2)} × {it.quantity}</div>
                        </div>
                      </div>
                      <div style={{ fontWeight: 800, color: 'var(--gold-400)' }}>
                        RM {(it.product.price * it.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', paddingTop: '6px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--slate-300)' }}>Jumlah Keseluruhan:</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-400)' }}>
                    RM {totalPrice.toFixed(2)}
                  </span>
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
                    {activeItems.length} jenis item ({activeItems.reduce((acc, it) => acc + it.quantity, 0)} naskhah)
                  </div>
                </div>
                <div className="order-total-price">RM {totalPrice.toFixed(2)}</div>
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
                      <span>BAYAR SEKARANG VIA HITPAY (RM {totalPrice.toFixed(2)})</span>
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
