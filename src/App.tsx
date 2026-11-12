import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PainPoints } from './components/PainPoints'
import { Solution } from './components/Solution'
import { LearningModules } from './components/LearningModules'
import { Comparison } from './components/Comparison'
import { TargetAudience } from './components/TargetAudience'
import { ConfidenceSection } from './components/ConfidenceSection'
import { BookPreview } from './components/BookPreview'
import { ValueProposition } from './components/ValueProposition'
import { ProductList } from './components/ProductList'
import { Bonuses } from './components/Bonuses'
import { Disclaimer } from './components/Disclaimer'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { OrderModal } from './components/OrderModal'
import { CartDrawer } from './components/CartDrawer'
import { StickyBottomBar } from './components/StickyBottomBar'
import { PRODUCTS } from './data/salesData'
import type { CartItem, Product } from './types/sales'
import { ShoppingCart, Check, X } from 'lucide-react'
import './styles/sales.css'

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalCartPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const idx = prevCart.findIndex((it) => it.product.id === product.id)
      if (idx > -1) {
        const updated = [...prevCart]
        updated[idx] = {
          ...updated[idx],
          quantity: updated[idx].quantity + quantity,
        }
        return updated
      } else {
        return [...prevCart, { product, quantity }]
      }
    })

    setToastMessage(`"${product.name}" telah ditambah ke troli!`)
    setTimeout(() => {
      setToastMessage(null)
    }, 4000)
  }

  const handleDirectBuy = (product: Product, quantity: number = 1) => {
    handleAddToCart(product, quantity)
    setOrderModalOpen(true)
  }

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId)
      return
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const handleOpenOrder = () => {
    if (cart.length === 0) {
      setCart([{ product: PRODUCTS[0], quantity: 1 }])
    }
    setOrderModalOpen(true)
  }

  const handleCloseOrder = () => {
    setOrderModalOpen(false)
  }

  const handleCheckoutFromDrawer = () => {
    setCartDrawerOpen(false)
    setOrderModalOpen(true)
  }

  return (
    <div className="umrah-sales-page">
      {/* Navigation Header */}
      <Navbar
        onOpenOrder={handleOpenOrder}
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenOrder={handleOpenOrder} />

        {/* 2. Masalah Customer */}
        <PainPoints />

        {/* 3. Solution */}
        <Solution />

        {/* 4. Apa Yang Anda Akan Belajar? */}
        <LearningModules />

        {/* 5. Apa Yang Membezakan UMRAH SO EASY? */}
        <Comparison />

        {/* 6. Untuk Siapa? */}
        <TargetAudience />

        {/* 7. Tak Perlu Jadi Travel Expert */}
        <ConfidenceSection />

        {/* 8. Preview Buku */}
        <BookPreview />

        {/* 9. Value Proposition */}
        <ValueProposition />

        {/* 10. Senarai Produk Pilihan (Buku 1 & Buku 2 - RM 19.90) */}
        <ProductList
          onAddToCart={handleAddToCart}
          onDirectBuy={handleDirectBuy}
        />

        {/* 11. Cadangan Bonus */}
        <Bonuses />

        {/* 12. Disclaimer */}
        <Disclaimer />

        {/* 13. Final CTA */}
        <FinalCTA onOpenOrder={handleOpenOrder} />
      </main>

      {/* Footer Rasmi Perniagaan */}
      <Footer />

      {/* Floating Sticky Bottom Bar */}
      <StickyBottomBar
        onOpenOrder={handleOpenOrder}
        cartCount={totalCartCount}
        cartTotal={totalCartPrice}
        onOpenCart={() => setCartDrawerOpen(true)}
      />

      {/* Floating Cart Button (Right Side) */}
      <button
        type="button"
        className="floating-cart-trigger"
        onClick={() => setCartDrawerOpen(true)}
        aria-label="Lihat Troli"
      >
        <ShoppingCart size={24} />
        {totalCartCount > 0 && (
          <span className="floating-cart-badge">{totalCartCount}</span>
        )}
      </button>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="cart-toast-banner">
          <div className="cart-toast-content">
            <div className="cart-toast-icon">
              <Check size={18} strokeWidth={3} />
            </div>
            <span>{toastMessage}</span>
          </div>
          <div className="cart-toast-actions">
            <button
              type="button"
              className="cart-toast-view-btn"
              onClick={() => {
                setToastMessage(null)
                setCartDrawerOpen(true)
              }}
            >
              Lihat Troli
            </button>
            <button
              type="button"
              className="cart-toast-close"
              onClick={() => setToastMessage(null)}
              aria-label="Tutup notifikasi"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckoutFromDrawer}
      />

      {/* Modal Checkout HitPay */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrder}
        cartItems={cart}
      />
    </div>
  )
}
