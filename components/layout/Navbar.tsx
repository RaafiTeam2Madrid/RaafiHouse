"use client";
import Link from 'next/link';
import { Home, Search, Heart, Menu } from 'lucide-react';
import { useFavoriteStore } from '@/store/useFavoriteStore';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const favorites = useFavoriteStore((state) => state.favorites);
  const [mounted, setMounted] = useState(false);

  // Mencegah hydration error saat akses localStorage
  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Home className="text-white" size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">Properti<span className="text-blue-600">Ku</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
          <Link href="/properties" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Properties</Link>
          <Link href="/favorites" className="relative text-slate-600 hover:text-blue-600 font-medium transition-colors">
            Favorites
            {mounted && favorites.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-slate-600">
            <Menu size={24} />
          </button>
          <Link href="/properties" className="hidden md:block bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all">
            Cari Rumah
          </Link>
        </div>
      </div>
    </nav>
  );
}