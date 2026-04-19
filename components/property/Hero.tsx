"use client";
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl w-full px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
        >
          Temukan Hunian <span className="text-blue-400">Impian</span> <br /> Tanpa Ribet.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-100 mb-10 max-w-2xl mx-auto"
        >
          Lebih dari 10,000 properti tersedia di seluruh Indonesia. Mulai pencarian Anda hari ini dan temukan harga terbaik.
        </motion.p>

        {/* Form Search Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2"
        >
          {/* Input Lokasi */}
          <div className="flex items-center gap-3 px-4 py-3 w-full border-b md:border-b-0 md:border-r border-slate-100">
            <MapPin className="text-blue-600" size={20} />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-slate-400">Lokasi</p>
              <input 
                type="text" 
                placeholder="Mau tinggal di mana?" 
                className="text-sm font-medium text-slate-700 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Input Tipe */}
          <div className="flex items-center gap-3 px-4 py-3 w-full border-b md:border-b-0 md:border-r border-slate-100">
            <Home className="text-blue-600" size={20} />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-slate-400">Tipe</p>
              <select className="text-sm font-medium text-slate-700 focus:outline-none w-full bg-transparent cursor-pointer">
                <option>Rumah</option>
                <option>Apartemen</option>
                <option>Villa</option>
              </select>
            </div>
          </div>

          {/* Input Harga */}
          <div className="flex items-center gap-3 px-4 py-3 w-full">
            <DollarSign className="text-blue-600" size={20} />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-slate-400">Budget</p>
              <select className="text-sm font-medium text-slate-700 focus:outline-none w-full bg-transparent cursor-pointer">
                <option>Semua Harga</option>
                <option>{"< 500 Juta"}</option>
                <option>500jt - 1M</option>
                <option>{"> 1M"}</option>
              </select>
            </div>
          </div>

          {/* Tombol Search */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-all w-full md:w-auto flex items-center justify-center gap-2 font-bold uppercase text-xs tracking-widest">
            <Search size={20} />
            <span className="md:hidden">Cari Sekarang</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}