# Portofolio Muhammad Aditia

Website portofolio pribadi. Next.js 15 (App Router), Tailwind CSS 3, Framer Motion. Semua halaman dirender statis saat build.

Live: https://portfolio-adit-seven.vercel.app

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build produksi
```

Build terakhir: 4 route statis, 139 kB first load JS.

## Struktur

```
app/
  layout.tsx        metadata SEO, Open Graph, JSON-LD, font
  page.tsx          susunan section
  globals.css       design token dan utility
  robots.ts         robots.txt
  sitemap.ts        sitemap.xml
components/         Nav, Hero, FeaturedProject, IndustryDemos, Process, Footer, dll.
lib/site.ts         semua teks, tautan, dan data
```

Sebagian besar konten (tagline, kontak, daftar demo, case study) diubah dari `lib/site.ts`, tanpa menyentuh komponen.

## Catatan teknis

- **LazyMotion + `m`** dipakai supaya hanya fitur animasi DOM yang dimuat (sekitar 15 kB, dibanding sekitar 40 kB untuk `motion` penuh).
- **Ikon SVG inline**, tanpa paket ikon, karena hanya butuh delapan ikon.
- **Pratinjau iframe tidak dimuat di mobile** supaya scroll tidak tersendat dan halaman tetap ringan di koneksi seluler. Di mobile hanya tampil thumbnail.
- **Animasi dimatikan saat `prefers-reduced-motion`**, baik lewat `useReducedMotion` maupun media query.
- **Tombol CTA membuka WhatsApp dengan pesan yang sudah terisi**, berbeda per konteks, jadi terlihat pengunjung datang dari bagian mana.

## Deploy

Impor repo di Vercel. Tidak butuh environment variable.
