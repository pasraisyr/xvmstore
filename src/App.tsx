import { useState } from 'react'
import './App.css'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /*
  const products = [
    {
      id: '01',
      name: 'XVM Tactical Sling Bag',
      category: 'Beg & Aksesori',
      desc: 'Beg sandang harian kalis air 900D dengan compartment berbilang ruang dan zip keselamatan.',
      specs: ['Material kalis air 900D', 'Ruang tablet & peranti', 'Tali bahu boleh laras'],
      price: 'RM 89.00'
    },
    {
      id: '02',
      name: 'XVM Wireless Power Bank 10,000mAh',
      category: 'Gajet & Kuasa',
      desc: 'Pengecas mudah alih sokongan pengecasan pantas 22.5W dan magnetik tanpa wayar.',
      specs: ['Pengecasan pantas 22.5W', 'Sokongan magnetik tanpa wayar', 'Paparan digital bateri'],
      price: 'RM 119.00'
    },
    {
      id: '03',
      name: 'XVM Heavyweight Cotton T-Shirt',
      category: 'Pakaian & Streetwear',
      desc: 'T-shirt potongan standard diperbuat daripada 100% kapas 260GSM tahan lasak.',
      specs: ['100% Cotton 260GSM', 'Kolar kualiti tinggi', 'Kain sejuk & tebal'],
      price: 'RM 69.00'
    },
    {
      id: '04',
      name: 'XVM RFID Metal Cardholder',
      category: 'Aksesori & EDC',
      desc: 'Dompet kad aluminium kompak dengan perlindungan sekatan frekuensi RFID dan ejector pantas.',
      specs: ['Perlindungan RFID anti-skimming', 'Kapasiti 6-8 keping kad', 'Klip tunai keluli'],
      price: 'RM 45.00'
    },
    {
      id: '05',
      name: 'XVM Active Wireless Earbuds',
      category: 'Audio',
      desc: 'Fon telinga Bluetooth 5.3 dengan mod pembatalan hingar aktif (ANC) dan bateri sehingga 24 jam.',
      specs: ['Active Noise Cancellation', 'Bluetooth 5.3', 'Ketahanan bateri 24 jam'],
      price: 'RM 169.00'
    },
    {
      id: '06',
      name: 'XVM EDC Titanium Carabiner',
      category: 'Aksesori & EDC',
      desc: 'Gantungan kunci serbaguna aloi titanium dengan fungsi pembuka botol dan klip tahan karat.',
      specs: ['Aloi titanium ringan', 'Fungsi pembuka botol', 'Tahan beban & karat'],
      price: 'RM 39.00'
    }
  ]
  */

  return (
    <div className={`page-wrapper ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      {/* Header */}
      <header className="site-header">
        <div className="site-container">
          <div className="nav-inner">
            <a href="#hero" className="brand-logo">
              XVM STORE
            </a>

            <nav className="nav-links">
              <a href="#hero" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Utama</a>
              <a href="mailto:support@xvmstore.com" className="nav-link">support@xvmstore.com</a>
            </nav>

            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              Hubungi WhatsApp
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? 'Tutup' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section (First Section Sahaja) */}
        <section id="hero" className="hero-section">
          <div className="site-container">
            <div className="hero-meta">Laman Rasmi Perniagaan</div>
            <h1 className="hero-title">
              Koleksi Barangan Keperluan &amp; Aksesori Harian
            </h1>
            <p className="hero-desc">
              Selamat datang ke laman web rasmi <strong>XVM Store</strong>. Kami membekalkan pilihan barangan keperluan harian dan aksesori terpilih. Semua transaksi pesanan atas talian kami diproses secara selamat melalui gerbang pembayaran <strong>HitPay</strong>.
            </p>

            <div className="hero-actions">
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Hubungi Kami di WhatsApp
              </a>
              <a
                href="mailto:support@xvmstore.com"
                className="btn-secondary"
              >
                Emel: support@xvmstore.com
              </a>
            </div>

            {/* Trust Points */}
            <div className="trust-row">
              <div className="trust-cell">
                <h4>Bayaran Selamat</h4>
                <p>FPX, DuitNow QR &amp; Kad melalui HitPay</p>
              </div>
              <div className="trust-cell">
                <h4>Penghantaran</h4>
                <p>Kurier berdaftar seluruh Malaysia</p>
              </div>
              <div className="trust-cell">
                <h4>Resit Rasmi</h4>
                <p>Pengesahan pesanan terus ke emel</p>
              </div>
              <div className="trust-cell">
                <h4>Khidmat Pelanggan</h4>
                <p>Isnin - Sabtu, 9.00 AM - 6.00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* 
        ===================================================================
        PRODUK & SEKSYEN LAIN (DI-COMMENT OUT SEMENTARA WAKTU ATAS PERMINTAAN)
        ===================================================================

        <section id="katalog" className="section">
          <div className="site-container">
            <div className="section-head">
              <div className="section-kicker">Katalog</div>
              <h2 className="section-heading">Senarai Produk &amp; Harga Rasmi</h2>
              <p className="section-subheading">
                Berikut adalah barangan yang sedia untuk ditempah melalui XVM Store. Harga dipaparkan dalam Ringgit Malaysia (MYR).
              </p>
            </div>

            <div className="product-grid">
              {products.map((item) => (
                <div key={item.id} className="product-box">
                  <div>
                    <div className="product-cat">{item.category}</div>
                    <h3 className="product-title">{item.name}</h3>
                    <p className="product-desc">{item.desc}</p>
                    <ul className="product-specs">
                      {item.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-footer">
                    <div className="product-price">{item.price}</div>
                    <a
                      href={`https://wa.me/60123456789?text=Hai%20XVM%20Store,%20saya%20berminat%20dengan%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-order"
                    >
                      Buat Pesanan
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-note">
              <strong>Nota Pembayaran:</strong> Setiap pesanan akan diproses menggunakan invois dan pautan bayaran rasmi <strong>HitPay</strong>. Pelanggan akan menerima resit pengesahan selepas bayaran berjaya dibuat.
            </div>
          </div>
        </section>

        <section id="pembayaran" className="section">
          <div className="site-container">
            <div className="section-head">
              <div className="section-kicker">Pembayaran</div>
              <h2 className="section-heading">Integrasi Gerbang Bayaran HitPay</h2>
              <p className="section-subheading">
                Kami menyediakan kaedah bayaran yang pantas dan selamat disokong oleh HitPay Payment Gateway.
              </p>
            </div>

            <div className="payment-grid">
              <div className="payment-card">
                <h3>Kaedah Bayaran Diterima</h3>
                <p>
                  Pelanggan boleh membuat bayaran terus tanpa caj tersembunyi menggunakan mana-mana saluran berikut:
                </p>

                <div className="payment-methods-grid">
                  <div className="method-item">FPX Online Banking</div>
                  <div className="method-item">DuitNow QR</div>
                  <div className="method-item">Kad Debit / Kredit Visa</div>
                  <div className="method-item">Mastercard (3D Secure)</div>
                  <div className="method-item">Touch 'n Go eWallet</div>
                  <div className="method-item">GrabPay</div>
                </div>
              </div>

              <div className="payment-card">
                <h3>Jaminan Keselamatan Data</h3>
                <p>
                  Keselamatan maklumat pembayaran pelanggan adalah keutamaan kami:
                </p>

                <ul className="security-points">
                  <li>
                    <span>Semua transaksi dienkripsi dengan piawaian keselamatan perbankan SSL / PCI-DSS.</span>
                  </li>
                  <li>
                    <span>Maklumat kad perbankan tidak disimpan di dalam sistem kami.</span>
                  </li>
                  <li>
                    <span>Pengesahan status transaksi secara automatik melalui sistem HitPay.</span>
                  </li>
                  <li>
                    <span>Salinan resit rasmi dijana dan dihantar terus ke emel pembeli.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="tentang" className="section">
          <div className="site-container">
            <div className="section-head">
              <div className="section-kicker">Maklumat Perniagaan</div>
              <h2 className="section-heading">Profil Syarikat &amp; Hubungi</h2>
              <p className="section-subheading">
                Maklumat operasi perniagaan XVM Store bagi rujukan pelanggan dan pengesahan rasmi pihak gateway.
              </p>
            </div>

            <div className="info-grid">
              <div className="info-pane">
                <h3>Tentang XVM Store</h3>
                <p>
                  <strong>XVM Store</strong> adalah sebuah entiti perniagaan tempatan di Malaysia yang menjual barangan keperluan harian dan aksesori gaya hidup berkualiti.
                </p>
                <p>
                  Kami komited untuk menyediakan produk yang berkualiti serta pengalaman urus niaga yang telus dan selamat kepada para pelanggan.
                </p>
              </div>

              <div id="hubungi" className="info-pane">
                <h3>Hubungi Khidmat Pelanggan</h3>
                <p>
                  Untuk sebarang pertanyaan berkenaan produk, status penghantaran, atau pengesahan pembayaran, sila hubungi kami:
                </p>

                <table className="contact-table">
                  <tbody>
                    <tr>
                      <td>Emel Rasmi</td>
                      <td>support@xvmstore.com</td>
                    </tr>
                    <tr>
                      <td>WhatsApp</td>
                      <td>+60 12-345 6789</td>
                    </tr>
                    <tr>
                      <td>Lokasi</td>
                      <td>Kuala Lumpur &amp; Selangor, Malaysia</td>
                    </tr>
                    <tr>
                      <td>Waktu Operasi</td>
                      <td>Isnin – Sabtu (9:00 AM – 6:00 PM)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="polisi" className="section">
          <div className="site-container">
            <div className="section-head">
              <div className="section-kicker">Pematuhan &amp; Syarat</div>
              <h2 className="section-heading">Polisi Perniagaan</h2>
              <p className="section-subheading">
                Syarat dan ketetapan rasmi XVM Store mengikut garis panduan gerbang pembayaran HitPay dan undang-undang kepenggunaan.
              </p>
            </div>

            <div className="policies-list">
              <div className="policy-item">
                <h4>Polisi Pemulangan &amp; Bayaran Balik</h4>
                <p>
                  Pemulangan atau bayaran balik boleh dimohon dalam tempoh 7 hari bekerja selepas barang diterima sekiranya terdapat kecacatan kilang atau barang tidak sepadan dengan pesanan. Tuntutan mesti disertakan bukti pembelian.
                </p>
              </div>

              <div className="policy-item">
                <h4>Polisi Penghantaran (Shipping)</h4>
                <p>
                  Pesanan diproses dalam 1 hingga 2 hari bekerja. Penghantaran ke Semenanjung Malaysia mengambil masa 1-3 hari, dan Sabah/Sarawak 3-5 hari bekerja menggunakan kurier tempatan berdaftar dengan nombor penjejakan.
                </p>
              </div>

              <div className="policy-item">
                <h4>Dasar Privasi (Privacy Policy)</h4>
                <p>
                  Data peribadi pelanggan yang dikumpulkan semasa urusan pembelian dilindungi di bawah Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia dan tidak akan dikongsi kepada pihak ketiga tanpa kebenaran.
                </p>
              </div>

              <div className="policy-item">
                <h4>Terma &amp; Syarat Perkhidmatan</h4>
                <p>
                  Dengan membuat pembelian di laman ini, pelanggan bersetuju dengan harga barangan yang dipaparkan dan kaedah pembayaran selamat melalui pautan HitPay yang disediakan.
                </p>
              </div>
            </div>
          </div>
        </section>
        */}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-inner">
            <div className="footer-left">
              &copy; {new Date().getFullYear()} XVM Store. Hak Cipta Terpelihara. Pembayaran disokong melalui HitPay.
            </div>

            <div className="footer-nav">
              <a href="mailto:support@xvmstore.com">support@xvmstore.com</a>
              <a href="https://wa.me/60123456789" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
