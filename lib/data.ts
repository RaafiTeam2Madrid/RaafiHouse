export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
  description: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Rumah Minimalis Modern BSD",
    price: 850000000,
    location: "Tangerang Selatan",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    type: "Minimalis",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
    description: "Rumah siap huni dengan desain minimalis di lokasi strategis BSD City."
  },
  {
    id: 2,
    title: "Apartemen Mewah Sudirman",
    price: 2500000000,
    location: "Jakarta Pusat",
    bedrooms: 2,
    bathrooms: 2,
    area: 90,
    type: "Apartemen",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Hunian vertikal eksklusif dengan view kota Jakarta."
  },
  {
    id: 3,
    title: "Villa Cantik Canggu",
    price: 4200000000,
    location: "Badung, Bali",
    bedrooms: 4,
    bathrooms: 4,
    area: 300,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&q=80&w=800",
    description: "Investasi properti terbaik di Bali dengan tingkat okupansi tinggi."
  },
  {
    id: 4,
    title: "Modern Tropical House",
    price: 1200000000,
    location: "Bandung, Jawa Barat",
    bedrooms: 3,
    bathrooms: 3,
    area: 150,
    type: "Modern",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
    description: "Rumah konsep tropis dengan sirkulasi udara yang sangat baik."
  }
];