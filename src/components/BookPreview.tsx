import React from 'react'
import { Eye, BookOpen, Layers, CheckCircle2, BookmarkCheck } from 'lucide-react'

export const BookPreview: React.FC = () => {
  return (
    <section id="preview" className="section-pad preview-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">
            <Eye size={14} />
            Eksklusif: Lihat Isi Kandungan
          </span>
          <h2 className="section-title">Lihat Apa Yang Ada Dalam Buku</h2>
          <p className="section-subtitle">
            Direka dalam format infografik berwarna, font kemas dan saiz mudah alih supaya selesa dibaca di rumah serta praktikal dibawa ke Tanah Suci.
          </p>
        </div>

        <div className="preview-layout">
          {/* Real Photo Mockup of Interior Spread */}
          <div className="interior-preview-card">
            <img
              src="/images/book-interior.jpg"
              alt="Halaman Dalaman Buku Panduan Umrah So Easy"
              className="interior-preview-img"
              width={720}
              height={405}
              loading="lazy"
            />
          </div>

          {/* Key Visual Features */}
          <div className="preview-features-list">
            <div className="preview-feature-item">
              <div className="preview-feature-icon">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="preview-feature-title">Infografik Tertib Ibadah Umrah</h4>
                <p className="preview-feature-desc">
                  Langkah demi langkah rukun ihram, tawaf 7 pusingan, sa’i Safa ke Marwah dan tahallul bergambar yang jelas dan mudah dihafal.
                </p>
              </div>
            </div>

            <div className="preview-feature-item">
              <div className="preview-feature-icon">
                <Layers size={20} />
              </div>
              <div>
                <h4 className="preview-feature-title">Checklist Lengkap Sebelum Terbang</h4>
                <p className="preview-feature-desc">
                  Senarai semak barang kabin vs kargo, ubatan penting mengikut iklim Saudi, dan dokumen visa yang wajib dipastikan selamat.
                </p>
              </div>
            </div>

            <div className="preview-feature-item">
              <div className="preview-feature-icon">
                <BookmarkCheck size={20} />
              </div>
              <div>
                <h4 className="preview-feature-title">Panduan Aplikasi Digital Terkini</h4>
                <p className="preview-feature-desc">
                  Paparan skrin aplikasi Nusuk, tempahan slot Raudhah tanpa kelam-kabut, serta pengangkutan keretapi laju Haramain.
                </p>
              </div>
            </div>

            <div className="preview-feature-item">
              <div className="preview-feature-icon">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="preview-feature-title">Kertas Berkualiti &amp; Saiz Kompak</h4>
                <p className="preview-feature-desc">
                  Kertas premium tebal tidak mudah koyak, saiz mesra beg sandang agar anda boleh merujuk bila-bila masa ketika berada di Makkah atau Madinah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
