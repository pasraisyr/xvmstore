import React, { useState } from 'react'
import { ShoppingCart, Zap, ZoomIn, Check, ShieldCheck } from 'lucide-react'
import { PRODUCTS } from '../data/salesData'
import type { Product } from '../types/sales'
import { ImageModal } from './ImageModal'

interface ProductListProps {
  onAddToCart: (product: Product, quantity: number) => void
  onDirectBuy: (product: Product, quantity: number) => void
}

export const ProductList: React.FC<ProductListProps> = ({
  onAddToCart,
  onDirectBuy,
}) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'book-1': 1,
    'book-2': 1,
  })
  const [previewImage, setPreviewImage] = useState<{
    url: string
    alt: string
  } | null>(null)
  const [addedAnimation, setAddedAnimation] = useState<string | null>(null)

  const handleQtyChange = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1
      const updated = Math.max(1, current + delta)
      return { ...prev, [productId]: updated }
    })
  }

  const handleAdd = (product: Product) => {
    const qty = quantities[product.id] || 1
    onAddToCart(product, qty)
    setAddedAnimation(product.id)
    setTimeout(() => {
      setAddedAnimation(null)
    }, 1500)
  }

  const handleBuy = (product: Product) => {
    const qty = quantities[product.id] || 1
    onDirectBuy(product, qty)
  }

  return (
    <section id="produk" className="section-pad product-section">
      <div id="harga" style={{ position: 'absolute', top: '-80px', visibility: 'hidden' }} />
      <div className="container">
        <div className="section-header">
          <div className="badge-tag gold">
            <ShoppingCart size={14} />
            <span>Pilihan Buku &amp; Pakej</span>
          </div>
          <h2 className="section-title">Pilih Panduan Umrah DIY Anda</h2>
          <p className="section-subtitle">
            Dapatkan panduan lengkap yang diringkaskan khas untuk memudahkan perjalanan anda.
            Hanya <strong>RM 19.90</strong> setiap satu!
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="product-cards-grid">
          {PRODUCTS.map((prod) => {
            const qty = quantities[prod.id] || 1
            const isAdded = addedAnimation === prod.id

            return (
              <div key={prod.id} className="product-card">
                {/* Badge if available */}
                {prod.badge && (
                  <div className="product-badge-flag">
                    {prod.badge}
                  </div>
                )}

                {/* Product Poster Image */}
                <div
                  className="product-image-container"
                  onClick={() => setPreviewImage({ url: prod.image, alt: prod.name })}
                  title="Klik untuk lihat gambar saiz penuh"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="product-poster-img"
                    loading="lazy"
                  />
                  <div className="image-hover-overlay">
                    <ZoomIn size={28} />
                    <span>Klik Untuk Saiz Penuh</span>
                  </div>
                </div>

                {/* Product Info & Cart Actions */}
                <div className="product-card-body">
                  <div className="product-card-header">
                    <h3 className="product-card-title">{prod.name}</h3>
                    <div className="product-price-wrapper">
                      {prod.originalPrice && (
                        <span className="product-original-price">
                          RM {prod.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="product-current-price">
                        RM {prod.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="product-qty-row">
                    <span className="qty-label">Kuantiti:</span>
                    <div className="product-qty-stepper">
                      <button
                        type="button"
                        className="stepper-btn"
                        onClick={() => handleQtyChange(prod.id, -1)}
                        aria-label="Kurangkan kuantiti"
                      >
                        -
                      </button>
                      <span className="stepper-val">{qty}</span>
                      <button
                        type="button"
                        className="stepper-btn"
                        onClick={() => handleQtyChange(prod.id, 1)}
                        aria-label="Tambah kuantiti"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="product-actions-group">
                    <button
                      type="button"
                      className={`btn-add-to-cart ${isAdded ? 'added' : ''}`}
                      onClick={() => handleAdd(prod)}
                    >
                      {isAdded ? (
                        <>
                          <Check size={18} strokeWidth={2.5} />
                          <span>Dimasukkan ke Troli!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={18} />
                          <span>Tambah ke Troli</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="btn-buy-now"
                      onClick={() => handleBuy(prod)}
                    >
                      <Zap size={18} />
                      <span>Beli Terus</span>
                    </button>
                  </div>

                  <div className="product-card-trust">
                    <ShieldCheck size={14} />
                    <span>HitPay Verified &bull; Penghantaran Pantas</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Global section note */}
        <div className="product-section-footer">
          <p>
            💡 Klik pada mana-mana gambar untuk melihat butiran lengkap risalah dalam paparan saiz penuh.
          </p>
        </div>
      </div>

      {/* Lightbox for zooming in */}
      <ImageModal
        isOpen={Boolean(previewImage)}
        imageUrl={previewImage?.url || null}
        imageAlt={previewImage?.alt || ''}
        onClose={() => setPreviewImage(null)}
      />
    </section>
  )
}

