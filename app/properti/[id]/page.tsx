"use client";

import { use, useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { properties } from '@/lib/data';
import { 
  MapPin, Bed, Bath, ChevronLeft, ChevronRight, Share2, Heart, 
  Wifi, AirVent, ShieldCheck, MessageCircle, X, Calendar, Clock, User
} from 'lucide-react';

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === parseInt(id));

  // --- STATE ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // State untuk Modal Survey
  const [showModal, setShowModal] = useState(false);
  const [surveyData, setSurveyData] = useState({ name: '', date: '', time: '' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!property) return notFound();

  // --- FUNGSI GANTI GAMBAR ---
  const handleImageChange = (newIndex: number) => {
    if (currentIndex === newIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 200); 
  };

  const nextImage = () => handleImageChange(currentIndex === property.gallery.length - 1 ? 0 : currentIndex + 1);
  const prevImage = () => handleImageChange(currentIndex === 0 ? property.gallery.length - 1 : currentIndex - 1);

  // --- FUNGSI WHATSAPP ---
  const waUrlTanya = `https://wa.me/6285280466179?text=${encodeURIComponent(`Halo, saya tertarik dengan "${property.title}". Apakah masih tersedia?`)}`;
  
  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ${surveyData.name}. Saya ingin menjadwalkan survey untuk properti "${property.title}" pada:\n\n📅 Tanggal: ${surveyData.date}\n⏰ Jam: ${surveyData.time}\n\nApakah jadwal ini memungkinkan?`;
    window.open(`https://wa.me/6285280466179?text=${encodeURIComponent(message)}`, '_blank');
    setShowModal(false); // Tutup modal setelah kirim
  };

  return (
    <main className="bg-white min-h-screen pb-24 overflow-hidden relative">
      
      {/* Top Navigation */}
      <nav className={`max-w-7xl mx-auto px-6 py-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-40 transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors font-bold text-sm group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Kembali
        </Link>
        <div className="flex gap-3">
          <button className="p-2.5 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors hover:scale-110">
            <Share2 size={18} />
          </button>
          <button className="p-2.5 rounded-full bg-slate-50 text-slate-600 hover:text-red-500 hover:bg-red-50 transition-colors hover:scale-110">
            <Heart size={18} />
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
        
        {/* Kolom Kiri: Visual & Detail */}
        <div className={`lg:col-span-8 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[40px] overflow-hidden mb-4 shadow-lg border border-slate-100 bg-slate-900 group">
            <Image 
              src={property.gallery[currentIndex]} 
              alt={property.title}
              fill
              className={`object-cover transition-all duration-300 ease-out ${isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>

            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg z-10">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg z-10">
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-white/30 z-10">
              <span className="text-xs font-black text-white tracking-widest drop-shadow-md">
                {currentIndex + 1} / {property.gallery.length}
              </span>
            </div>

            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-black text-slate-900 uppercase tracking-widest">{property.status}</span>
            </div>
          </div>

          <div className="flex gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {property.gallery.map((imgUrl, index) => (
              <button 
                key={index}
                onClick={() => handleImageChange(index)}
                className={`relative h-20 w-28 flex-shrink-0 rounded-[20px] overflow-hidden border-2 transition-all duration-300 snap-center ${currentIndex === index ? 'border-emerald-500 opacity-100 shadow-lg scale-105' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-100'}`}
              >
                <Image src={imgUrl} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Info & Deskripsi */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-widest">{property.type}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-4 tracking-tighter">{property.title}</h1>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <MapPin size={18} className="text-emerald-500" />
              {property.location}
            </div>
          </div>

          <hr className="border-slate-100 mb-10" />

          <h3 className="text-xl font-black text-slate-900 mb-6">Spesifikasi Unit</h3>
          <div className="flex gap-4 mb-10">
            <div className="flex-1 bg-slate-50 p-5 rounded-3xl border border-slate-100 flex flex-col items-center justify-center gap-2 hover:bg-emerald-50 hover:border-emerald-100 transition-colors group">
              <Bed size={24} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
              <span className="text-sm font-bold text-slate-900">{property.bedrooms} Kamar</span>
            </div>
            <div className="flex-1 bg-slate-50 p-5 rounded-3xl border border-slate-100 flex flex-col items-center justify-center gap-2 hover:bg-emerald-50 hover:border-emerald-100 transition-colors group">
              <Bath size={24} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
              <span className="text-sm font-bold text-slate-900">{property.bathrooms} Toilet</span>
            </div>
            <div className="flex-1 bg-slate-50 p-5 rounded-3xl border border-slate-100 flex flex-col items-center justify-center gap-2 hover:bg-emerald-50 hover:border-emerald-100 transition-colors group">
              <ShieldCheck size={24} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
              <span className="text-sm font-bold text-slate-900">Aman</span>
            </div>
          </div>

          <h3 className="text-xl font-black text-slate-900 mb-4">Deskripsi</h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-10">{property.description}</p>
        </div>

        {/* Kolom Kanan: Floating Price Card */}
        <div className={`lg:col-span-4 relative transition-all duration-1000 delay-300 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="sticky top-28 bg-white p-8 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-100">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Harga Sewa</p>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-4xl font-black text-slate-900 tracking-tighter">
                Rp {(property.price / 1000000).toFixed(1)} Jt
              </span>
              <span className="text-sm font-bold text-slate-500 mb-1">/ bulan</span>
            </div>

            <div className="space-y-3 mb-6">
              <a 
                href={waUrlTanya}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[24px] flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-emerald-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle size={20} />
                Tanya Pemilik
              </a>
              {/* TOMBOL JADWALKAN SURVEY DIAKTIFKAN DI SINI */}
              <button 
                onClick={() => setShowModal(true)}
                className="w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-[24px] font-bold transition-all border border-slate-200 hover:-translate-y-1 flex justify-center items-center gap-2"
              >
                <Calendar size={18} className="text-slate-500" />
                Jadwalkan Survey
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">Harga belum termasuk listrik</p>
          </div>
        </div>
      </div>

      {/* --- MODAL JADWALKAN SURVEY --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Background Overlay gelap dengan blur */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
          ></div>
          
          {/* Modal Box */}
          <div className="relative bg-white w-full max-w-md p-8 rounded-[40px] shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
            {/* Tombol Close (X) */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Atur Jadwal Kunjungan</h2>
            <p className="text-sm font-medium text-slate-500 mb-8">Pilih waktu terbaikmu untuk melihat {property.type.toLowerCase()} ini secara langsung.</p>

            <form onSubmit={handleSurveySubmit} className="space-y-5">
              {/* Input Nama */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={surveyData.name}
                    onChange={(e) => setSurveyData({...surveyData, name: e.target.value})}
                    placeholder="Contoh: Raafi Adithya"
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  />
                </div>
              </div>

              {/* Input Tanggal & Waktu (Bersebelahan) */}
              <div className="flex gap-4">
                <div className="flex-1 space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Tanggal</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-slate-400" />
                    </div>
                    <input 
                      type="date" 
                      required
                      value={surveyData.date}
                      onChange={(e) => setSurveyData({...surveyData, date: e.target.value})}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Waktu</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Clock size={18} className="text-slate-400" />
                    </div>
                    <input 
                      type="time" 
                      required
                      value={surveyData.time}
                      onChange={(e) => setSurveyData({...surveyData, time: e.target.value})}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Tombol Submit */}
              <button 
                type="submit"
                className="w-full py-4 mt-4 bg-slate-900 hover:bg-emerald-500 text-white rounded-[24px] font-bold transition-all shadow-xl hover:shadow-emerald-200 hover:-translate-y-1"
              >
                Kirim Permintaan Survey
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}