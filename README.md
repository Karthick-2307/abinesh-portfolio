# Abinesh Karthick K — Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live-Portfolio-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white)](https://karthick-2307.github.io/abinesh-portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-Karthick--2307-141B2B?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Karthick-2307)
[![LeetCode](https://img.shields.io/badge/LeetCode-Abinesh__Karthick-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/Abinesh_Karthick/)

A modern, high-performance, responsive developer portfolio designed with a futuristic dark theme, glowing gradient accents, and clean engineering aesthetics.

---

## 🚀 Live Demo & Repository
- **GitHub Repository**: [https://github.com/Karthick-2307/abinesh-portfolio](https://github.com/Karthick-2307/abinesh-portfolio)
- **GitHub Profile**: [https://github.com/Karthick-2307](https://github.com/Karthick-2307)
- **LeetCode Profile**: [https://leetcode.com/u/Abinesh_Karthick/](https://leetcode.com/u/Abinesh_Karthick/)

---

## 🎨 Design System & Color Palette
Inspired by modern developer platforms (GitHub, Vercel, Supabase), featuring subtle glassmorphism and purple-cyan glowing gradients.

| Role | Hex Code | Visual Preview |
| :--- | :--- | :--- |
| **Main Background** | `#080B12` | Dark cyber canvas |
| **Secondary Background** | `#101522` | Deep navy section contrast |
| **Card Background** | `#141B2B` | Elevated container surface |
| **Primary Accent** | `#8B5CF6` | Vivid violet / purple glow |
| **Secondary Accent** | `#06B6D4` | Electric cyan |
| **Main Text** | `#F8FAFC` | High-contrast readable typography |
| **Secondary Text** | `#94A3B8` | Muted slate secondary text |
| **Border / Dividers** | `#263247` | Crisp structured borders |

---

## 🛠️ Tech Stack & Architecture
- **Frontend Core**: Semantic HTML5, Modular CSS3, Vanilla ES6+ JavaScript
- **Styling Architecture**: Custom CSS Design Tokens, Glassmorphism, Fluid Flexbox & Grid
- **Icons**: Inline scalable SVG icons with high DPI clarity
- **Interactive Features**:
  - 🌓 Dark / Light Theme Toggle with `localStorage` memory
  - 📱 Responsive Mobile Drawer Navigation
  - ✨ Interactive ambient canvas particle background
  - 🔍 Project Category Filter tabs (`Python & ML`, `Java & DB`, `Web`)
  - 🔄 Dynamic GitHub API status sync with static fallback
  - ✉️ Validated Contact Form with transparent direct `mailto:` handler
  - 📄 Resume download handler

---

## 📁 Project Structure
```text
abinesh-portfolio/
├── 404.html                     # Custom 404 error page
├── index.html                   # Main semantic portfolio entrypoint
├── package.json                 # Project metadata & npm dev scripts
├── README.md                    # Documentation & setup guide
├── .gitignore                   # Version control exclusions
└── assets/
    ├── css/
    │   ├── variables.css        # Color tokens, typography, and spacing
    │   └── main.css             # Main stylesheet & responsive rules
    ├── js/
    │   ├── main.js              # UI interaction & theme controller
    │   ├── projects-data.js     # Curated verified projects data
    │   └── github-api.js        # GitHub API fetcher & fallback
    ├── images/
    │   └── favicon.svg          # AK monogram vector favicon
    └── resume.pdf               # Downloadable resume document
```

---

## 💻 Local Development

### Option 1: Python Built-in Server (Recommended)
Since Python 3 is already on your system, run:
```bash
# Navigate to the portfolio folder
cd abinesh-portfolio

# Start a local web server
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Option 2: Direct File Open
You can also directly double-click `index.html` to open it in Chrome, Edge, or Firefox.

### Option 3: With Node.js / npx (Optional)
```bash
npx serve .
```

---

## 📤 Step-by-Step GitHub Upload & Deployment

### Step 1: Initialize Git and Commit
In your terminal, navigate to the `abinesh-portfolio` directory:
```bash
cd "C:\Users\DELL\.gemini\antigravity\scratch\abinesh-portfolio"
git init
git add .
git commit -m "feat: initial commit of Abinesh Karthick developer portfolio"
```

### Step 2: Create Repository on GitHub
1. Go to [https://github.com/new](https://github.com/new).
2. Repository name: `abinesh-portfolio`
3. Description: `Personal developer portfolio website showcasing full-stack projects and technical skills.`
4. Visibility: **Public**.
5. Do **not** initialize with README or .gitignore (we already created them).
6. Click **Create repository**.

### Step 3: Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/Karthick-2307/abinesh-portfolio.git
git push -u origin main
```

---

## 🌐 Free One-Click Deployment

### Method A: Deploy via GitHub Pages (Free)
1. Go to your GitHub repository: `https://github.com/Karthick-2307/abinesh-portfolio`.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Choose Branch: `main`, Folder: `/ (root)`.
5. Click **Save**.
6. Within 1-2 minutes, your website will be live at:
   `https://karthick-2307.github.io/abinesh-portfolio/`

### Method B: Deploy via Vercel (Instant)
1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New...** > **Project**.
3. Import `abinesh-portfolio`.
4. Keep the default settings and click **Deploy**.
5. Your custom URL (e.g. `abinesh-portfolio.vercel.app`) will be active in seconds!

---

## ✏️ How to Customize Your Content
1. **Resume**: Replace `assets/resume.pdf` with your actual updated resume PDF.
2. **Projects**: Edit `assets/js/projects-data.js` to add new repositories, screenshots, or live demo URLs.
3. **Education Dates & GPA**: In `index.html`, locate the `#education` section to update your graduation batch year and CGPA when ready.

---

## 📬 Contact
- **Developer**: Abinesh Karthick K
- **Email**: [abineshkarthick03@gmail.com](mailto:abineshkarthick03@gmail.com)
- **Phone**: +91 6380467574
- **GitHub**: [@Karthick-2307](https://github.com/Karthick-2307)
- **LeetCode**: [@Abinesh_Karthick](https://leetcode.com/u/Abinesh_Karthick/)
