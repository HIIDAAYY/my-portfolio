# Portofolio — Muhammad Aditia

Website portofolio personal. Next.js 15 (App Router), Tailwind CSS 3, Framer Motion.
Seluruh halaman dirender statis saat build, jadi hosting-nya bisa di mana saja.

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build produksi
```

Build terakhir yang diverifikasi: **berhasil, 4 route statis, 139 kB first load JS.**

## Struktur file

```
portfolio-adit/
├─ app/
│  ├─ layout.tsx        Metadata SEO, Open Graph, JSON-LD, font, skip link
│  ├─ page.tsx          Merangkai seluruh section
│  ├─ globals.css       Design token, utility kustom, efek glow
│  ├─ robots.ts         robots.txt otomatis
│  └─ sitemap.ts        sitemap.xml otomatis
├─ components/
│  ├─ MotionProvider.tsx   LazyMotion — memuat animasi seperlunya saja
│  ├─ Reveal.tsx           Pembungkus scroll-reveal
│  ├─ Icons.tsx            Ikon SVG inline (tanpa library)
│  ├─ Nav.tsx              Navigasi sticky + menu mobile
│  ├─ Hero.tsx             Headline, CTA, stat strip
│  ├─ FeaturedProject.tsx  Kartu besar HAI Support Agent
│  ├─ TechnicalLayer.tsx   Accordion detail teknis
│  ├─ IndustryDemos.tsx    Grid tiga demo industri
│  ├─ DemoCard.tsx         Kartu demo + pratinjau live saat hover
│  ├─ Process.tsx          Empat langkah proses kerja
│  ├─ FinalCta.tsx         Section penutup
│  ├─ Footer.tsx           Footer
│  └─ FloatingWhatsApp.tsx Tombol WA mengambang
├─ lib/
│  └─ site.ts           SEMUA teks, tautan, dan data ada di sini
├─ tailwind.config.ts   Palet ungu, skala tipografi, keyframes
├─ next.config.mjs      Header keamanan
└─ tsconfig.json
```

## Mengubah konten

Hampir semua yang ingin diubah ada di **`lib/site.ts`** — nama, tagline, nomor
WhatsApp, email, daftar demo, isi case study, dan langkah proses. Komponen membaca
dari sana, jadi tidak perlu menyentuh JSX.

## Yang perlu Anda lakukan sebelum rilis

1. **`lib/site.ts` → `site.url`** — ganti `https://muhammadaditia.com` dengan domain final.
   Nilai ini dipakai oleh sitemap, canonical URL, dan Open Graph.

2. **`public/og-image.jpg`** — buat gambar 1200×630 px dan simpan di folder `public/`.
   Ini yang muncul saat link dibagikan di WhatsApp atau LinkedIn. Belum ada di repo.

3. **Periksa layer teknis HAI Support Agent** — `lib/site.ts` → `featured.technical`.
   Isinya saya susun berdasarkan pola arsitektur yang umum untuk agent seperti ini.
   Samakan dengan implementasi Anda yang sebenarnya: kalau tidak memakai embedding,
   atau memakai database tertentu, tulis apa adanya. Recruiter akan menanyakan ini
   di wawancara, jadi setiap kalimat harus bisa Anda pertanggungjawabkan.

4. **Angka di stat strip** — `lib/site.ts` → `stats`. Jalankan Lighthouse pada situs
   ini setelah deploy dan sesuaikan angkanya dengan hasil sebenarnya.

## Deploy

Push ke GitHub, lalu impor repo-nya di Vercel. Tidak ada environment variable yang
dibutuhkan. Build command dan output directory terdeteksi otomatis.

## Catatan teknis

**Kenapa `LazyMotion` + `m`, bukan `motion` biasa**
Mengimpor `motion` menarik seluruh bundel Framer Motion (~40 kB). `LazyMotion` dengan
`domAnimation` hanya memuat fitur animasi DOM (~15 kB). Mode `strict` memaksa
penggunaan `m` agar tidak ada impor berat yang tidak sengaja masuk.

**Kenapa ikon ditulis manual sebagai SVG**
Paket ikon menambah puluhan kilobyte JavaScript untuk sesuatu yang sebenarnya cuma
path statis. Delapan ikon inline jauh lebih murah.

**Kenapa iframe pratinjau tidak dimuat di mobile**
Dua alasan. Pertama, iframe di layar sempit menyandera gerakan scroll pengguna.
Kedua, memuat tiga situs sekaligus di koneksi seluler merusak waktu muat. Di mobile
yang tampil hanya thumbnail warna brand — ringan dan tetap informatif.

**Kenapa animasi dimatikan saat `prefers-reduced-motion`**
Sebagian orang mengalami pusing atau mual karena animasi. `useReducedMotion` dan
media query di `globals.css` mematikan seluruh gerakan bila pengguna sudah mengatur
preferensi itu di sistemnya. Ini juga diperiksa oleh audit aksesibilitas Lighthouse.

**Kenapa semua CTA mengarah ke WhatsApp dengan pesan terisi**
Orang enggan mengetik pesan pembuka. `waLink()` di `lib/site.ts` menyiapkan teksnya,
dan tiap konteks punya pesan berbeda — tombol di kartu demo menyebut industrinya,
tombol di section AI menyebut AI agent. Anda langsung tahu pengunjung datang dari mana.
