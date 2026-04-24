import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Text (Bisa diganti image nanti) */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-emerald-600 tracking-tighter">Raafi<span className="text-slate-900">House.</span></span>
        </Link>

        {/* Menus */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
          <Link href="/" className="text-emerald-600">Beranda</Link>
          <Link href="/cari" className="hover:text-emerald-600 transition-colors">Jelajahi</Link>
          <Link href="/tentang" className="hover:text-emerald-600 transition-colors">Tentang Kami</Link>
        </div>

        {/* CTA Button */}
        <Link href="/masuk" className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-emerald-600 transition-colors shadow-md">
          Masuk / Daftar
        </Link>
      </div>
    </nav>
  );
}