import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';
import { ShieldCheck, Heart, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero About */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
          Merestorasi Cara <br />
          <span className="text-emerald-500">Mencari Hunian.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
          RaafiHouse lahir dari sebuah rasa frustrasi. Kami percaya bahwa mencari tempat tinggal baik itu kost, apartemen, atau rumah seharusnya menjadi pengalaman yang menyenangkan, bukan hal yang melelahkan dan penuh tipu daya.
        </p>
      </section>

      {/* Image Banner */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop"
            alt="RaafiHouse Vision"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/20"></div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">Nilai Inti Kami</h2>
            <div className="h-1.5 w-16 bg-emerald-500 rounded-full mt-4 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Keamanan Transaksi</h3>
              <p className="text-slate-500 leading-relaxed">Setiap properti dan pemilik yang terdaftar di platform kami telah melewati proses verifikasi ketat untuk mencegah penipuan.</p>
            </div>

            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Proses Instan</h3>
              <p className="text-slate-500 leading-relaxed">Tidak perlu lagi menelepon satu per satu. Cukup satu klik untuk menjadwalkan survey atau menghubungi pemilik via WhatsApp.</p>
            </div>

            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Applicable</h3>
              <p className="text-slate-500 leading-relaxed">Kami merancang platform ini dengan memprioritaskan kenyamanan mata dan kemudahan penggunaan bagi siapa saja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black text-slate-900 tracking-tighter">Raafi<span className="text-emerald-600">House.</span></span>
          <p className="text-sm font-medium text-slate-400">© 2026 RaafiHouse. Crafted with precision.</p>
        </div>
      </footer>
    </main>
  );
}