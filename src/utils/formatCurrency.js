const numberFormatter = new Intl.NumberFormat('id-ID');
const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 0,
});

export const formatRupiah = (value) => rupiahFormatter.format(Number(value) || 0);
export const formatNumberId = (value) => numberFormatter.format(Number(value) || 0);
