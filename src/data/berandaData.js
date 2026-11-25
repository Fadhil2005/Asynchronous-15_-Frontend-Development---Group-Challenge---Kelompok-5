import mitra1 from '../assets/mitra/mitra-1.png';
import mitra2 from '../assets/mitra/mitra-2.png';
import mitra3 from '../assets/mitra/mitra-3.png';
import mitra4 from '../assets/mitra/mitra-4.png';
import mitra5 from '../assets/mitra/mitra-5.png';
import mitra6 from '../assets/mitra/mitra-6.png';
import mitra7 from '../assets/mitra/mitra-7.png';
import mitra8 from '../assets/mitra/mitra-8.png';
import mitra9 from '../assets/mitra/mitra-9.png';
import mitra10 from '../assets/mitra/mitra-10.png';

import hutanImg from '../assets/hutan.png';

export const heroForestImage = hutanImg;
export const statisticForestImage = hutanImg;
export const userAvatar =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80';

export const userSummaryData = {
  userName: 'Berbinar G. Boerman',
  accountType: 'Akun pribadi',
  subtitle: 'Langkah kecil hari ini, masa depan lebih baik.',
  globalStatLabel: 'LANGKAH KECIL. DAMPAK NYATA.',
  globalStatPrefix: 'Dunia menghasilkan lebih dari',
  globalStatHighlight: '2 Miliar Ton',
  globalStatSuffix: 'sampah padat perkotaan setiap tahun',
  globalStatNote: 'Diperkirakan naik 73% menjadi 3,88 miliar ton pada 2050.',
  points: 2840,
  pointTarget: 4000,
  activeVouchers: 3,
  voucherNote: '+1 bulan ini',
  depositSteps: [
    { number: '01', text: 'Pisahkan sesuai jenis sampah.' },
    { number: '02', text: 'Bersihkan dan keringkan sampah anorganik.' },
    { number: '03', text: 'Konfirmasi harga dan timbang bersama petugas.' },
  ],
};

export const trashPricesData = [
  { id: 1, category: 'Organik', item: 'Sisa sayur & buah', pricePerKg: 500 },
  { id: 2, category: 'Anorganik · Plastik', item: 'Botol plastik PET', pricePerKg: 3000 },
  { id: 3, category: 'Anorganik · Kertas', item: 'Kardus bersih', pricePerKg: 2000 },
  { id: 4, category: 'Anorganik · Kertas', item: 'Kertas campur', pricePerKg: 1500 },
  { id: 5, category: 'Anorganik · Logam', item: 'Aluminium', pricePerKg: 12000 },
  { id: 6, category: 'Anorganik · Kaca', item: 'Kaca bening', pricePerKg: 500 },
];

export const partnersData = [
  { id: 1, name: 'Mitra 1', logo: mitra1 },
  { id: 2, name: 'Mitra 2', logo: mitra2 },
  { id: 3, name: 'Mitra 3', logo: mitra3 },
  { id: 4, name: 'Mitra 4', logo: mitra4 },
  { id: 5, name: 'Mitra 5', logo: mitra5 },
  { id: 6, name: 'Mitra 6', logo: mitra6 },
  { id: 7, name: 'Mitra 7', logo: mitra7 },
  { id: 8, name: 'Mitra 8', logo: mitra8 },
  { id: 9, name: 'Mitra 9', logo: mitra9 },
  { id: 10, name: 'Mitra 10', logo: mitra10 },
];
