import { Building2 } from 'lucide-react';

export default function PartnersSection({ partners, showAll, onToggleShowAll }) {
  const visiblePartners = showAll ? partners : partners.slice(0, 10);

  return (
    <section className="partners-section">
      <div className="partners-heading">
        <h2>Mitra</h2>
        <button onClick={onToggleShowAll}>{showAll ? 'Tutup daftar' : 'Lihat semua'}</button>
      </div>
      <div className="partners-panel">
        {visiblePartners.map((partner) => (
          <div className="partner-logo" key={partner.id} title={partner.name}>
            {partner.logo
              ? <img src={partner.logo} alt={partner.name} />
              : <Building2 size={27} />}
          </div>
        ))}
      </div>
    </section>
  );
}
