import { useState } from 'react';
import { X } from 'lucide-react';
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import WelcomeSummary from '../components/welcomeSummary';
import TrashPriceTable from '../components/trashPriceTable';
import PartnersSection from '../components/partnersSection';
import Footer from '../components/footer';
import { userSummaryData, trashPricesData, partnersData } from '../data/berandaData';
import { formatNumberId, formatRupiah } from '../utils/formatCurrency';

export default function Beranda() {
  const [showAllPartners, setShowAllPartners] = useState(false);
  const [saldoModalOpen, setSaldoModalOpen] = useState(false);

  const scrollToPrices = () => {
    document.getElementById('harga-sampah')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <Navbar userName={userSummaryData.userName} accountType={userSummaryData.accountType} />
      <main className="page-content">
        <HeroSection onCariBankClick={scrollToPrices} onRiwayatClick={() => setSaldoModalOpen(true)} />
        <WelcomeSummary data={userSummaryData} onCekSaldo={() => setSaldoModalOpen(true)} />
        <TrashPriceTable prices={trashPricesData} summaryData={userSummaryData} />
        <PartnersSection
          partners={partnersData}
          showAll={showAllPartners}
          onToggleShowAll={() => setShowAllPartners((value) => !value)}
        />
      </main>
      <Footer />

      {saldoModalOpen && (
        <div className="modal-backdrop" onClick={() => setSaldoModalOpen(false)}>
          <div className="saldo-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" aria-label="Tutup" onClick={() => setSaldoModalOpen(false)}><X size={19} /></button>
            <h2>Ringkasan Saldo & Poin Recyclo</h2>
            <div className="modal-points">
              <span>Total Poin Aktif</span>
              <strong>{formatNumberId(userSummaryData.points)} Poin</strong>
              <small>Setara estimasi {formatRupiah(userSummaryData.points * 10)}</small>
            </div>
            <p>Anda memiliki <strong>{userSummaryData.activeVouchers} voucer aktif</strong> yang dapat ditukarkan di bank sampah mitra terdekat.</p>
            <button className="button button-dark" onClick={() => setSaldoModalOpen(false)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}
