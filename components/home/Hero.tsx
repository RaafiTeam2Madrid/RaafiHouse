"use client";

import { MapPin, Home, Search, Sparkles, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-slate-900 pt-32 pb-24">
      
      {/* 1. Background Image & Dark Overlay (Diperbaiki agar gelap sempurna) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium House" 
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Gradien gelap penuh dari atas ke bawah untuk kontras teks */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-50 z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full flex flex-col items-center text-center">
        
        {/* 2. Pill Badge (Detail kecil yang bikin mewah) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8 shadow-2xl animate-fade-in-up">
          <Sparkles size={14} />
          Platform Sewa Properti #1
        </div>

        {/* 3. Headline (Tipografi Raksasa) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter mb-6 drop-shadow-2xl">
          Sewa Hunian, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Gak Pake Drama.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-12 drop-shadow-md">
          Ribuan pilihan kost eksklusif, apartemen, dan rumah kontrakan. Langsung jadwalkan survey dengan pemiliknya.
        </p>

        {/* 4. Glassmorphism Search Bar */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-3 rounded-[32px] border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center gap-2 relative">
          
          <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 bg-white/95 rounded-[24px] hover:bg-white transition-colors">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-500">
              <MapPin size={20} />
            </div>
            <div className="flex-1 text-left">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lokasi</label>
              <select className="w-full text-sm font-bold text-slate-900 bg-transparent outline-none cursor-pointer appearance-none">
                <option value="">Area kampus / stasiun...</option>
                <option value="depok">Depok (UI / Gunadarma)</option>
                <option value="jaksel">Jakarta Selatan</option>
              </select>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 bg-white/95 rounded-[24px] hover:bg-white transition-colors">
            <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-500">
              <Home size={20} />
            </div>
            <div className="flex-1 text-left">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Tipe Hunian</label>
              <select className="w-full text-sm font-bold text-slate-900 bg-transparent outline-none cursor-pointer appearance-none">
                <option value="semua">Semua Tipe</option>
                <option value="kost">Kost Eksklusif</option>
                <option value="apartemen">Apartemen</option>
                <option value="rumah">Kontrakan</option>
              </select>
            </div>
          </div>

          <button className="w-full md:w-auto px-10 py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[24px] font-bold transition-all shadow-lg hover:shadow-emerald-500/40 flex items-center justify-center gap-2 hover:-translate-y-1">
            <Search size={20} />
            Cari
          </button>
        </div>
        
        {/* 5. Trust Signals (Statistik di bawah search bar) */}
        <div className="flex items-center justify-center gap-6 mt-12 text-slate-300 text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-emerald-400" />
            Terverifikasi Aman
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 font-black">5K+</span> Properti
          </div>
        </div>

      </div>
    </section>
  );
}