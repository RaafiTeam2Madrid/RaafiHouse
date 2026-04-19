"use client";

import { useState } from 'react';
import Image from 'next/image';
import PropertyCard from '@/components/property/PropertyCard';
import { properties } from '@/lib/data';
import { Search, MapPin, Bell, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ["All", "House", "Apartment", "Villa", "Condo"];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProperties = properties.filter(prop => 
    activeCategory === "All" ? true : prop.type === activeCategory
  );

  return (
    <main className="min-h-screen bg-white pb-24 relative overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[580px] w-full bg-slate-900">
        <Image 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
          alt="Modern Luxury House"
          fill
          className="object-cover opacity-80"
          priority
        />
        
        {/* Gradient Overlays untuk Kedalaman Visual */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/40 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-12 h-full flex flex-col">
          {/* Header Nav */}
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
              <MapPin size={16} className="text-emerald-400" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Jakarta, Indonesia</span>
            </div>
            <button className="p-3.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all">
              <Bell size={22} />
            </button>
          </div>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-black text-white leading-[1.05] mb-10 tracking-tighter drop-shadow-2xl">
              Elevate Your <br />
              <span className="text-emerald-400">Living Style.</span>
            </h1>
            
            {/* Search Bar - Elevated Style */}
            <div className="flex items-center bg-white p-2.5 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.3)] max-w-xl border border-white">
              <div className="flex-1 flex items-center px-5">
                <Search className="text-slate-300 mr-3" size={22} />
                <input 
                  type="text" 
                  placeholder="Where is your dream home?"
                  className="w-full bg-transparent border-none outline-none text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium"
                />
              </div>
              <button className="bg-slate-900 text-white p-4.5 rounded-[24px] hover:bg-emerald-500 transition-all shadow-lg flex items-center justify-center">
                <SlidersHorizontal size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION WITH CUSTOM BACKGROUND --- */}
      <section className="relative z-20 -mt-20">
        
        {/* Background Layer untuk Area Properti (Anti-Polos) */}
        <div className="absolute inset-0 bg-[#F8FAFC] rounded-t-[60px] shadow-[0_-20px_40px_rgba(0,0,0,0.02)] z-0"></div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-8 pt-4 relative z-10">
          
          {/* Category Filter - Floating Style */}
          <div className="flex gap-4 overflow-x-auto pb-14 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-4.5 rounded-[26px] font-black text-[13px] uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-slate-900 text-white shadow-[0_20px_40px_rgba(15,23,42,0.25)] -translate-y-2 scale-105" 
                    : "bg-white text-slate-400 border border-slate-100 hover:text-slate-900 shadow-sm hover:shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Section Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Featured Listings</h2>
              <div className="h-1.5 w-12 bg-emerald-500 rounded-full mt-3"></div>
            </div>
            <button className="group flex items-center gap-3 text-[12px] font-black text-slate-400 hover:text-slate-900 transition-all uppercase tracking-[0.25em]">
              Explore All
              <div className="w-8 h-[2px] bg-slate-200 group-hover:w-14 group-hover:bg-emerald-500 transition-all duration-500"></div>
            </button>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-20">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}