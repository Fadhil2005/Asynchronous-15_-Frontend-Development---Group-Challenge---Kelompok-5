# Recyclo — Halaman Beranda (Frontend React)

Proyek ini merupakan implementasi antarmuka **Halaman Beranda** untuk aplikasi **Recyclo (Aplikasi Pengelolaan Bank Sampah Desa)** yang dibangun menggunakan **React** dan **Vite**, mengacu pada desain UI (*Beranda · Desktop*) serta aset logo brand (`logo-recyclo.png`) dan logo mitra[cite: 40, 71, 72].

## Fitur Halaman Beranda
* **Navbar**: Menampilkan logo `Recyclo`, navigasi menu (`Beranda`, `Peta`, `Poin`, `Riwayat`), dan informasi profil pengguna[cite: 71, 72].
* **Hero Section**: Headline utama, tombol aksi (*Cari Bank Sampah* dan *Riwayat Transaksi*), serta kartu visual bertema alam/hutan[cite: 71].
* **Ringkasan Pengguna & Dampak**: Sapaan pengguna, kartu statistik sampah global, serta kartu *Poin Recyclo* dengan *progress bar* dan tombol *Cek Saldo*[cite: 71].
* **Informasi Harga Sampah**: Tabel harga per kilogram berdasarkan kategori dan jenis sampah, dilengkapi catatan tarif/limbah B3, kartu *Voucer Aktif*, dan panduan *Sebelum menyetor*[cite: 71].
* **Mitra & Footer**: Deretan logo mitra pendukung (dengan toggle *Lihat semua*) serta footer informasi navigasi, akun, dan bantuan[cite: 71].

## Tech Stack & Library yang Digunakan
* **React** (dengan **Vite** sebagai *build tool* dan *dev server* SPA)[cite: 40, 68].
* **Tailwind CSS** (`tailwindcss` & `@tailwindcss/vite`) untuk *styling* antarmuka.
* **lucide-react** untuk ikon antarmuka.
* **ESLint** untuk menjaga kualitas dan aturan penulisan kode JavaScript/React.

*(Catatan: Library lanjutan seperti `react-router-dom`, `@reduxjs/toolkit`, `react-redux`, dan `axios` dipersiapkan untuk pengembangan tahap multi-halaman dan integrasi API/state global berikutnya[cite: 40, 41].)*

## Struktur Folder Utama
```text
recyclo-frontend/
├── public/
├── src/
│   ├── assets/
│   │   ├── logo-recyclo.png
│   │   └── mitra/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── WelcomeSummary.jsx
│   │   ├── TrashPriceTable.jsx
│   │   ├── PartnersSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── berandaData.js
│   ├── pages/
│   │   └── Beranda.jsx
│   ├── utils/
│   │   └── formatCurrency.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Cara Instalasi (Setelah Clone Repository)

1. **Clone repository ke komputer lokal:**
   ```bash
   git clone <url-repository-kamu>
   cd recyclo-frontend
   ```

2. **Install seluruh dependencies utama (`package.json`):**
   ```bash
   npm install
   ```

3. **Install library UI tambahan (jika belum terpasang di `package.json`):**
   ```bash
   npm install tailwindcss @tailwindcss/vite lucide-react
   ```

## Cara Menjalankan Aplikasi

**Jalankan mode development:**
   ```bash
   npm run dev
   ```
