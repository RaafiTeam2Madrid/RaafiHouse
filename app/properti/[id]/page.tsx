"use client";

import { use } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { properties } from '@/lib/data';
import { 
  MapPin, 
  Bed, 
  Bath, 
  ChevronLeft, 
  Share2, 
  Heart, 
  Wifi, 
  AirVent, 
  ShieldCheck,
  MessageCircle
} from 'lucide-react';

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Mengambil ID dari URL
  const { id } = use(params);
  const property = properties.find((p) => p.id === parseInt(id));

  // Jika ID tidak ditemukan di data kita, arahkan ke halaman 404 bawaan
  if (!property) return notFound();

  // Template Pesan WhatsApp
  const waMessage = `Halo, saya tertarik dengan "${property.title}" yang ada di RaafiHouse. Apakah masih tersedia?`;
  const waUrl = `https://wa.me/6285280466179?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="bg-white min-h-screen pb-24">
      
      {/* Top Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors font-bold text-sm group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Kembali
        </Link>
        <div className="flex gap-3">
          <button className="p-2.5 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors">
            <Share2 size={18} />
          </button>
          <button className="p-2.5 rounded-full bg-slate-50 text-slate-600 hover:text-red-500 hover:bg-red-50 transition-colors">
            <Heart size={18} />
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
        
        {/* Kolom Kiri: Visual & Detail */}
        <div className="lg:col-span-8">
          {/* Main Image */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[40px] overflow-hidden mb-10 shadow-lg border border-slate-100">
            <Image 
              src={property.image} 
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-black text-slate-900 uppercase tracking-widest">{property.status}</span>
            </div>
          </div>

          {/* Header Info */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-widest">
                {property.type}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-4 tracking-tighter">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <MapPin size={18} className="text-emerald-500" />
              {property.location}
            </div>
          </div>

          <hr className="border-slate-100 mb-10" />

          {/* Spesifikasi Kamar */}
          <h3 className="text-xl font-black text-slate-900 mb-6">Spesifikasi Unit</h3>
          <div className="flex gap-4 mb-10">
            <div className="flex-1 bg-slate-50 p-5 rounded-3xl border border-slate-100 flex flex-col items-center justify-center gap-2">
              <Bed size={24} className="text-slate-400" />
              <span className="text-sm font-bold text-slate-900">{property.bedrooms} Kamar</span>
            </div>
            <div className="flex-1 bg-slate-50 p-5 rounded-3xl border border-slate-100 flex flex-col items-center justify-center gap-2">
              <Bath size={24} className="text-slate-400" />
              <span className="text-sm font-bold text-slate-900">{property.bathrooms} Toilet</span>
            </div>
            <div className="flex-1 bg-slate-50 p-5 rounded-3xl border border-slate-100 flex flex-col items-center justify-center gap-2">
              <ShieldCheck size={24} className="text-slate-400" />
              <span className="text-sm font-bold text-slate-900">Aman</span>
            </div>
          </div>

          {/* Deskripsi */}
          <h3 className="text-xl font-black text-slate-900 mb-4">Deskripsi</h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-10">
            {property.description}
          </p>

          {/* Fasilitas Dummy */}
          <h3 className="text-xl font-black text-slate-900 mb-6">Fasilitas Termasuk</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100">
              <Wifi size={20} className="text-emerald-500" />
              <span className="text-sm font-bold text-slate-700">WiFi Ngebut</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100">
              <AirVent size={20} className="text-emerald-500" />
              <span className="text-sm font-bold text-slate-700">AC Dingin</span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Floating Price Card */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-28 bg-white p-8 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Harga Sewa</p>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">
                Rp {(property.price / 1000000).toFixed(1)} Jt
              </span>
              <span className="text-sm font-bold text-slate-500 mb-1">/ bulan</span>
            </div>

            <div className="space-y-3 mb-6">
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[24px] flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-emerald-200"
              >
                <MessageCircle size={20} />
                Tanya Pemilik
              </a>
              <button className="w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-[24px] font-bold transition-all border border-slate-200">
                Jadwalkan Survey
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
              Harga belum termasuk listrik
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}