"use client";

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import PropertyCard from '@/components/property/PropertyCard';
import { properties } from '@/lib/data';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeType, setActiveType] = useState("Semua");

  const types = ["Semua", "Kost", "Apartemen", "Rumah"];

  // Logika filter sederhana
  const filteredProperties = properties.filter(prop => {
    const matchesSearch = prop.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prop.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeType === "Semua" || prop.type === activeType;
    return matchesSearch && matchesType;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header Section */}
      <div className="bg-slate-900 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Eksplorasi <span className="text-emerald-400">Hunian.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Temukan tempat yang tepat untuk cerita barumu. Gunakan filter di bawah untuk mempersempit pencarian.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white p-2 rounded-full flex items-center shadow-xl">
            <div className="pl-6 pr-4 text-slate-400">
              <Search size={20} />
            </div>
            <input 
              type="text"
              placeholder="Ketik area, nama jalan, atau nama kampus..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-slate-900 font-semibold placeholder:text-slate-400 py-4"
            />
            <button className="bg-emerald-500 text-white p-4 rounded-full hover:bg-emerald-600 transition-colors">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Badges */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-3 overflow-x-auto scrollbar-hide">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide whitespace-nowrap transition-all ${
              activeType === type 
                ? "bg-slate-900 text-white shadow-md" 
                : "bg-white text-slate-500 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[40px] border border-slate-100">
            <MapPin size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-2xl font-black text-slate-900 mb-2">Oops, tidak ditemukan!</h3>
            <p className="text-slate-500">Coba ubah kata kunci atau tipe hunianmu.</p>
          </div>
        )}
      </div>
    </main>
  );
}