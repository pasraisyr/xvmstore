import React from 'react'
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react'
import type { CartItem } from '../types/sales'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemoveItem: (productId: string) => void
  onCheckout: () => void
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title-row">
            <ShoppingBag size={22} className="text-gold" />
            <h3>Troli Pesanan</h3>
            <span className="cart-count-badge">{totalItemsCount}</span>
          </div>
          <button
            type="button"
            className="cart-drawer-close-btn"
            onClick={onClose}
            aria-label="Tutup troli"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="cart-drawer-body">
          {items.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">
                <ShoppingBag size={48} strokeWidth={1.5} />
              </div>
              <h4>Troli Anda Masih Kosong</h4>
              <p>Sila pilih mana-mana buku panduan dan klik "Tambah ke Troli" untuk membuat pesanan.</p>
              <button
                type="button"
                className="btn-secondary"
                style={{ marginTop: '16px' }}
                onClick={() => {
                  onClose()
                  const el = document.getElementById('produk') || document.getElementById('harga')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Lihat Senarai Buku
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {items.map((item) => {
                const itemTotal = (item.product.price * item.quantity).toFixed(2)
                return (
                  <div key={item.product.id} className="cart-item-row">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="cart-item-img"
                    />
                    <div className="cart-item-details">
                      <div className="cart-item-top">
                        <span className="cart-item-name">{item.product.name}</span>
                        <button
                          type="button"
                          className="cart-item-remove-btn"
                          onClick={() => onRemoveItem(item.product.id)}
                          title="Buang item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="cart-item-unit-price">
                        RM {item.product.price.toFixed(2)} / naskhah
                      </div>
                      <div className="cart-item-actions">
                        <div className="cart-qty-control">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity - 1)
                            }
                            aria-label="Kurangkan bilangan"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() =>
                              onUpdateQuantity(item.product.id, item.quantity + 1)
                            }
                            aria-label="Tambah bilangan"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="cart-item-subtotal">
                          RM {itemTotal}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-line">
              <span>Jumlah Item</span>
              <span>{totalItemsCount} naskhah</span>
            </div>
            <div className="cart-summary-total">
              <span>Jumlah Bayaran:</span>
              <span className="cart-total-amount">
                RM {totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              className="btn-cta pulse-anim"
              style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '12px' }}
              onClick={onCheckout}
            >
              <span>Teruskan ke Pembayaran</span>
              <ArrowRight size={18} />
            </button>

            <div className="cart-guarantee-note">
              <ShieldCheck size={16} />
              <span>Pembayaran selamat dijamin melalui HitPay</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

