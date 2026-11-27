# Struktur Proyek NETRUNNER 5.0

```text
NETRUNNER-5-SOURCE/
├── index.html
├── README.md
├── package.json
├── .gitignore
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── README.md
│   ├── core/
│   ├── game/
│   ├── simulation/
│   ├── ui/
│   ├── data/
│   └── utils/
├── assets/
│   ├── images/
│   ├── models/
│   ├── textures/
│   ├── audio/
│   └── icons/
├── config/
└── docs/
    └── STRUKTUR-PROYEK.md
```

## Fungsi folder

- `index.html`: halaman utama yang dimuat browser.
- `css/style.css`: seluruh style aplikasi.
- `js/app.js`: JavaScript runtime asli, termasuk bundle grafis 3D.
- `js/core`: modul inti aplikasi (tempat refactor berikutnya).
- `js/game`: sistem permainan, interaksi, misi, dan progres.
- `js/simulation`: simulasi perangkat dan jaringan.
- `js/ui`: komponen antarmuka.
- `js/data`: data misi, perangkat, dan materi.
- `js/utils`: fungsi bantuan yang dipakai bersama.
- `assets`: tempat aset gambar, model, tekstur, audio, dan ikon.
- `config`: konfigurasi pengembangan.
- `docs`: dokumentasi proyek.

## Status pemisahan kode

HTML, CSS, dan JavaScript utama sudah dipisahkan. JavaScript asli masih berada
di `js/app.js` sebagai satu bundle agar aplikasi tetap berjalan sama seperti
file sumber yang diberikan. Folder JavaScript lainnya adalah struktur siap
pakai untuk pemecahan modul secara bertahap; folder tersebut belum berisi
implementasi fitur terpisah.
