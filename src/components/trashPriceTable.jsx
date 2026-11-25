import { ReceiptText, Scale } from 'lucide-react';
import { formatRupiah } from '../utils/formatCurrency';

export default function TrashPriceTable({ prices, summaryData }) {
  return (
    <section className="price-section" id="harga-sampah">
      <div className="section-intro compact">
        <h2>Informasi Harga Sampah</h2>
        <p>Kenali jenis sampah dan nilai setoran per kilogram sebelum datang ke bank sampah.</p>
      </div>

      <div className="price-layout">
        <div className="price-main">
          <div className="price-table-wrap">
            <div className="table-scroll">
              <table className="price-table">
                <thead>
                  <tr><th>KATEGORI</th><th>JENIS SAMPAH</th><th>HARGA / KG</th></tr>
                </thead>
                <tbody>
                  {prices.map((row) => (
                    <tr key={row.id}>
                      <td>{row.category}</td>
                      <td className="item-cell">{row.item}</td>
                      <td className="price-cell">{formatRupiah(row.pricePerKg)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="price-disclaimer">
              <strong>CONTOH HARGA</strong> · Bukan tarif resmi. Harga aktual mengikuti<br className="desktop-break" />
              jenis, kondisi sampah, dan ketentuan bank sampah tujuan.
            </p>
          </div>
          <p className="hazard-note">
            Residu dan limbah B3 tidak masuk daftar jual. Hubungi petugas untuk informasi penanganannya.
          </p>
        </div>

        <aside className="price-sidebar">
          <article className="voucher-card">
            <ReceiptText size={18} />
            <div className="voucher-content">
              <strong>{summaryData.activeVouchers}</strong>
              <span>Voucer Aktif</span>
            </div>
            <p>{summaryData.voucherNote}</p>
          </article>

          <article className="deposit-card">
            <Scale size={18} />
            <h3>Sebelum menyetor</h3>
            <ol>
              {summaryData.depositSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span><p>{step.text}</p>
                </li>
              ))}
            </ol>
          </article>
        </aside>
      </div>
    </section>
  );
}
