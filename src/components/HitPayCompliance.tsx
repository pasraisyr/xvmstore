import React from 'react'
import { ShieldCheck, Truck, RefreshCcw, Lock } from 'lucide-react'
import { SITE_INFO } from '../data/salesData'

export const HitPayCompliance: React.FC = () => {
  return (
    <section id="polisi" className="compliance-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--slate-900)' }}>
            Pematuhan Perniagaan &amp; Jaminan Pelanggan
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)', marginTop: '4px' }}>
            Operasi rasmi {SITE_INFO.merchantName} mengikut garis panduan gerbang pembayaran HitPay dan undang-undang kepenggunaan Malaysia.
          </p>
        </div>

        <div className="compliance-grid">
          <div className="compliance-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <RefreshCcw size={18} color="var(--primary-700)" />
              <h4>Pemulangan &amp; Bayaran Balik</h4>
            </div>
            <p>
              Tuntutan bayaran balik atau gantian buku fizikal yang rosak boleh dibuat dalam tempoh 7 hari selepas barang diterima dengan bukti pesanan rasmi.
            </p>
          </div>

          <div className="compliance-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Truck size={18} color="var(--primary-700)" />
              <h4>Polisi Penghantaran</h4>
            </div>
            <p>
              Pesanan diproses dalam 1-2 hari bekerja. Penghantaran Semenanjung mengambil masa 1-3 hari, Sabah/Sarawak 3-5 hari bekerja dengan nombor penjejakan kurier.
            </p>
          </div>

          <div className="compliance-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Lock size={18} color="var(--primary-700)" />
              <h4>Dasar Privasi (PDPA 2010)</h4>
            </div>
            <p>
              Data pelanggan dilindungi di bawah Akta Perlindungan Data Peribadi 2010 Malaysia. Kami tidak akan menjual atau berkongsi maklumat anda kepada pihak ketiga.
            </p>
          </div>

          <div className="compliance-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <ShieldCheck size={18} color="var(--primary-700)" />
              <h4>Gerbang Bayaran Selamat</h4>
            </div>
            <p>
              Semua transaksi diproses secara telus melalui HitPay Payment Gateway. Tiada maklumat kad disimpan pada pelayan kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
