# NETRUNNER 5.0 — Source Code

Proyek ini berisi versi source yang dipisahkan dari file HTML tunggal:
HTML, CSS, dan JavaScript utama.

## Menjalankan proyek

### Opsi A — VS Code Live Server
1. Ekstrak ZIP.
2. Buka folder ini di Visual Studio Code.
3. Pasang ekstensi **Live Server**.
4. Klik kanan `index.html` → **Open with Live Server**.

### Opsi B — Python
Pastikan Python tersedia, lalu jalankan dari terminal pada folder proyek:

```bash
python -m http.server 5500
```

Buka `http://localhost:5500`.

## Struktur lengkap
Lihat `docs/STRUKTUR-PROYEK.md` untuk peta folder dan tanggung jawab tiap folder.

## Catatan penting
- `js/app.js` tetap menyimpan bundle JavaScript asli agar perilaku aplikasi tidak rusak.
- Folder modul di `js/` dan folder aset merupakan struktur siap dikembangkan; belum berarti semua kode sudah dipecah menjadi modul independen.
- Belum ada backend/database Supabase dalam paket ini.
- Aplikasi memerlukan browser dengan dukungan WebGL untuk grafis 3D.
