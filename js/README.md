# JavaScript

`app.js` adalah entry point runtime yang berisi kode aplikasi asli NETRUNNER 5.0
(termasuk bundle grafis 3D dan logika simulasi).

Folder `core/`, `game/`, `simulation/`, `ui/`, `data/`, dan `utils/` disiapkan
untuk refactor bertahap. File aplikasi belum dipecah otomatis ke folder-folder
tersebut karena pemecahan bundle tanpa pengujian dapat merusak dependensi internal.
