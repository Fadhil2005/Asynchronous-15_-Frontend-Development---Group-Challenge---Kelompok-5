import { ArrowRight, Scale } from 'lucide-react';
import { heroForestImage } from '../data/berandaData';

export default function HeroSection({ onCariBankClick, onRiwayatClick }) {
  return (
    <section className="hero-card" id="beranda">
      <div className="hero-copy">
        <p className="eyebrow">RECYCLO · LANGKAH KECIL. DAMPAK NYATA.</p>
        <h1>Beri sampah Anda<br />kehidupan baru.</h1>
        <p className="hero-description">
          Recyclo menghubungkan langkah Anda dengan masa depan yang lebih baik.
          Pilah sampah, menabung di bank sampah terdekat, dan pantau dampak
          positif dari setiap setoran Anda.
        </p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={onCariBankClick}>
            <Scale size={17} /> Cari Bank Sampah <ArrowRight size={17} />
          </button>
          <button className="button button-dark" onClick={onRiwayatClick}>
            <ArrowRight size={17} /> Riwayat Transaksi
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <img src={heroForestImage} alt="Hutan hijau yang rimbun" />
        <div className="hero-image-caption">
          <strong>Sampah jadi peluang.</strong>
          <span>Mulai kecil. Beri dampak.</span>
        </div>
      </div>
    </section>
  );
}
