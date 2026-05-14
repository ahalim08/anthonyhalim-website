# Deployment Guide: Personal Website → Git → Vercel

## Prerequisites
- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git installed on your machine

---

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: personal website"
```

### 1.2 Create a `.gitignore` file
Add this to the root of your project to exclude unnecessary files:
```
node_modules/
.env.local
dist/
build/
.DS_Store
```

### 1.3 Add a `package.json` (optional but recommended)
Create `package.json` in your project root for dependency management:
```json
{
  "name": "personal-website",
  "version": "1.0.0",
  "description": "Finance leader and advisor personal website",
  "scripts": {
    "dev": "python -m http.server 8000",
    "build": "echo 'No build step required for static HTML'"
  }
}
```

---

## Step 2: Push to GitHub

### 2.1 Create a new repository on GitHub
1. Go to [github.com/new](https://github.com/new)
2. Name it `personal-website` (or your preferred name)
3. Choose **Public** or **Private** (your preference)
4. Click **Create repository**

### 2.2 Connect your local repo to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **+ New Project**
3. Select **Import Git Repository**
4. Paste your GitHub repo URL: `https://github.com/YOUR_USERNAME/personal-website`
5. Click **Import**
6. **Framework Preset**: Select **Other** (since this is static HTML)
7. **Root Directory**: Leave as `.` (default)
8. Click **Deploy**

Vercel will automatically detect and deploy your `Personal Site.html` file. Your site will be live at `https://personal-website-[random].vercel.app`

### Option B: Deploy via Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. From your project root, run:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Link to your Vercel account
   - Select your project scope
   - Confirm deployment settings
   - Vercel will deploy and provide your live URL

---

## Step 4: Configure Your Domain (Optional)

If you own a custom domain:

1. In Vercel Dashboard, go to your project **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `anthonyhalim.com`)
4. Follow DNS configuration instructions from your domain registrar
5. Vercel provides nameservers or CNAME records to add

---

## Step 5: Update and Redeploy

Every time you make changes to your site:

```bash
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

Vercel automatically redeploys your site when you push to the `main` branch. Your changes will be live within seconds.

---

## Troubleshooting

**Site shows 404 on deployment**
- Ensure `Personal Site.html` is in the root directory
- Add a `vercel.json` file to specify the entry point:
  ```json
  {
    "routes": [
      { "src": "/(.*)", "dest": "/Personal Site.html" }
    ]
  }
  ```

**CSS/JS not loading**
- Check that all file paths in `Personal Site.html` are relative (e.g., `src="tweaks-panel.jsx"` not `/tweaks-panel.jsx`)
- Verify all referenced files are committed to Git

**Tweaks or interactive features not working**
- Ensure `tweaks-panel.jsx` and `directions/` folder are in your repo
- Verify all external libraries (React, Babel) load correctly

---

## Next Steps

- Set up a custom domain
- Configure environment variables in Vercel (if needed)
- Enable branch preview deployments for testing before merging to `main`
- Set up auto-deployments via GitHub webhooks (Vercel does this automatically)

---

**Questions?** See [Vercel Docs](https://vercel.com/docs) or [GitHub Docs](https://docs.github.com).
