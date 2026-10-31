# Ras

A personal interactive love story website created for **Rasgulla** by **Sanjeevi**.

---

## ✨ Features
- **Cinematic Storytelling:** An unfolding romantic experience progressing through memory milestones, gentle reassurances, promises, and the ultimate proposal scene.
- **Custom Romantic Design System:** Handcrafted aesthetic featuring dark warm charcoal (`#1A1210`), ivory text (`#FAF7F2`), blush accents (`#F2E0D6`), dusty rose (`#C9A9A6`), and warm champagne gold gradients (`#D4AF37`).
- **Typography Suite:** Balanced blend of classic Playfair Display serif, readable Inter body, and Dancing Script handwritten flourishes.
- **Micro-Interactions & Atmospherics:** Ambient glowing cursor tracking (`CursorGlow`), gentle floating ember particles (`FloatingParticles`), interactive audio player (`MusicToggle`), and hidden easter eggs (`EasterEgg`).
- **Real Personal Touchpoints:** Embedded pencil sketch of her eyes (`eyes-sketch.jpg`), full flower portrait (`us-flowers.jpg`), and candid mirror selfie (`us-mirror.jpg`).
- **Motion & Accessibility:** Fluid transitions powered by Framer Motion, with automatic fallback for `prefers-reduced-motion`.

---

## 🛠 Tech Stack
- **Framework:** React 18+
- **Build Tool:** Vite 5+
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3+ with custom design tokens
- **Motion & Animation:** Framer Motion
- **Icons:** Lucide React

---

## 🚀 Installation & Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

To create an optimized production build:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 🖼 Image Locations
All personal photos live in `/public/images/`:
- `public/images/eyes-sketch.jpg` — Pencil sketch of Rasgulla's eyes
- `public/images/us-flowers.jpg` — Full photo of the couple together with flowers
- `public/images/us-mirror.jpg` — Close-up mirror selfie of the couple together

---

## 🎵 Music Location
Background romantic audio is configured to stream from `/public/audio/`:
- Add your background music file (e.g. `romantic-track.mp3`) directly inside `public/audio/`.

---

## ✍️ Customization Guide
All personalized narrative content can be easily tailored by editing the data files in `src/data/`:
- `src/data/reasons.ts` — Edit or add the list of things you love about her.
- `src/data/memories.ts` — Customize the journey timeline milestones and descriptions.
- `src/data/promises.ts` — Add personal promises and vows.
- `src/data/easterEggs.ts` — Configure secret triggers and hidden messages.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub (`https://github.com/sanjeevi-007/ras`).
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `ras` repository.
4. Keep the default settings (Framework Preset: **Vite**, Root Directory: `./`).
5. Click **Deploy**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, ensure `base: '/ras/'` is set if using user project pages (`https://<username>.github.io/ras/`).
2. Run `npm run build`.
3. Deploy the `dist/` folder via GitHub Actions or the `gh-pages` branch.
