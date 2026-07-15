# TATA'S TOUCH 💅

A demo booking site for a nail salon — fully frontend, cute, and functional. Built to showcase a polished UI/UX without any backend.

![TATA'S TOUCH](https://img.shields.io/badge/status-demo-pink) ![React](https://img.shields.io/badge/react-18-blue) ![TypeScript](https://img.shields.io/badge/typescript-5.6-blue) ![Tailwind](https://img.shields.io/badge/tailwind-4.0-06B6D4) ![Vite](https://img.shields.io/badge/vite-6.0-646CFF)

---

## ✨ Features

- **5 fully designed pages** — Home, Services, Booking, Gallery, About
- **Multi-step booking flow** — Select service → Choose date → Pick time → Enter info → Confirm
- **Category filtering** — Services and gallery filterable by category
- **Image lightbox** — Click to view gallery images in a modal
- **FAQ accordion** — Expandable Q&A section
- **Toast notifications** — Success/info messages for form submissions
- **Fully responsive** — Works on desktop, tablet, and mobile
- **Smooth animations** — Page transitions, hover effects, modal enter/exit via Framer Motion
- **No backend required** — All data is static, all interactions are frontend-only

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Pink | `#E196B5` |
| Deep Berry | `#60102B` |
| White | `#FFFFFF` |
| Font (Headings) | Playfair Display |
| Font (Body) | Nunito |
| Border Radius | 16–24px |
| Icons | Phosphor Icons |

---

## 🚀 Tech Stack

- **[React 18](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[Vite 6](https://vitejs.dev/)** — Build tool
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling
- **[React Router v6](https://reactrouter.com/)** — Client-side routing
- **[Framer Motion](https://www.framer.com/motion/)** — Animations
- **[Phosphor Icons](https://phosphoricons.com/)** — Icon library

---

## 📁 Project Structure

```
src/
├── types/              # TypeScript interfaces
├── constants/          # Static data (services, testimonials, team, gallery, FAQ)
├── hooks/              # Custom React hooks
├── components/
│   ├── ui/             # Reusable components (Button, Card, Modal, Toast, etc.)
│   ├── layout/         # Header, Footer, Layout wrapper
│   ├── home/           # Home page sections
│   ├── services/       # Service cards and filters
│   ├── booking/        # Booking steps (service, date, time, info, review, success)
│   ├── gallery/        # Gallery grid and lightbox
│   └── about/          # Team cards, contact form, FAQ accordion
└── pages/              # Page-level components
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repo
git clone https://github.com/mahi7000/tatas-touch.git
cd tatas-touch

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero banner, about snapshot, services preview, testimonials, Instagram feed |
| `/services` | Services | Full service menu with category filter tabs |
| `/book` | Booking | 5-step booking form with progress indicator |
| `/gallery` | Gallery | Filterable nail art grid with lightbox viewer |
| `/about` | About | Story, team, hours, location, contact form, FAQ |

---

## 🧩 Key Components

- **Booking Flow** — Multi-step form managed by `useBookingSteps` hook with validation at each step
- **Time Slot Generator** — `useTimeSlots` hook generates available/booked slots based on selected date
- **Gallery Filter** — `useGalleryFilter` hook filters images by category with smooth transitions
- **Toast System** — Auto-dismissing notifications for form submissions
- **FAQ Accordion** — Animated expand/collapse with single-open behavior

---

## 📝 Notes

- This is a **demo project** — no real data is stored, no API calls are made
- All bookings are simulated with a fake confirmation number
- Gallery images are placeholder icons (swap with real images in `src/constants/gallery.ts`)
- The warnings in the console about `MaxListenersExceeded` are from browser extensions, not this app

---

## 📄 License

MIT — feel free to use this as a template or starting point for your own projects.

---

Made with 💅 and love by Mahlet Belay