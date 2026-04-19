"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Heart, Star, MapPin } from 'lucide-react';
import { Property } from '@/lib/data';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="bg-white rounded-[40px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
        
        {/* Image Container - Dribbble Style */}
        <div className="relative h-72 w-full rounded-[32px] overflow-hidden mb-5">
          <Image 
            src={property.image} 
            alt={property.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Glassmorphism Badge */}
          <div className="absolute top-4 left-4 backdrop-blur-md bg-white/70 px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm">
            <Star size={14} className="fill-orange-400 text-orange-400" />
            <span className="text-xs font-bold text-slate-900">4.9</span>
          </div>

          <button className="absolute top-4 right-4 p-3 backdrop-blur-md bg-white/70 rounded-full shadow-sm hover:bg-white transition-colors">
            <Heart size={18} className="text-slate-900" />
          </button>
        </div>
        
        {/* Content - Editorial Layout */}
        <div className="px-2">
          <div className="flex justify-between items-start gap-4 mb-3">
            <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors">
              {property.title}
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-2xl font-black text-slate-900 tracking-tighter">
                ${(property.price / 15000000).toFixed(0)}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">/ Month</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-slate-400 mb-6">
            <MapPin size={14} />
            <span className="text-sm font-medium">{property.location}</span>
          </div>
          
          {/* Functional Divider */}
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
            
            <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg uppercase tracking-tighter">
              New Build
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}