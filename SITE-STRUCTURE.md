# Site Structure — anthonyhalim.com

**Last updated:** May 13, 2026

---

## Project Hierarchy

```
anthonyhalim-website/
│
├── Personal Site.html           ← Main entry point (React app)
├── favicon.png                  ← Site icon
├── tweaks-panel.jsx             ← Theme/accent controls component
│
├── directions/
│   ├── shared.jsx               ← Shared design system components
│   └── B_swiss.jsx              ← Main design system (Swiss B style)
│
├── Content/
│   ├── CLAUDE.md                ← Article writing guidelines
│   ├── memory.md                ← Content index
│   ├── 2026-02-03-who-is-the-customer.md        ← Published
│   ├── 2026-05-02-fpa-scaling-part-1.md         ← In progress
│   ├── 2026-05-04-a-booking-is-a-booking.md     ← Published
│   └── Los Angeles/             ← Article series folder
│       └── (Los Angeles articles)
│
├── build/                       ← Build artifacts (optional)
├── dist/                        ← Distribution folder (optional)
│
└── .gitignore                   ← Git exclusions
```

---

## File Purposes

### Core Files

**Personal Site.html**
- Main entry point (React app via Babel)
- Imports: `tweaks-panel.jsx`, `directions/shared.jsx`, `directions/B_swiss.jsx`
- Handles theme state (dark mode, accent color)
- Renders the full site UI

**tweaks-panel.jsx**
- In-page controls for theme tweaking
- Dark mode toggle
- Accent color picker
- Persists state via localStorage

**directions/shared.jsx**
- Shared components used across the site (headers, footers, navigation, etc.)
- Imported by `B_swiss.jsx`

**directions/B_swiss.jsx**
- Main design system component
- Swiss B style visual language
- Renders the full page layout and content sections
- Imported by `Personal Site.html` as `<SwissB />`

**favicon.png**
- 32×32 icon file
- Displayed in browser tab and bookmarks

---

## Content Organization

All articles live in the `Content/` folder. Subdirectories organize articles by series.

### File Naming Convention
```
YYYY-MM-DD-descriptive-slugified-name.md
```

Examples:
- `2026-02-03-who-is-the-customer.md`
- `2026-05-02-fpa-scaling-part-1.md`
- `2026-05-04-a-booking-is-a-booking.md`

### Series Folders
For multi-part series, create a subfolder:
```
Content/
├── Los Angeles/
│   ├── 2026-05-13-la-city-budget-grounding-article.md
│   ├── 2026-05-12-a-long-term-capital-infrastructure-plan.md
│   └── 2026-05-13-lapd-budget-analysis.md
```

---

## Component Architecture

### React Import Chain

```
Personal Site.html
  ├── tweaks-panel.jsx         (theme controls)
  ├── directions/shared.jsx    (shared components)
  └── directions/B_swiss.jsx   (main site component)
       └── directions/shared.jsx (imports shared components)
```

### Design System (B_swiss.jsx)

The `SwissB` component is the main page renderer. It:
- Receives theme state from `App` (dark mode, accent color)
- Renders header, nav, article listing, and sections
- Uses shared components from `directions/shared.jsx`
- Applies theme colors via CSS variables

---

## Deployment Locations

### Local Development
```bash
http://localhost:8000/Personal\ Site.html
```

### Vercel Production
```
https://anthonyhalim-website.vercel.app
```
or
```
https://anthonyhalim.com  (with custom domain)
```

---

## Asset References

All asset references in HTML must be **relative paths** (not absolute):

✅ Correct:
```html
<script src="tweaks-panel.jsx"></script>
<img src="favicon.png" />
```

❌ Wrong:
```html
<script src="/tweaks-panel.jsx"></script>
<img src="/Users/Anthony/favicon.png" />
```

---

## Adding a New Article

1. Create file in `Content/` with date-based name: `2026-05-14-article-title.md`
2. Write article following guidelines in `Content/CLAUDE.md`
3. Import the markdown file in `B_swiss.jsx` (or update however articles are currently loaded)
4. Commit and push to Git
5. Vercel auto-deploys

---

## CSS and Styling

**Theme Colors** (defined in `Personal Site.html` and `B_swiss.jsx`):
- `paper` — background color
- `ink` — text color
- `rule` — border/divider color
- `muted` — secondary text color
- `faint` — subtle background color
- `accent` — primary accent color (tweakable)

**Typography**:
- Primary: Inter Tight (Google Fonts)
- Code: JetBrains Mono (Google Fonts)

Both fonts are loaded in the `<head>` of `Personal Site.html`.

---

## Build and Distribution

### Optional Build Files
- `build/` — local build artifacts (can be excluded from Git via `.gitignore`)
- `dist/` — distribution folder for bundled output (can be excluded from Git)

Vercel will automatically build and deploy from the source files; these folders are not required for deployment.

### Adding a .gitignore
```
node_modules/
.env.local
dist/
build/
.DS_Store
```

---

## Deployment Configuration

**Vercel Settings** (set during import):
- **Framework Preset:** Other (static HTML with React/Babel)
- **Root Directory:** `.` (project root)
- **Build Command:** None (not required for static site)
- **Output Directory:** None

**Optional: vercel.json** (if needed for routing)
```json
{
  "routes": [
    { "src": "/(.*)", "dest": "/Personal Site.html" }
  ]
}
```

---

## File Size and Performance

**Total project size:** ~500 KB (HTML + JS + CSS + images)

Vercel will auto-optimize:
- Minify JS/CSS
- Compress assets
- Cache static files
- Serve via CDN

No manual build step required.

---

## Troubleshooting

**Site doesn't load in Vercel:**
- Check that all file paths in HTML are relative
- Verify `tweaks-panel.jsx` and `directions/` folder exist
- Check Vercel build logs for errors

**Styles not loading:**
- Verify CSS is inline in HTML or in `<style>` tags
- Check that Google Fonts links are correct

**Articles not showing:**
- Verify markdown files are in `Content/` folder
- Check that `B_swiss.jsx` imports/reads article files correctly

---

**Questions?** See DEPLOYMENT.md or PUBLISHING-WORKFLOW.md
