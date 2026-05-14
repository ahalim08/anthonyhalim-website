# anthonyhalim.com Deployment & Documentation Package

**Last updated:** May 13, 2026  
**Project:** Personal website for Anthony Halim — Finance Leader & Advisor  
**Status:** Ready for deployment

---

## 📁 Contents of This Folder

This folder contains all instructions, guidelines, and reference materials needed to deploy and maintain anthonyhalim.com.

### Core Files
- **DEPLOYMENT.md** — Step-by-step guide to deploy via Git → Vercel
- **SITE-STRUCTURE.md** — Current site architecture and file organization
- **CONTENT-GUIDELINES.md** — Complete article writing standards and workflow

### Reference & Archive
- **PUBLISHING-WORKFLOW.md** — Article production process with all steps
- **TONE-VOICE-GUIDELINES.md** — Writing voice and stylistic principles (Register 3)
- **CONTENT-IDEAS.md** — Full backlog of article ideas and series outline

### Site Assets
- **favicon.png** — Site icon (copy to project root during deployment)
- **Personal Site.html** — Main site file (copy to project root during deployment)

---

## 🚀 Quick Start: Deploy in 3 Steps

### 1. Initialize Git & Create GitHub Repo
```bash
cd /path/to/project
git init
git add .
git commit -m "Initial commit: anthonyhalim.com personal website"
```

### 2. Push to GitHub
Create a repo at `github.com/new` named `anthonyhalim-website`, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/anthonyhalim-website.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- Click **+ New Project** → **Import Git Repository**
- Paste your GitHub URL
- Select **Other** as Framework Preset
- Click **Deploy**

Your site will be live at `https://anthonyhalim-website-[random].vercel.app`

**See DEPLOYMENT.md for full details, troubleshooting, and custom domain setup.**

---

## 📝 Content Guidelines Summary

### North Star
Articles are built from **lived experience**, not frameworks. The test: Could an AI have written this from training data alone? If yes, it needs more of Anthony in it.

### Production Workflow (6 steps)
1. Brainstorm + outline
2. Journal mining (search personal journals for relevant experiences)
3. Draft (mark placeholders with `**[Author note: ...]**`)
4. Humanizer review (apply the-humanizer skill)
5. Accent lines (3–4 bolded lines in site accent color `#c84a1f`)
6. Tone-voice pass (apply Register 3 standards)

### Article Length
**800–1,200 words** (excludes title, category, date)

### Key Principles
- Lead with a claim, not context
- First-person authority from direct experience
- Acknowledge failures specifically (not vaguely)
- Include concrete examples or comparison tables
- Add honest tradeoffs section (non-negotiable)
- No consulting-speak or academic hedging

**Full guidelines in CONTENT-GUIDELINES.md**

---

## 🏗️ Site Structure

```
anthonyhalim.com/
├── Personal Site.html       (main entry point)
├── favicon.png              (site icon)
├── tweaks-panel.jsx         (in-page theme controls)
├── directions/
│   ├── shared.jsx           (shared components)
│   └── B_swiss.jsx          (design system components)
├── Content/                 (article markdown files)
│   ├── 2026-02-03-who-is-the-customer.md
│   ├── 2026-05-02-fpa-scaling-part-1.md
│   ├── 2026-05-04-a-booking-is-a-booking.md
│   └── Los Angeles/         (LA series)
└── build/, dist/            (build artifacts, optional)
```

---

## 📚 Active Content Series

### Scaling FP&A ($20M to $250M+)
From Anthony's direct experience at AuditBoard.

- **Part I: The $20M Moment** ✍️ — In progress (1 placeholder remaining)
- **Part II: $50M–$100M** — Not yet started
- Further parts — TBD

### Los Angeles Budget & Civic Finance
A finance professional's lens on how LA spends money and what it should ask itself.

- **Grounding article:** The LA City Budget ($14.85BN, shape and scale)
- **Long-term capital planning:** Why LA has no infrastructure plan
- **LAPD deep dive:** $2.11BN operating budget analysis
- **Plus:** Youth employment, quality-of-life index, civic ecosystem

**Full idea list with 20+ additional topics in CONTENT-IDEAS.md**

---

## 🎨 Design System

**Theme Colors:**
- Primary background: `#ffffff` (light) / `#0c0c0e` (dark)
- Primary text: `#0d0d0e` (light) / `#f0f0f2` (dark)
- Accent: `#f07400` (default, adjustable via tweaks)
- Emphasis accent: `#c84a1f` (used for bolded article lines)

**Typography:**
- Primary font: Inter Tight (weights: 300, 400, 500, 600, 700)
- Code font: JetBrains Mono (weights: 400, 500)

**Tweaks Available:**
- Dark mode toggle
- Accent color picker

---

## ✅ Pre-Deployment Checklist

- [ ] All files in project root or proper subdirectories
- [ ] `favicon.png` present
- [ ] `Personal Site.html` references correct file paths (relative, not absolute)
- [ ] `tweaks-panel.jsx` and `directions/` folder included
- [ ] `.gitignore` created (see DEPLOYMENT.md for template)
- [ ] Git initialized and committed
- [ ] GitHub repo created and pushed
- [ ] Vercel project configured
- [ ] Custom domain DNS configured (if using custom domain)
- [ ] Test site loads correctly in Vercel preview

---

## 🔄 Update & Maintenance Workflow

### Publishing a New Article

1. **Write article** in `Content/` folder following PUBLISHING-WORKFLOW.md
2. **Commit to Git:**
   ```bash
   git add Content/YYYY-MM-DD-article-name.md
   git commit -m "Publish: article title"
   git push origin main
   ```
3. Vercel auto-deploys — article appears on site

### Making Updates to Site Code

1. **Edit files locally**
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Update: describe changes"
   git push origin main
   ```
3. Vercel auto-deploys within seconds

### Toggling Dark Mode / Accent Color

Users can toggle theme directly via the **Tweaks** panel (bottom-right corner when turned on).

---

## 📞 Support & Reference

**Deployment questions?**  
See DEPLOYMENT.md for full guide, troubleshooting, and FAQ.

**Writing an article?**  
1. Start with PUBLISHING-WORKFLOW.md
2. Reference CONTENT-GUIDELINES.md for tone, structure, and standards
3. Review CONTENT-IDEAS.md for backlog and series context

**Design or code questions?**  
- Design system details in this README
- Site structure in SITE-STRUCTURE.md
- Component code in `directions/shared.jsx` and `directions/B_swiss.jsx`

---

## 🔐 Security & Best Practices

- Never commit `.env` files or secrets to Git
- Keep `package.json` dependencies up to date
- Monitor Vercel deployment logs for errors
- Test locally before pushing (`python -m http.server 8000`)
- Use git branches for major feature work, merge to `main` when ready

---

**Project created:** May 13, 2026  
**Ready for deployment**
"# anthonyhalim-website" 
