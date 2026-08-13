# NIDO Research Institute Web Portal

The official web platform for **NIDO Research Institute**, the dedicated academic research arm of NIDO Montessori Preschool. Rooted in real-world Montessori classroom environments, the institute conducts longitudinal micro-research on child development, executive function, sensory refinement, and ecological pedagogy.

---

## 🚀 Quick Start & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** / **yarn**

### Installation & Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/antigravity-nido.git
   cd antigravity-nido
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Linting**:
   ```bash
   npm run lint
   ```

---

## ⚡ Deployment to Vercel

This repository is fully optimized for continuous deployment on **Vercel**.

### Option 1: Automatic Deployment via Git (Recommended)

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [Vercel Dashboard](https://vercel.com/new) and click **"Add New Project"**.
3. Import your git repository.
4. Vercel will automatically detect the settings from `vercel.json` and `package.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Deploy directly from your workspace:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 📂 Project Structure

```
antigravity-nido/
├── public/                 # Static assets (images, icons, favicon)
│   └── images/             # High-resolution research photography
├── src/
│   ├── components/         # React UI components (Hero, Archive, Team, Modals, etc.)
│   ├── data/               # Institutional & research publications dataset
│   ├── App.css             # Main styling tokens and theme
│   ├── App.jsx             # Root React component
│   └── main.jsx            # React entry point
├── index.html              # HTML5 template with SEO, OpenGraph & JSON-LD
├── package.json            # Project configuration & build scripts
├── vercel.json             # Vercel deployment & routing configuration
└── vite.config.js          # Vite build settings
```

---

## 🔒 Security & Performance Features

- **SPA Rewrites**: `vercel.json` configured for client-side routing fallback.
- **Static Asset Caching**: 1-year immutable cache header for `/assets/`.
- **Security Headers**: Includes `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `X-XSS-Protection`.
- **Structured Data**: Built-in `ResearchOrganization` JSON-LD schema for academic search indexability.
