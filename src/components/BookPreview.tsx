import React from 'react'
import { BookOpen } from 'lucide-react'

export const BookPreview: React.FC = () => {
  return (
    <section id="preview" className="section-pad preview-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag gold">
            <BookOpen size={14} />
            <span>Format Ringkas</span>
          </div>
          <h2 className="section-title">Lihat Apa Yang Ada Dalam Buku</h2>
          <p className="section-subtitle">
            Direka dalam format ringkas dan visual supaya mudah dibaca dan mudah dibawa ketika travel di Tanah Suci.
          </p>
        </div>

        <div className="preview-layout">
          <div className="interior-preview-card">
            <img
              src="/images/book-interior.jpg"
              alt="Halaman Dalaman Buku Panduan Umrah So Easy"
              className="interior-preview-img"
              width={820}
              height={460}
              loading="lazy"
            />
            <div className="interior-preview-caption">
              <span>📖 Contoh susun atur dalaman buku yang padat dengan panduan visual dan infografik.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
