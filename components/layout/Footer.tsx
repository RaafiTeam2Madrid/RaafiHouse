import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <span className="text-white font-bold text-2xl">Properti<span className="text-blue-500">Ku</span></span>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Solusi terbaik mencari hunian impian dengan proses transparan dan aman.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Cari Properti</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Daftarkan Rumah</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Testimoni</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> halo@propertiku.com</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
          <div className="flex gap-4">
            <Instagram className="hover:text-blue-400 cursor-pointer" size={20} />
            <Twitter className="hover:text-blue-400 cursor-pointer" size={20} />
            <Facebook className="hover:text-blue-400 cursor-pointer" size={20} />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
        © 2026 PropertiKu. All rights reserved.
      </div>
    </footer>
  );
}