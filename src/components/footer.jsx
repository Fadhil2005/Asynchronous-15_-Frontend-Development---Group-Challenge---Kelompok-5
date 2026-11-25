import logoRecyclo from '../assets/logo-recyclo.png';

const columns = [
  { title: 'Jelajahi', links: [['Beranda', '#beranda'], ['Peta', '#peta'], ['Poin Recyclo', '#poin']] },
  { title: 'Akun Anda', links: [['Profil Saya', '#profil'], ['Riwayat Transaksi', '#riwayat'], ['Pengaturan Akun', '#pengaturan']] },
  { title: 'Bantuan', links: [['Pusat Bantuan', '#bantuan'], ['Pedoman Komunitas', '#pedoman'], ['Privasi & Ketentuan', '#privasi']] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logoRecyclo} alt="Recyclo" />
          <p>
            Recyclo membantu Anda memilah sampah, menemukan bank sampah terdekat,
            serta mengubah kebiasaan daur ulang menjadi tabungan dan manfaat.
            Langkah kecil, dampak nyata.
          </p>
        </div>
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div><span>Recyclo · Aplikasi Pengelolaan Bank Sampah Desa</span><span>Kelompok 5 · Cereces · CAMP 05</span></div>
      </div>
    </footer>
  );
}
