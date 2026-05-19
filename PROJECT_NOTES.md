# Anthony Halim Portfolio — Project Notes

**Last Updated:** May 2026  
**Status:** Live at https://anthonyhalim-website.vercel.app

---

## Project Overview

Personal portfolio and professional landing page for Anthony Halim, a finance leader and advisor working with founders, executives, and operators.

**Tech Stack:**
- HTML / React / JSX
- Vercel deployment (auto-redeploy on git push)
- Custom Swiss-style design system (Direction B)
- Dark/light mode toggle with tweakable accent color

---

## Design Direction & Aesthetic Decisions

### Color Palette
- **Primary Accent:** Purple (#a855f7)
  - Used sparingly for key callouts and highlights
  - Applied to word "legible" in hero tagline
  - Used in pulse animation on navigation clicks
- **Dark Mode Accent:** #ee6638 (rust, shifted via wrapper)
- **Typography:** Inter Tight (sans), JetBrains Mono (mono)
- **Background:** #ffffff (light), #0c0c0e (dark)
- **Text Colors:** #0d0d0e (light ink), #f0f0f2 (dark ink)

### Visual Style
- Minimal, Swiss-inspired grid layout
- Tight modular spacing
- Numbered table of contents sidebar (01–07 sections)
- Monospace kicker text for section labels
- No rounded corners (only subtle 6px on cards/buttons)
- Grid-based metrics cards with soft purple backgrounds

---

## Key Messaging & Copy Updates

### Hero Section
**Tagline:**
> Building planning systems that  
> make ambition **legible**  
> for both humans and robots.

- "legible" is highlighted in purple accent
- "humans and robots" signals AI-forward thinking
- Three-line layout for visual rhythm

**Intro Paragraph:**
> I help founders, executives, and operators make confident, data-driven decisions in an ever evolving landscape.

- **Order intentional:** founders first (reflects background)
- Single-line paragraph (max-width increased to 900px)
- Acknowledges rapidly changing landscape (AI context)

### Experience Section Copy Updates
1. **A Halim Advisory, Founder & Advisor**
   - Bullet 1: "TAM analyses, market entry strategy, and top-line ambition." (parallel structure)
   - Bullet 2: "Design multi-year planning models that connect growth, hiring velocity, and cash discipline for a clearer path." (tightened)

2. **AuditBoard, Corporate FP&A Leader**
   - Bullet 1: Split into two sentences for clarity
     - "Led corporate FP&A through rapid scale."
     - "Built the planning, reporting, and accounting infrastructure that supported growth from ~$20M to $250M+ in ARR."
   - Bullet 2: Split into two sentences
     - "Partnered with go-to-market leadership on quota design, commissions, and long-range ARR forecasting."
     - "Scaled finance systems to match increasing organizational complexity."

### Footer
- Updated to "May 2026" (was April 2026)
- Location: Los Angeles

---

## Interactive Features

### Navigation
- **Sidebar Index:** 7 clickable sections (01–07)
- **Active State:** Bold text + purple dot indicator
- **Animation:** Purple dot pulses 3 times on click (3s duration)
- **Scroll Behavior:** Smooth scrolling with 100px offset (prevents sticky header cutoff)
- **Mobile:** Menu drawer on small screens

### Email Contact
- **Primary Button:** `mailto:` link (for users with default email client)
- **Fallback Button:** "Copy Email" — copies to clipboard
- **Toast Notification:** "Copied!" appears at bottom of screen for 2s
- **Styling:** Both buttons match LinkedIn button (ghostBtnB styling)

### Dark/Light Mode
- Toggle in tweaks panel
- Persists accent color preference
- Real-time theme switching

---

## Sections & Content Structure

| # | Section | Key Elements | Notes |
|---|---------|--------------|-------|
| 01 | Profile (Hero) | Tagline, intro, 4 metrics cards | Purple accent on "legible" |
| 02 | Approach | 3 philosophy pillars | Grid layout |
| 03 | Practice | 2 work contexts (inside/advisor) | Bullet points |
| 04 | Experience | 4 roles with dates & bullets | Chronological order |
| 05 | Playground | 4 interactive tools/experiments | All dimmed (not yet live); accent color preserved |
| 06 | Writing | 2 article previews | Entry 01 live; entry 02 dimmed (draft, not yet available) |
| 07 | Contact | Call to action, email + LinkedIn links | Updated May 2026 |

---

## Writing & Future Content

### Article Mockup Created
- **File:** `writing-article.html`
- **Template:** 800–1200 word articles with:
  - Date, title, excerpt
  - Body text with h2 subheadings
  - Chart/graph placeholders
  - Pull quotes (with purple border accent)
  - Author footer
  - Responsive design

### Publishing Workflow
1. User writes article (800–1200 words)
2. Provides content + any requirements (images, graphs)
3. Developer creates individual HTML file in `/writing/` folder
4. Links added from main site Writing section to article pages
5. Articles are self-contained and shareable

### Future Playground Items
- Forecast Sandbox (FP&A tool with sliders)
- Board Deck Audit (AI scoring of deck clarity)
- Quiet Charts (low-ink chart library)
- LA Spend × Crime (interactive civic data viz)

---

## Technical Implementation

### File Structure
```
project-root/
├── index.html              (main entry point)
├── index-standalone-final.html (bundled version for deployment)
├── directions/
│   ├── B_swiss.jsx        (main component, Swiss design system)
│   └── shared.jsx         (content data + helpers)
├── tweaks-panel.jsx       (dark mode + accent color controls)
├── writing-article.html   (article template/mockup)
└── PROJECT_NOTES.md       (this file)
```

### Build Process
1. Edit source files (index.html, B_swiss.jsx, shared.jsx)
2. Run `super_inline_html` to bundle into standalone HTML
3. Test locally in preview
4. Push to GitHub: `git add index.html && git commit -m "..." && git push origin main`
5. Vercel auto-deploys

### Deployment
- **Host:** Vercel
- **Domain:** anthonyhalim-website.vercel.app (custom domain anthonyhalim.com planned)
- **Trigger:** Auto-redeploy on push to main branch

---

## Animation & Micro-interactions

### Dot Pulse Animation
- **Trigger:** Click any sidebar navigation link
- **Duration:** 3 seconds
- **Effect:** Purple dot expands to 1.8x scale, back to normal, repeats 3 times
- **Timing:** 10%, 45%, 80% keyframes
- **Easing:** ease-in-out

### Scroll Behavior
- Page-wide `scroll-behavior: smooth`
- Navigation links scroll with 100px offset to prevent header overlap

### Hover States
- Navigation links: accent underline slides in on hover
- Buttons: brightness filter increase on hover

---

## Design Decisions & Rationale

### Why "legible" in purple?
- Key concept reflecting core value (making ambition visible/understandable)
- Purple accent is distinctive and premium
- Single-word highlight draws eye and creates visual interest

### Why "humans and robots"?
- Acknowledges AI transformation in finance
- Positions Anthony as forward-thinking
- Differentiates from traditional finance advisors
- Sets up future Writing topics on AI + finance

### Why founders-first in intro?
- Aligns with personal background (A Halim Advisory)
- Earlier-stage focus; executives/operators secondary
- More authentic to actual work

### Why split bullets into two sentences?
- Better readability
- Creates visual rhythm
- Each statement gets proper emphasis
- Matches conversational tone goal

### Why copy-to-clipboard fallback?
- `mailto:` doesn't work if user has no default email client set
- Provides universal solution without external API
- Toast notification confirms success

---

## Outstanding Items & Future Work

### Immediate
- [ ] Connect custom domain (anthonyhalim.com)
- [ ] Add actual writing articles to `/writing/` folder
- [ ] Build Playground tools (Forecast Sandbox, etc)

### Medium-term
- [ ] Add speaker notes to writing articles
- [ ] Create About/methodology page (optional)
- [ ] Implement search functionality (optional)

### Long-term
- [ ] Consider CMS if writing volume grows (Ghost, Substack, etc)
- [ ] Add analytics (Vercel Analytics or similar)
- [ ] Build interactive tools (FP&A model, etc)

---

## Tweaks Available to Users

Via the Tweaks panel (toolbar toggle):
1. **Dark Mode** — Toggle on/off
2. **Accent Color** — Select from curated palette
   - Purple (#a855f7) — default
   - Other options TBD

Changes persist on page reload via `__edit_mode_set_keys` protocol.

---

## Notes for Future Edits

- **Do NOT edit `index-standalone-final.html` directly** — it's a compiled bundle. Edit source files instead, then rebundle.
- **Rebundling workflow:** After editing source files, re-run the bundler on `index.html` → `index-standalone-final.html`. The standalone file is what gets deployed; changes to source files alone will NOT reflect in the deployed site until rebundled.
- **Always update both**:
  - Copy text: edit `directions/shared.jsx` (CONTENT object)
  - Component structure / visual logic: edit `directions/B_swiss.jsx`
- **Test in preview, push to GitHub, verify on Vercel** — never manually push to server
- **Increment version on major changes** — helps with debugging

---

## Contact & Questions

All contact information is in the footer of the site:
- Email: anthonyhalim85@gmail.com
- LinkedIn: linkedin.com/in/ahalim
- Location: Los Angeles

---

**End of Project Notes**
