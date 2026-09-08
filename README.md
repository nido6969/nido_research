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
   Open `http://localhost:3000` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Linting**:
   ```bash
   npm run lint
   ```

---

## Deployment (AWS App Runner)

Push to `main` on [nido6969/nido_research](https://github.com/nido6969/nido_research.git). GitHub Actions lints, builds a Docker image, pushes it to Amazon ECR, and updates App Runner.

See [docs/deploy-aws.md](docs/deploy-aws.md). Watch runs at [Actions](https://github.com/nido6969/nido_research/actions).

Local production server after `npm run build`:

```bash
npm run start
```

Open `http://localhost:3000`.

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
