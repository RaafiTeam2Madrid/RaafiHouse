import { MapPin, Home, DollarSign, Search } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 pt-20 pb-32 overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" 
          alt="Modern House" 
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Headline */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tighter drop-shadow-lg">
            Temukan <span className="text-emerald-400">Hunian Impian</span> Tanpa Ribet.
          </h1>
          <p className="text-lg text-slate-300 font-medium max-w-xl">
            Jelajahi kost, apartemen, dan kontrakan terbaik di sekitar kampus dengan harga transparan.
          </p>
        </div>

        {/* Search Bar - Professional & Integrated */}
        <div className="bg-white p-2.5 rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-5xl">
          <div className="flex-1 w-full flex items-center gap-4 px-5 py-3 md:border-r border-slate-100">
            <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
              <MapPin size={20} />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lokasi</label>
              <select className="w-full text-sm font-bold text-slate-900 bg-transparent outline-none appearance-none cursor-pointer">
                <option value="">Area kampus / stasiun...</option>
                <option value="depok">Depok (UI / Gunadarma)</option>
                <option value="jakarta-selatan">Jakarta Selatan</option>
              </select>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-4 px-5 py-3 md:border-r border-slate-100">
            <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
              <Home size={20} />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Tipe Hunian</label>
              <select className="w-full text-sm font-bold text-slate-900 bg-transparent outline-none appearance-none cursor-pointer">
                <option value="semua">Semua Tipe</option>
                <option value="kost">Kost</option>
                <option value="apartemen">Apartemen</option>
                <option value="rumah">Kontrakan</option>
              </select>
            </div>
          </div>

          <button className="w-full md:w-auto flex justify-center items-center gap-2 px-10 py-5 bg-emerald-500 text-white rounded-[24px] font-bold hover:bg-emerald-600 transition-all flex-shrink-0 shadow-lg shadow-emerald-200">
            <Search size={20} />
            Cari
          </button>
        </div>
      </div>
    </section>
  );
}