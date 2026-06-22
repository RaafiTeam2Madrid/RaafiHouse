export interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  image: string; // Cover utama
  gallery: string[]; // Foto-foto detail
  description: string;
  status: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Cagar House", // Sesuaikan judulnya
    type: "Rumah",
    location: "Cagar, Jakarta Selatan",
    price: 4000000, // Harga sewa per bulan (sesuaikan)
    bedrooms: 3,
    bathrooms: 2,
    // Gunakan "tampak depan" sebagai cover utama
    image: "/tampak depan.png.jpeg",
    // Masukkan SEMUA foto dari folder public ke dalam array gallery
    gallery: [
      "/tampak depan.png.jpeg",
      "/halaman.png.jpeg",
      "/pintu masuk.png.jpeg",
      "/lantai 2.png.jpeg",
      "/dapur.png.jpeg",
      "/kamar 2 depan.png.jpeg",
      "/kamar 2.kanan.png.jpeg",
      "/kamar lat 2 kiri.png.jpeg",
      "/kamar lat 3.jpeg",
      "/balkon lat 2.png.jpeg",
      "/jemuran.png.jpeg",
      "/tampak belakang.png.jpeg",
    ],
    description:
      " RaafiHouse di Jalan Cagar, Cipedak, hanya 20 menit dari UI Depok & 10 menit dari Tol Brigif. Dekat RS & Polsek, akses super cepat. Temukan kost & apartemen idaman sekarang! Rumah sewa 3 lantai yang sangat luas dan nyaman. Memiliki banyak kamar, dapur yang bersih, balkon di lantai atas untuk bersantai, serta area jemuran khusus. Sangat cocok untuk  dijadikan kost/kontrakan patungan mahasiswa dan pekerja.",
    status: "Tersedia",
  },
];
