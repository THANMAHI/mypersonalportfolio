# Thanmahi Peruri — Personal Portfolio Website

A fully responsive, highly polished, and modern personal portfolio website built from scratch. It utilizes a glassmorphic design system, smooth scroll-linked parallax animations, and customized on-scroll reveals. Designed with dark-first aesthetics (auto-switching to high-contrast light mode on preference) and full accessibility integration.

🌐 **Live Deployed Site:** [https://mypersonalportfolio-pink.vercel.app/](https://mypersonalportfolio-pink.vercel.app/)

---

## 🚀 Tech Stack & Libraries

- **Framework:** [React.js](https://react.dev/) (v19)
- **Scaffolding/Bundler:** [Vite](https://vite.dev/) (v8)
- **Animations & Parallax:** [Framer Motion](https://www.framer.com/motion/) (scroll-linked transforms and staggered layout reveals)
- **Icons:** [Lucide React](https://lucide.dev/) (smooth modern iconography)
- **Styling:** Custom Vanilla CSS (with CSS variables, glassmorphic effects, custom scrollbars, and fluid layout grids)

---

## 🛠️ Key Features

1. **Fully Responsive:** Tested and verified on mobile (375px), tablet (768px), and desktop (1280px). Layout collapses into a custom hamburger-menu drawer on mobile.
2. **Scroll-Linked Parallax:** Smooth multi-layered background bubbles floating in the viewport that shift speeds relative to the scrolling pace.
3. **On-Scroll Reveal Animations:** 
   - About section details reveal seamlessly.
   - Skill cards slide in with staggered badge reveals.
   - Project cards scale up with dynamic hover indicators.
4. **Accessible Design:** Implements the required `@media (prefers-reduced-motion: reduce)` block to instantly disable transitions, parallax, and typing effects for users with motion sensitivity.
5. **Interactive Typing Effect:** A custom-engineered React hook dynamically cycles through roles in the Hero section.
6. **Form Validation:** Active JavaScript client-side validation for name, email, and content on the contact page with custom success/error toast feedback.

---

## 📦 Project Directory Structure

```text
├── public/                 # Static assets (Favicons, logos)
├── src/
│   ├── assets/             # Project visual materials
│   ├── App.css             # Scoped overrides
│   ├── App.jsx             # Core page architecture, states, & animations
│   ├── index.css           # Global HSL tokens, glassmorphism utilities & base styles
│   └── main.jsx            # React root mount point
├── index.html              # HTML structure & Google Fonts connection
├── package.json            # Node dependencies and scripts
└── vite.config.js          # Vite custom compiler rules
```

---

## ⚙️ Local Development Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, and follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/THANMAHI/portfolio.git
cd portfolio
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Spin Up the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` to view the live dashboard with Hot Module Replacement (HMR).

### 4. Build for Production
To generate a production-ready package in the `dist/` directory:
```bash
npm run build
```

### 5. Preview the Production Build
```bash
npm run preview
```

---

## 📈 Google Lighthouse Audit Metrics

The codebase is optimized for fast rendering and complies with SEO best practices:

| Category | Score | Required Minimum |
| :--- | :---: | :---: |
| **Performance** | **98** | 80 |
| **Accessibility** | **100** | 90 |
| **Best Practices** | **100** | 90 |
| **SEO** | **100** | 85 |

---

## 👤 Author

- **Name:** Thanmahi Peruri
- **Email:** thanmahi10@gmail.com
- **LinkedIn:** [thanmahi-peruri](https://www.linkedin.com/in/thanmahi-peruri-a9163229b/)
- **GitHub:** [@THANMAHI](https://github.com/THANMAHI)
