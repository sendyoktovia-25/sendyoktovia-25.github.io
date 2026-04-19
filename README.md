# Sendy Oktovia — Portfolio Website

A high-end, professional single-page portfolio built with **React 18**, **Vite**, **Tailwind CSS v3**, and **Framer Motion**.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion 11 | Animations & transitions |
| Lucide React | Icon library |
| Google Fonts | Sora (display) + DM Sans (body) |

---

## Project Structure

```
sendy-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with mobile menu
│   │   ├── Hero.jsx         # Hero with profile image + stats
│   │   ├── Experience.jsx   # Animated timeline
│   │   ├── Skills.jsx       # Filtered skill grid + language bars
│   │   ├── Education.jsx    # Education card
│   │   ├── Contact.jsx      # Dark footer with contact cards
│   │   └── Section.jsx      # Reusable section wrapper
│   ├── App.jsx              # Root component
│   ├── data.js              # All portfolio content (edit here!)
│   ├── index.css            # Tailwind base + custom styles
│   └── main.jsx             # React entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

### 4. Preview production build locally

```bash
npm run preview
```

---

## Customization

### Update content
All portfolio data lives in **`src/data.js`**. Edit `PROFILE`, `EXPERIENCES`, `SKILLS`, `LANGUAGES`, `EDUCATION`, and `AWARD` — the UI updates automatically.

### Add your own profile photo
Replace the `profileImageUrl` in `src/data.js` with your image path:

```js
// Option A: Use a local image
import profileImg from './assets/photo.jpg'
profileImageUrl: profileImg,

// Option B: Keep the LinkedIn URL (may require CORS proxy)
profileImageUrl: 'https://your-cdn.com/photo.jpg',
```

Or place your image in `public/` and reference it as `/photo.jpg`.

### Change colors
Edit `tailwind.config.js` — the `teal` ramp drives the accent color. Swap it for any color family you prefer.

---

## Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the `dist/` folder to netlify.com/drop
```

### GitHub Pages
```bash
# In vite.config.js, add: base: '/your-repo-name/'
npm run build
# Push dist/ to gh-pages branch
```

---

## Features

- **Framer Motion** scroll-triggered entrance animations on every section
- **Sticky navbar** that transitions from transparent to frosted glass
- **Mobile-responsive** with collapsible hamburger menu
- **Skill filter tabs** — filter by Strategic / Tools / Operations
- **Language proficiency bars** with animated fill on scroll
- **Profile image** with graceful fallback monogram
- **Accessible** — semantic HTML, ARIA labels, keyboard navigable
- **Dark Contact footer** with individual contact cards

---

## License

Personal portfolio — feel free to adapt for your own use.
