"use client";

import { use } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/lib/data';
import { 
  BedDouble, 
  Bath, 
  Maximize2, 
  MapPin, 
  ChevronLeft, 
  MessageCircle, 
  Share2, 
  Heart 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return notFound();

  const waMessage = `Halo, saya tertarik dengan "${property.title}" di ${property.location}. Bisa minta informasi lebih lanjut?`;
  const waUrl = `https://wa.me/628123456789?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Navigation & Actions */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/properties" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-all font-medium group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Galeri
        </Link>
        <div className="flex gap-4">
          <button className="p-3 rounded-full border border-slate-100 hover:bg-slate-50 transition-colors text-slate-600">
            <Share2 size={20} />
          </button>
          <button className="p-3 rounded-full border border-slate-100 hover:bg-slate-50 transition-colors text-slate-600">
            <Heart size={20} />
          </button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Visual Showcase (Left Column) */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[500px] md:h-[600px] w-full rounded-[32px] overflow-hidden shadow-2xl"
          >
            <Image 
              src={property.image} 
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase italic">
                {property.type}
              </span>
              <span className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-bold tracking-widest uppercase">
                Terverifikasi
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              {property.title}
            </h1>
            
            <div className="flex items-center gap-2 text-slate-500 text-lg">
              <MapPin size={22} className="text-blue-600" />
              {property.location}
            </div>

            <hr className="border-slate-100" />

            <div className="grid grid-cols-3 gap-6 py-4">
              <div className="flex items-center gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <BedDouble size={24} className="text-slate-800" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Kamar Tidur</p>
                  <p className="text-lg font-bold text-slate-900">{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-x border-slate-100 px-6">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <Bath size={24} className="text-slate-800" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Kamar Mandi</p>
                  <p className="text-lg font-bold text-slate-900">{property.bathrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl">
                  <Maximize2 size={24} className="text-slate-800" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Luas Bangunan</p>
                  <p className="text-lg font-bold text-slate-900">{property.area} m²</p>
                </div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Deskripsi Hunian</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {property.description} Nikmati kemewahan dan kenyamanan dalam satu harmoni. Properti ini dirancang khusus untuk Anda yang menghargai kualitas hidup dan nilai estetika yang tinggi.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing & CTA Card (Right Column) */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-slate-900 p-8 rounded-[32px] text-white shadow-2xl shadow-blue-200">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Penawaran Eksklusif</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-black italic">Rp {(property.price / 1000000).toLocaleString('id-ID')}</span>
              <span className="text-slate-400 font-medium">Juta</span>
            </div>

            <div className="space-y-4">
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center gap-3 font-bold transition-all active:scale-95 shadow-lg shadow-blue-900/20"
              >
                <MessageCircle size={20} />
                Hubungi Konsultan
              </a>
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all border border-white/10">
                Jadwalkan Kunjungan
              </button>
            </div>

            <p className="text-[10px] text-slate-500 text-center mt-6 uppercase font-bold tracking-widest">
              Harga belum termasuk biaya notaris & pajak
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}