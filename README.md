# 🏠 RaafiHouse — Premium Rental & Kost Marketplace

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)

RaafiHouse adalah platform marketplace penyewaan properti (Kost, Apartemen, dan Kontrakan) yang dirancang dengan estetika **High-End Digital Product**. Berfokus pada pengalaman mahasiswa dan profesional muda dalam mencari hunian dengan harga transparan dan proses yang simpel.

---

## ✨ Development Journey

### Day 1: The Visual Foundation
Pada hari pertama, fokus utama adalah membangun identitas visual yang kuat:
- **Immersive Hero Experience**: Desain header dengan *layered gradient overlays* untuk keterbacaan teks maksimal.
- **Editorial Property Cards**: Kartu properti dengan komposisi tipografi ala majalah dan sistem *soft shadow*.
- **UI/UX Refinement**: Menghindari tampilan "AI-generated" dengan mengimplementasikan tata letak asimetris yang elegan.

### Day 2: Business Pivot & Dynamic Architecture
Peralihan fokus dari penjualan properti ke penyewaan (Rent/Kost), dilengkapi dengan arsitektur teknis yang lebih solid:
- **Dynamic Routing (`/properti/[id]`)**: Implementasi halaman detail properti yang dirender secara dinamis berdasarkan ID menggunakan App Router Next.js.
- **Persistent State Management**: Fitur "Favorite (Love)" menggunakan Zustand dengan *middleware persist* (Local Storage), dilengkapi penanganan *Hydration Error* bawaan React.
- **Sticky Marketing UI**: Komponen harga sewa dan tombol CTA WhatsApp yang mengambang (*sticky*) saat pengguna menggulir deskripsi.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (with Persist)

---

## 🚀 Getting Started

Instal dependensi:
```bash
npm install