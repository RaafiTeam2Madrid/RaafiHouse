import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import PropertyCard from '@/components/property/PropertyCard';
import { properties } from '@/lib/data';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />

      {/* Layer background yang menjorok ke atas (Dribbble style) */}
      <div className="relative z-20 -mt-10 bg-white rounded-t-[40px] pt-16 pb-24 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        
        {/* Featured Section (Langsung ke Hunian Unggulan) */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter italic">Hunian Unggulan</h2>
              <div className="h-1.5 w-16 bg-emerald-500 rounded-full mt-3"></div>
            </div>
            <Link href="/cari" className="group flex items-center gap-2 text-xs font-black text-slate-400 hover:text-emerald-600 transition-colors uppercase tracking-[0.2em]">
              Lihat Semua
              <div className="w-6 h-[2px] bg-slate-200 group-hover:w-10 group-hover:bg-emerald-500 transition-all"></div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>
      </div>

      {/* Minimalist Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black text-slate-900 tracking-tighter">Raafi<span className="text-emerald-600">House.</span></span>
          <p className="text-sm font-medium text-slate-400">© 2026 RaafiHouse. Crafted with precision.</p>
        </div>
      </footer>
    </main>
  );
}