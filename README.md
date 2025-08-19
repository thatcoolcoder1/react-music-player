
# 🎵 React Music Player

A sleek, browser-based music player built with **React**, **TypeScript**, and **Vite**.
Upload and play your own downloaded audio files with a minimal, modern UI.

🔗 **Live Demo**: [react-music-player-snpc.vercel.app](https://react-music-player-snpc.vercel.app/)

---

## ✨ Features

* 🎶 Play, pause, skip, and seek through audio
* 📂 Add your own music (via file upload)
* 🎨 Styled with **Tailwind CSS**
* ⚡ Powered by **Vite** for fast development
* 🛠️ Written in **TypeScript** for type safety
* 💾 Stores uploaded audio in **IndexedDB** for persistence (songs remain after reload)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/thatcoolcoder1/react-music-player.git
cd react-music-player
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run in development

```bash
npm run dev
# or
yarn dev
```

App will be running at: **[http://localhost:5173](http://localhost:5173)**

---

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The optimized output will be in the `dist` folder.
Deploy it to **Vercel**, **Netlify**, or any static host.

---

## 🛠️ Development Notes

* **Linting**

  ```bash
  npm run lint
  ```
* **Styling**
  Tailwind is already set up in `tailwind.config.js`.

---

## 📂 Project Structure

```
react-music-player/
├── src/
│   ├── components/   # UI components (Player, Controls, etc.)
│   ├── db/           # IndexedDB management
│   ├── App.tsx       # Main app
│   └── main.tsx      # Entry point
├── public/           # Static assets
├── package.json
└── vite.config.ts
```

---

## ⚠️ Known Limitations

* Songs are stored locally in your browser’s **IndexedDB**.
* They are not synced across devices or browsers.
* Clearing site data will remove saved songs.

---

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push branch (`git push origin feature-name`)
5. Open a Pull Request 🚀

---

