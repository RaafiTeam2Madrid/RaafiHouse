"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Heart, Star, MapPin } from 'lucide-react';
import { Property } from '@/lib/data';
import { useFavoriteStore } from '@/store/useFavoriteStore';
import { useEffect, useState } from 'react';

export default function PropertyCard({ property }: { property: Property }) {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const [isFavorite, setIsFavorite] = useState(false);

  // Menghindari Hydration Error
  useEffect(() => {
    setIsFavorite(favorites.includes(property.id));
  }, [favorites, property.id]);

  return (
    <Link href={`/properti/${property.id}`} className="group block">
      <div className="bg-white rounded-[40px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
        
        {/* Image Frame */}
        <div className="relative h-72 w-full rounded-[32px] overflow-hidden mb-5 bg-slate-100">
          <Image 
            src={property.image} 
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm">
            <Star size={14} className="fill-orange-400 text-orange-400" />
            <span className="text-xs font-bold text-slate-900">4.9</span>
          </div>

          <button 
            suppressHydrationWarning
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(property.id);
            }}
            className="absolute top-4 right-4 p-3 backdrop-blur-md bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <Heart size={18} className={isFavorite ? "fill-red-500 text-red-500" : "text-slate-900"} />
          </button>
        </div>
        
        {/* Content */}
        <div className="px-2">
          <div className="flex justify-between items-start gap-4 mb-3">
            <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors line-clamp-2">
              {property.title}
            </h3>
            <div className="flex flex-col items-end flex-shrink-0">
              <span className="text-xl font-black text-slate-900 tracking-tighter">
                Rp {(property.price / 1000000).toFixed(1)} Jt
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">/ Bulan</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-slate-500 mb-6">
            <MapPin size={14} />
            <span className="text-sm font-medium">{property.location}</span>
          </div>
          
          {/* Facilities & Status */}
          <div className="flex items-center justify-between pt-5 border-t border-slate-50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-slate-50 rounded-xl">
                  <Bed size={16} className="text-slate-600" />
                </div>
                <span className="text-sm font-bold text-slate-700">{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-slate-50 rounded-xl">
                  <Bath size={16} className="text-slate-600" />
                </div>
                <span className="text-sm font-bold text-slate-700">{property.bathrooms}</span>
              </div>
            </div>
            
            <span className={`text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-tighter ${
              property.status.includes('Sisa') 
                ? 'bg-orange-50 text-orange-600' 
                : property.status === 'Disewa' 
                  ? 'bg-red-50 text-red-600' 
                  : 'bg-emerald-50 text-emerald-600'
            }`}>
              {property.status}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}