# ⚡ LeadFlow AI

**A minimal, high-performance CRM for agencies and freelancers.**  
Track leads, manage follow-ups, and close deals — without the complexity.

---

## ✨ Features

- **Lead Management** — Capture, organize, and track every lead from first contact to conversion
- **Real-time Analytics** — Beautiful charts showing pipeline performance, lead trends, and source breakdowns
- **Status Tracking** — Move leads through `New → Contacted → Converted` with one click
- **Notes & Follow-ups** — Add timestamped notes directly to lead profiles
- **Advanced Filtering** — Search and filter leads by name, email, or status instantly
- **Responsive Design** — Fully mobile-optimized with a collapsible sidebar and adaptive layouts
- **Dark UI** — Sleek glassmorphism design with a dark color palette and smooth animations

---

## 🖥️ Pages

| Route | Description |
|---|---|
| `/` | Landing page with feature overview and CTA |
| `/login` | Authentication page |
| `/dashboard` | KPI cards + lead trend & status distribution charts |
| `/leads` | Full lead table with search, filter, and detail modal |
| `/analytics` | Deep-dive charts: trends, status breakdown, leads by source |
| `/settings` | User profile and account settings |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) with custom design tokens |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| Charts | [Recharts](https://recharts.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Data Fetching | [TanStack Query](https://tanstack.com/query) |
| Notifications | [Sonner](https://sonner.emilkowal.ski/) + Radix Toast |
| Testing | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/leadflow-ai.git
cd leadflow-ai

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run test       # Run tests with Vitest
```

---

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, icons)
├── components/
│   ├── ui/              # shadcn/ui component library
│   ├── DashboardLayout.tsx   # Sidebar + header shell
│   └── LeadDetailModal.tsx   # Lead detail & note editor
├── hooks/
│   ├── use-mobile.tsx   # Responsive breakpoint hook
│   └── use-toast.ts     # Toast notification hook
├── lib/
│   ├── data.ts          # Mock data & TypeScript types
│   └── utils.ts         # Utility functions (cn, etc.)
├── pages/
│   ├── Landing.tsx      # Marketing landing page
│   ├── Login.tsx        # Authentication
│   ├── Dashboard.tsx    # Main dashboard with KPIs
│   ├── Leads.tsx        # Lead management table
│   ├── Analytics.tsx    # Analytics charts
│   └── Settings.tsx     # User settings
├── App.tsx              # Root component & router
├── main.tsx             # Entry point
└── index.css            # Global styles & design tokens
```

---

## 🎨 Design System

LeadFlow AI uses a custom dark theme built on Tailwind CSS with semantic color tokens:

```css
--primary:     230 80% 60%   /* Electric blue */
--accent:      260 70% 60%   /* Purple */
--success:     150 60% 45%   /* Green — converted leads */
--warning:     40  90% 55%   /* Amber — contacted leads */
--info:        200 80% 55%   /* Cyan — new leads */
--background:  230 25% 7%    /* Deep navy */
```

**Component patterns:**
- `.glass-card` — Frosted glass card with backdrop blur
- `.glass-card-hover` — Glass card with animated hover state
- `.gradient-text` — Multi-stop gradient text
- `.glow` / `.glow-sm` — Primary color drop shadow

---

## 📊 Data Model

```typescript
interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;           // "Website Form" | "LinkedIn" | "Referral" | ...
  status: LeadStatus;       // "new" | "contacted" | "converted"
  notes: LeadNote[];
  createdAt: string;        // ISO 8601
  updatedAt: string;
}

interface LeadNote {
  id: string;
  content: string;
  createdAt: string;
}
```

> **Note:** The app currently uses mock data from `src/lib/data.ts`. Swap in your own API calls in the page components to connect a real backend.

---

## 🔐 Authentication

The login page simulates authentication with a 800ms delay. Any non-empty email/password combination grants access and redirects to `/dashboard`.

To integrate real auth, replace the `handleLogin` function in `src/pages/Login.tsx` with your API call (JWT, OAuth, Supabase, etc.).

---

## 🧪 Testing

Tests are located in `src/test/` and use Vitest with jsdom.

```bash
npm run test
```

A `matchMedia` polyfill is included in `src/test/setup.ts` for browser API compatibility in the test environment.

---

## 🗺️ Roadmap

- [ ] Backend integration (REST / GraphQL / Supabase)
- [ ] Real authentication with JWT
- [ ] Add / edit / delete leads from the UI
- [ ] Email integration & automated follow-up reminders
- [ ] CSV import/export
- [ ] Team collaboration & role-based access
- [ ] AI-powered lead scoring

---

## 📄 License

MIT © 2026 LeadFlow AI
