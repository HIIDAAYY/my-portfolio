// Satu sumber kebenaran untuk seluruh konten situs.
// Ubah di sini, semua komponen ikut berubah.

export const site = {
  name: "Muhammad Aditia",
  shortName: "Adit",
  role: "Website & AI Automation Specialist untuk Bisnis & UMKM",
  tagline:
    "Website cepat & AI agent cerdas untuk bisnis yang ingin naik kelas.",
  description:
    "Saya membangun website yang cepat dan AI agent yang melayani pelanggan 24/7 untuk bisnis dan UMKM Indonesia. Rapi di HP, terhubung langsung ke WhatsApp.",
  url: "https://portfolio-adit-seven.vercel.app", // ganti bila sudah punya domain sendiri
  locale: "id_ID",

  contact: {
    whatsapp: "https://wa.me/6285161220535",
    whatsappDisplay: "+62 851-6122-0535",
    email: "aditmuhammad10.ma@gmail.com",
    github: "https://github.com/HIIDAAYY",
  },
} as const;

// Pesan WhatsApp yang sudah terisi otomatis — kurangi gesekan saat orang klik.
export function waLink(message: string) {
  return `${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general:
    "Halo Adit, saya lihat portofolio kamu dan mau diskusi soal website untuk bisnis saya.",
  aiAgent:
    "Halo Adit, saya tertarik dengan AI customer service agent. Bisa dijelaskan cara kerjanya untuk bisnis saya?",
  demo: (industry: string) =>
    `Halo Adit, saya lihat demo ${industry} di portofolio kamu. Saya mau buat yang serupa untuk bisnis saya.`,
} as const;

export const navLinks = [
  { href: "#karya", label: "Karya" },
  { href: "#demo", label: "Demo industri" },
  { href: "#proses", label: "Proses" },
  { href: "#kontak", label: "Kontak" },
] as const;

export const stats = [
  { value: "100/100", label: "Skor Lighthouse", detail: "Performa, SEO, aksesibilitas" },
  { value: "< 1 detik", label: "Waktu muat", detail: "Diukur pada koneksi 4G" },
  { value: "24/7", label: "AI agent aktif", detail: "Balas pelanggan tanpa jeda" },
  { value: "Mobile-first", label: "Dirancang dari HP", detail: "Mayoritas pengunjung UMKM" },
] as const;

export type Demo = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
  live: string;
  repo: string;
  // Warna brand asli tiap demo — dipakai sebagai thumbnail ringan tanpa file gambar.
  swatch: { bg: string; fg: string; accent: string };
};

export const demos: readonly Demo[] = [
  {
    slug: "glowskin",
    title: "GlowSkin",
    industry: "Skincare & beauty",
    summary:
      "Landing page produk skincare dengan kuis penentu rutinitas 60 detik dan slider before-after yang bisa digeser.",
    highlights: [
      "Kuis interaktif 3 langkah yang menghasilkan rekomendasi produk",
      "Slider before-after dan katalog dengan filter kategori",
      "Paket bundling, testimoni terverifikasi, dan FAQ",
    ],
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    live: "https://glowskin-landing.vercel.app",
    repo: "https://github.com/HIIDAAYY/glowskin",
    swatch: { bg: "#F6EFE7", fg: "#7A5340", accent: "#C98F6B" },
  },
  {
    slug: "klinik-gigi",
    title: "Klinik Gigi Senyum Sehat",
    industry: "Kesehatan & klinik",
    summary:
      "Situs klinik gigi keluarga dengan daftar layanan beserta estimasi biaya dan formulir janji temu yang mengarah ke WhatsApp.",
    highlights: [
      "Formulir janji temu dengan validasi hari dan jam praktik",
      "Estimasi biaya dan durasi tiap tindakan ditampilkan di awal",
      "Tetap berfungsi meski JavaScript dimatikan",
    ],
    stack: ["Astro", "TypeScript", "Vitest"],
    live: "https://klinik-senyum-sehat-blush.vercel.app",
    repo: "https://github.com/HIIDAAYY/Klinik-Gigi-Senyum-Sehat",
    swatch: { bg: "#E4EEF5", fg: "#385F7C", accent: "#6FA0C4" },
  },
  {
    slug: "kopi-senja",
    title: "Kopi Senja",
    industry: "F&B & kedai kopi",
    summary:
      "Situs kedai kopi dengan menu berfilter, galeri suasana, dan tombol pesan yang langsung membuka WhatsApp berisi nama menu.",
    highlights: [
      "Menu dengan filter kategori dan tombol pesan per item",
      "Pesan WhatsApp terisi otomatis dengan nama dan harga menu",
      "Peta lokasi tertanam dan jam buka yang jelas",
    ],
    stack: ["Astro", "TypeScript", "Vitest"],
    live: "https://kopi-senja-brown.vercel.app",
    repo: "https://github.com/HIIDAAYY/kopi-senja",
    swatch: { bg: "#EDE3D6", fg: "#6E4B2C", accent: "#B08154" },
  },
];

export const featured = {
  title: "HAI Support Agent",
  kicker: "Proyek unggulan · Produk AI",
  summary:
    "Agen customer service berbasis AI yang menjawab pertanyaan pelanggan dari basis pengetahuan bisnis Anda, lengkap dengan dashboard admin untuk memantau percakapan.",
  live: "https://customer-support-agent-alpha.vercel.app",
  dashboard: "https://customer-support-agent-alpha.vercel.app/admin/dashboard",
  repo: "https://github.com/HIIDAAYY/hai-support-agent",

  // LAYER BISNIS — bahasa pemilik usaha, bukan bahasa developer.
  business: {
    heading: "Apa untungnya buat bisnis Anda",
    points: [
      {
        title: "Pertanyaan berulang dijawab otomatis",
        body: "Jam buka, ongkir, cara pesan, status pesanan. Pertanyaan yang itu-itu saja tidak perlu lagi diketik ulang setiap hari.",
      },
      {
        title: "Pelanggan dilayani di luar jam kerja",
        body: "Chat yang masuk pukul sebelas malam tetap dapat jawaban. Tidak ada calon pembeli yang menunggu sampai besok pagi.",
      },
      {
        title: "Anda tahu apa yang sebenarnya ditanyakan",
        body: "Dashboard mencatat setiap percakapan dan menandai pertanyaan yang belum bisa dijawab, sehingga Anda tahu informasi apa yang perlu ditambahkan.",
      },
      {
        title: "Bisa dialihkan ke manusia kapan saja",
        body: "Untuk keluhan atau kasus rumit, percakapan diteruskan ke WhatsApp Anda. AI menangani yang mudah, Anda menangani yang penting.",
      },
    ],
  },

  // LAYER TEKNIS — untuk recruiter dan developer. Sesuaikan bila implementasi Anda berbeda.
  technical: {
    heading: "Detail teknis",
    architecture: [
      {
        label: "Alur permintaan",
        body: "Pesan pengguna masuk lewat Route Handler di App Router, dicocokkan dengan potongan basis pengetahuan yang relevan lewat pencarian vektor di Pinecone, lalu dikirim ke Claude bersama konteks tersebut. Model dapat memanggil tool — cek ketersediaan jadwal, buat booking, eskalasi ke manusia — dan hasilnya diumpankan balik dalam satu putaran percakapan sampai jawaban final terbentuk.",
      },
      {
        label: "Basis pengetahuan",
        body: "Dokumen bisnis dipecah menjadi potongan kecil dan disimpan sebagai embedding. Saat ada pertanyaan, hanya potongan paling relevan yang diambil dan dimasukkan ke prompt, sehingga jawaban tetap terikat pada data bisnis dan biaya token tidak membengkak.",
      },
      {
        label: "Dashboard admin",
        body: "Halaman terproteksi di /admin/dashboard menampilkan riwayat percakapan, jumlah pesan, dan daftar pertanyaan yang tidak terjawab. Data inilah yang jadi umpan balik untuk memperbaiki basis pengetahuan.",
      },
    ],
    decisions: [
      {
        label: "Kenapa multi-tenant sejak awal",
        body: "Satu codebase melayani banyak klien dengan brand, basis pengetahuan, dan aturan masing-masing. Menambah klien baru berarti menambah data, bukan menyalin dan menempel proyek.",
      },
      {
        label: "Kenapa RAG, bukan menaruh semua data di prompt",
        body: "Menaruh seluruh dokumen di setiap permintaan itu mahal dan justru menurunkan akurasi. Mengambil hanya bagian yang relevan lebih murah sekaligus lebih tepat.",
      },
      {
        label: "Kenapa ada penanda pertanyaan tak terjawab",
        body: "Kualitas agent ditentukan oleh basis pengetahuannya. Tanpa catatan kegagalan, tidak ada cara sistematis untuk memperbaikinya.",
      },
      {
        label: "Kenapa selalu ada jalur ke manusia",
        body: "Agent yang memaksakan diri menjawab keluhan sensitif lebih merusak daripada membantu. Batas kemampuan harus eksplisit.",
      },
    ],
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Anthropic Claude API",
      "RAG · Pinecone",
      "Prisma · PostgreSQL",
      "WhatsApp API (Twilio)",
      "Tailwind CSS",
      "Vercel",
    ],
  },
} as const;

export const process = [
  {
    step: "01",
    title: "Konsultasi & briefing",
    body: "Kita bicara dulu soal bisnis Anda: siapa pelanggannya, pertanyaan apa yang paling sering masuk, dan apa yang ingin dicapai dari website ini. Gratis, tanpa komitmen.",
    duration: "1–2 hari",
  },
  {
    step: "02",
    title: "Desain & prototype",
    body: "Saya susun struktur halaman yang mengarahkan pengunjung ke satu tindakan jelas — chat, pesan, atau buat janji. Anda melihat dan menyetujui tampilannya sebelum satu baris kode ditulis.",
    duration: "2–4 hari",
  },
  {
    step: "03",
    title: "Development & integrasi AI",
    body: "Website dibangun dengan standar performa tinggi dan rapi di layar HP. Bila butuh, AI agent dipasang dan dilatih dengan informasi bisnis Anda.",
    duration: "4–10 hari",
  },
  {
    step: "04",
    title: "Launch & handover",
    body: "Website tayang di domain Anda, plus panduan singkat cara mengubah konten sendiri. Ada masa pendampingan setelah rilis untuk penyesuaian kecil.",
    duration: "1 hari",
  },
] as const;
