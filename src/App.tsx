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
import { Bonuses } from './components/Bonuses'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQSection } from './components/FAQSection'
import { FinalCTA } from './components/FinalCTA'
import { Disclaimer } from './components/Disclaimer'
import { HitPayCompliance } from './components/HitPayCompliance'
import { Footer } from './components/Footer'
import { OrderModal } from './components/OrderModal'
import { StickyBottomBar } from './components/StickyBottomBar'
import './styles/sales.css'

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [selectedPackageId, setSelectedPackageId] = useState<string>('fizikal')

  const handleOpenOrder = (packageId?: string) => {
    if (packageId) {
      setSelectedPackageId(packageId)
    }
    setOrderModalOpen(true)
  }

  const handleCloseOrder = () => {
    setOrderModalOpen(false)
  }

  return (
    <div className="umrah-sales-page">
      {/* 1. Header & Navigation */}
      <Navbar onOpenOrder={handleOpenOrder} />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenOrder={handleOpenOrder} />

        {/* 3. Masalah Customer (Pain Points) */}
        <PainPoints />

        {/* 4. Solution & Journey Flow Roadmap */}
        <Solution />

        {/* 5. Apa Yang Anda Akan Belajar (5 Modul Utama) */}
        <LearningModules />

        {/* 6. Apa Membezakan & Value Proposition */}
        <Comparison />

        {/* 7. Untuk Siapa? (Audience Suitability) */}
        <TargetAudience />

        {/* 8. Tak Perlu Jadi Travel Expert (3 Kunci Utama) */}
        <ConfidenceSection />

        {/* 9. Preview Buku & Visual Interior Spread */}
        <BookPreview />

        {/* 10. Cadangan 3 Bonus Percuma Eksklusif */}
        <Bonuses />

        {/* 11. Pakej Harga & Integrasi HitPay */}
        <Pricing onSelectPackage={handleOpenOrder} />

        {/* 12. Testimoni & Bukti Sosial Jemaah DIY */}
        <Testimonials />

        {/* 13. Soalan Lazim (FAQ Accordion) */}
        <FAQSection />

        {/* 14. Final Call To Action */}
        <FinalCTA onOpenOrder={handleOpenOrder} />

        {/* 15. Penafian Rasmi Kerajaan Saudi */}
        <Disclaimer />

        {/* 16. Pematuhan Perniagaan & Polisi HitPay */}
        <HitPayCompliance />
      </main>

      {/* 17. Footer Rasmi Perniagaan */}
      <Footer />

      {/* 18. Floating Sticky Bottom Bar dengan Countdown */}
      <StickyBottomBar onOpenOrder={() => handleOpenOrder('fizikal')} />

      {/* 19. Modal Checkout Interaktif HitPay */}
      <OrderModal
        key={selectedPackageId}
        isOpen={orderModalOpen}
        onClose={handleCloseOrder}
        initialPackageId={selectedPackageId}
      />
    </div>
  )
}
