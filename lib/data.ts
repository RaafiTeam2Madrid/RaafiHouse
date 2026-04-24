export interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  price: number; 
  bedrooms: number;
  bathrooms: number; 
  image: string;
  description: string;
  status: string; 
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Rumah Kontrakan Minimalis Beji",
    type: "Rumah",
    location: "Beji, Depok",
    price: 2500000,
    bedrooms: 2,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=800&auto=format&fit=crop",
    description: "Rumah kontrakan minimalis nyaman di area Beji. Cocok untuk keluarga kecil atau mahasiswa.",
    status: "Disewa",
  },
  {
    id: 2,
    title: "Studio Apartment Margonda Residence",
    type: "Apartemen",
    location: "Margonda, Depok",
    price: 3800000,
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
    description: "Apartemen studio full furnished di lokasi strategis Margonda. Akses mudah ke kampus dan stasiun.",
    status: "Tersedia",
  },
  {
    id: 3,
    title: "Kost Eksklusif Kukusan (Kutek)",
    type: "Kost",
    location: "Kukusan, Depok",
    price: 1500000,
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
    description: "Kost eksklusif kamar mandi dalam dekat pintu belakang UI Kutek. Fasilitas lengkap dan bersih.",
    status: "Sisa 1 Kamar",
  },
];