import { Wallet } from 'lucide-react';
import { formatNumberId } from '../utils/formatCurrency';
import { statisticForestImage } from '../data/berandaData';

export default function WelcomeSummary({ data, onCekSaldo }) {
  const progress = Math.min(100, (data.points / data.pointTarget) * 100);

  return (
    <section className="welcome-section">
      <div className="section-intro">
        <h2>Selamat datang, {data.userName}</h2>
        <p>{data.subtitle}</p>
      </div>

      <div className="summary-grid">
        <article className="impact-card">
          <div className="impact-copy">
            <p className="eyebrow">{data.globalStatLabel}</p>
            <p className="impact-prefix">{data.globalStatPrefix}</p>
            <h3>{data.globalStatHighlight}</h3>
            <p className="impact-suffix">{data.globalStatSuffix}</p>
            <p className="impact-note">{data.globalStatNote}</p>
          </div>
          <img src={statisticForestImage} alt="Pepohonan hutan" />
        </article>

        <article className="points-card" id="poin">
          <div className="points-label"><Wallet size={17} /> POIN RECYCLO ANDA</div>
          <div className="points-number">
            <strong>{formatNumberId(data.points)}</strong><span>Poin</span>
          </div>
          <div className="progress-track">
            <div className="progress-value" style={{ width: `${progress}%` }} />
          </div>
          <p className="progress-caption">
            {formatNumberId(data.points)} / {formatNumberId(data.pointTarget)}
          </p>
          <button className="button button-primary button-small" onClick={onCekSaldo}>
            <Wallet size={14} /> Cek Saldo
          </button>
        </article>
      </div>
    </section>
  );
}
