// Direction B — "Swiss Index" · responsive (mobile + desktop)
// All-sans, tight modular grid, numbered ToC sidebar, rust accent used sparingly.
// Mobile breakpoint at 768px: sidebar collapses, grids stack to single column,
// type scales down, sticky nav becomes a slim bar with menu drawer.

const swissB = {
  ink: '#0d0d0e',
  paper: '#ffffff',
  rule: 'rgba(13, 13, 14, 0.10)',
  muted: 'rgba(13, 13, 14, 0.55)',
  faint: 'rgba(13, 13, 14, 0.04)',
  accent: '#c84a1f', // rust — punched up. dark mode shifts to #ee6638 via wrapper.
  sans: '"Inter Tight", -apple-system, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, Menlo, monospace'
};

// Inject responsive CSS once
if (typeof document !== 'undefined' && !document.getElementById('swissB-css')) {
  const s = document.createElement('style');
  s.id = 'swissB-css';
  s.textContent = `
    @keyframes sbSlideInLeft{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
    @keyframes sbFadeInUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes sbColorPulse{0%,100%{color:var(--sb-accent)}50%{color:var(--sb-accent-light)}}
    @keyframes sbUnderlineSlide{from{width:0}to{width:100%}}
    
    .sb-shell{display:grid;grid-template-columns:220px 1fr;align-items:start}
    .sb-aside{position:sticky;top:65px;padding:40px 24px 40px 40px;font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:0.04em}
    .sb-main{padding:40px 56px 0 0;border-left:1px solid var(--sb-rule)}
    .sb-section{padding:64px 0 64px 56px;border-top:1px solid var(--sb-rule)}
    .sb-hero{padding:40px 0 72px 56px}
    .sb-h1{font-weight:500;font-size:64px;line-height:1.05;letter-spacing:-0.035em;margin:24px 0 24px;max-width:920px}
    .sb-lede{font-size:17px;line-height:1.55;max-width:900px;margin:0}
    .sb-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:56px}
    .sb-metric-v{font-size:32px;font-weight:800;letter-spacing:-0.02em}
    .sb-approach-grid{margin-top:28px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:32px}
    .sb-practice-grid{margin-top:28px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
    .sb-exp-row{display:grid;grid-template-columns:180px 1fr 200px;gap:32px;padding:28px 0}
    .sb-pg-grid{margin-top:28px;display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
    .sb-writing-row{display:grid;grid-template-columns:60px 1fr 120px;gap:24px;padding:16px 0;align-items:baseline}
    .sb-contact-h{font-size:44px;font-weight:500;letter-spacing:-0.03em;line-height:1.1;margin-top:24px;max-width:800px}
    .sb-mobile-trigger{display:none}
    .sb-topbar-right{display:flex;align-items:center;gap:8px}
    .sb-search-btn{padding:7px 10px;border-radius:6px;cursor:pointer;display:flex;align-items:center;font-family:"Inter Tight",sans-serif}
    .sb-nav-link{position:relative;color:inherit;text-decoration:none;padding-bottom:4px}
    .sb-nav-link::after{content:'';position:absolute;bottom:0;left:0;height:2px;background:var(--sb-accent);width:0;transition:width 0.3s cubic-bezier(0.34,1.56,0.64,1)}
    .sb-nav-link:hover::after{width:100%}
    .sb-hero{animation:sbSlideInLeft 0.5s ease-out forwards}
    .sb-btn{transition:all 0.2s ease}
    .sb-btn:hover{filter:brightness(1.1)}
    .sb-section:not(:first-of-type){animation:sbFadeInUp 0.6s ease-out forwards}
    .sb-accent-pulse{animation:sbColorPulse 2s ease-in-out infinite}
    .sb-topbar-right{display:flex;align-items:center;gap:8px}
    @media (max-width: 768px) {
      .sb-shell{grid-template-columns:1fr}
      .sb-aside{display:none}
      .sb-main{padding:0;border-left:none}
      .sb-hero{padding:32px 20px 48px}
      .sb-section{padding:48px 20px}
      .sb-h1{font-size:36px;letter-spacing:-0.03em;margin:18px 0}
      .sb-lede{font-size:15px}
      .sb-metrics{grid-template-columns:repeat(2,1fr);margin-top:36px}
      .sb-metric-v{font-size:24px}
      .sb-approach-grid{grid-template-columns:1fr;gap:20px}
      .sb-practice-grid{grid-template-columns:1fr}
      .sb-exp-row{grid-template-columns:1fr;gap:14px;padding:24px 0}
      .sb-exp-ref{display:none}
      .sb-pg-grid{grid-template-columns:1fr;gap:14px}
      .sb-writing-row{grid-template-columns:30px 1fr;gap:14px}
      .sb-writing-date{display:none}
      .sb-contact-h{font-size:30px}
      .sb-mobile-trigger{display:inline-flex}
      .sb-search-btn{display:none}
      .sb-topbar{padding:14px 20px !important}
      .sb-cta-text{display:none}
      .sb-tagline{display:none !important}
    }
  `;
  document.head.appendChild(s);
}

const sectionsB = [
{ n: '01', label: 'Profile' },
{ n: '02', label: 'Approach' },
{ n: '03', label: 'Writing' },
{ n: '04', label: 'Playground' },
{ n: '05', label: 'Practice' },
{ n: '06', label: 'Experience' },
{ n: '07', label: 'Contact' }];


function SwissB() {
  const c = window.AH_CONTENT;
  const s = swissB;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(0);
  const [, forceUpdate] = React.useState({});
  const [copyMessage, setCopyMessage] = React.useState('');
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchInputRef = React.useRef(null);
  
  // Search results: sections + experience items
  const searchData = [
    { type: 'section', title: 'Profile', id: 0, query: 'profile anthony halim finance leader advisor' },
    { type: 'section', title: 'Approach', id: 1, query: 'approach philosophy headlights planning systems' },
    { type: 'section', title: 'Practice', id: 2, query: 'practice work inside advisor consulting' },
    { type: 'section', title: 'Experience', id: 3, query: 'experience work history roles career' },
    { type: 'section', title: 'Playground', id: 4, query: 'playground projects tools experiments prototypes' },
    { type: 'section', title: 'Writing', id: 5, query: 'writing articles blog posts' },
    { type: 'section', title: 'Contact', id: 6, query: 'contact email linkedin get in touch' },
    ...c.experience.map((exp, i) => ({ type: 'experience', title: `${exp.org} — ${exp.role}`, org: exp.org, query: `${exp.org} ${exp.role} ${exp.years}`.toLowerCase() }))
  ];
  
  const searchResults = searchQuery.trim() ? 
    searchData.filter(item => item.query.includes(searchQuery.toLowerCase())).slice(0, 8) : 
    [];
  
  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(!searchOpen);
        setSearchQuery('');
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);
  
  // Focus input when search opens
  React.useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);
  
  // Listen for accent changes and re-render
  React.useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate({});
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  // Set CSS variables on the element
  React.useEffect(() => {
    const el = document.querySelector('[data-sb-root]');
    if (el) {
      el.style.setProperty('--sb-accent', window.swissB.accent);
      el.style.setProperty('--sb-rule', window.swissB.rule);
      el.style.setProperty('--sb-ink', window.swissB.ink);
      el.style.setProperty('--sb-paper', window.swissB.paper);
    }
  }, []);
  
  const kickerSep = window.swissB?.kickerSep || '|'; // '|', '·', or 'space'
  const sep = (n, label) => kickerSep === 'space' ?
  <><span style={{ color: window.swissB.accent, fontWeight: 600 }}>{n}</span>{'\u00a0\u00a0\u00a0'}{label}</> :
  <>{n} {kickerSep} {label}</>;

  return (
    <div
      data-sb-root="true"
      style={{
        fontFamily: s.sans, color: window.swissB.ink, background: window.swissB.paper,
        minHeight: '100%', width: '100%'
      }}>
      
      {/* search modal */}
      {searchOpen && <div onClick={() => setSearchOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '20vh' }}>
        <div onClick={(e) => e.stopPropagation()} style={{ width: '90%', maxWidth: 500, background: s.paper, borderRadius: 12, boxShadow: '0 20px 60px rgba(0,0,0,0.3)', overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${s.rule}`, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 16, color: s.muted }}>🔍</span>
            <input ref={searchInputRef} type="text" placeholder="Search sections, experience..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 15, outline: 'none', fontFamily: s.sans, color: s.ink }} />
            <span style={{ fontSize: 11, color: s.muted, fontFamily: s.mono }}>ESC</span>
          </div>
          <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            {searchResults.length > 0 ? searchResults.map((result, i) => (
              <button key={i} onClick={() => { if (result.type === 'section') { setActiveSection(result.id); const section = document.getElementById(`section-${result.id}`); if (section) { const topOffset = 100; const sectionTop = section.getBoundingClientRect().top + window.scrollY - topOffset; window.scrollTo({ top: sectionTop, behavior: 'smooth' }); } } setSearchOpen(false); }} style={{ width: '100%', padding: '12px 20px', border: 'none', background: 'transparent', textAlign: 'left', cursor: 'pointer', borderBottom: `1px solid ${s.faint}`, transition: 'background 0.15s' }} onMouseEnter={(e) => e.target.style.background = s.faint} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
                <div style={{ fontSize: 14, fontWeight: 500, color: s.ink }}>{result.title}</div>
                <div style={{ fontSize: 12, color: s.muted, marginTop: 4 }}>{result.type === 'section' ? `Go to section` : `Experience`}</div>
              </button>
            )) : searchQuery ? <div style={{ padding: '24px', textAlign: 'center', color: s.muted }}>No results for "{searchQuery}"</div> : <div style={{ padding: '24px', textAlign: 'center', color: s.muted, fontSize: 13 }}>Start typing to search...</div>}
          </div>
        </div>
      </div>}

      {/* search button click handler */}
      <div className="sb-topbar" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 40px', borderBottom: `1px solid ${s.rule}`,
        position: 'sticky', top: 0, background: s.paper, zIndex: 5
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>
          <div style={{ width: 10, height: 10, borderRadius: 2, background: s.accent }}></div>
          Anthony Halim
        </div>
        <div className="sb-topbar-right">
          <button className="sb-search-btn" onClick={() => setSearchOpen(true)} style={kbdBtnB(s)}>
            <span style={{ fontFamily: s.mono, fontSize: 11 }}>⌘ K</span>
            <span style={{ marginLeft: 8, color: s.muted, fontSize: 12 }}>Search</span>
          </button>
          <button className="sb-mobile-trigger" onClick={() => setMenuOpen(true)} style={{
            background: s.faint, color: s.ink, border: `1px solid ${s.rule}`,
            padding: '7px 10px', borderRadius: 6, cursor: 'pointer',
            fontFamily: s.mono, fontSize: 12, alignItems: 'center'
          }}>menu</button>
          <a href="mailto:anthonyhalim85@gmail.com" style={{ ...ctaBtnB(s), textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}><span className="sb-cta-text">Email </span>→</a>
        </div>
      </div>

      {/* mobile menu drawer */}
      {menuOpen &&
      <div onClick={() => setMenuOpen(false)} style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 20
      }}>
          <div onClick={(e) => e.stopPropagation()} style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: 280,
          background: s.paper, padding: '24px 24px', boxShadow: '-12px 0 32px rgba(0,0,0,0.15)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <div style={{ fontFamily: s.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: s.muted }}>Index</div>
              <button onClick={() => setMenuOpen(false)} style={{ background: 'transparent', border: 'none', fontSize: 22, cursor: 'pointer', color: s.ink, padding: 0, lineHeight: 1 }}>×</button>
            </div>
            {sectionsB.map((sec, i) =>
          <a key={i} onClick={() => setMenuOpen(false)} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: `1px solid ${s.rule}`, fontFamily: s.mono, fontSize: 13, color: s.ink, textDecoration: 'none' }}>
                <span style={{ color: s.muted }}>{sec.n}</span>
                <span>{sec.label}</span>
              </a>
          )}
            <div style={{ marginTop: 32, padding: 14, background: s.faint, borderRadius: 6, fontFamily: s.mono, fontSize: 11, color: s.ink, lineHeight: 1.5 }}>
              <span style={{ color: '#19a974' }}>●</span> Open to advisory<br />
              <span style={{ color: s.muted }}>○</span> Booked through May
            </div>
          </div>
        </div>
      }

      <div className="sb-shell">
        {/* index sidebar (desktop) */}
        <aside className="sb-aside">
          <div style={{ color: s.muted, marginBottom: 20, textTransform: 'uppercase' }}>Index</div>
          {sectionsB.map((sec, i) =>
          <a key={i} href={`#section-${i}`} onClick={(e) => {
            e.preventDefault();
            setActiveSection(i);
            // Capture the link before setTimeout
            const link = e.currentTarget;
            setTimeout(() => {
              const dot = link?.querySelector('[data-accent-dot]');
              if (dot) {
                dot.classList.remove('dot-pulse');
                void dot.offsetWidth;
                dot.classList.add('dot-pulse');
              }
            }, 0);
            const section = document.getElementById(`section-${i}`);
            if (section) {
              const topOffset = 100;
              const sectionTop = section.getBoundingClientRect().top + window.scrollY - topOffset;
              window.scrollTo({ top: sectionTop, behavior: 'smooth' });
            }
          }} style={{
            display: 'flex', gap: 14, padding: '8px 0',
            color: activeSection === i ? s.ink : s.muted,
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }} onMouseEnter={(e) => e.target.style.color = s.ink} onMouseLeave={(e) => e.target.style.color = activeSection === i ? s.ink : s.muted}>
              <span style={{ color: s.muted }}>{sec.n}</span>
              <span style={{
              position: 'relative',
              fontWeight: activeSection === i ? 600 : 400,
              color: activeSection === i ? s.ink : s.muted
            }}>{sec.label}{activeSection === i && <span data-accent-dot style={{ position: 'absolute', left: -10, top: 5, width: 4, height: 4, borderRadius: 4, background: s.accent, transformOrigin: 'center' }}></span>}</span>
            </a>
          )}
          <div style={{ marginTop: 40, padding: 14, background: s.faint, borderRadius: 6 }}>
            <div style={{ color: s.muted, marginBottom: 10, textTransform: 'uppercase', fontSize: 10 }}>Status</div>
            <div style={{ color: s.ink, lineHeight: 1.5, fontSize: 11 }}>
              <span style={{ color: '#19a974' }}>●</span> Open to advisory<br />
              <span style={{ color: s.muted }}>○</span> Booked through May
            </div>
          </div>
        </aside>

        {/* main */}
        <main className="sb-main">
          {/* hero */}
          <section id="section-0" className="sb-hero">
            <div style={kickerB(s)}>{sep('01', 'Profile')}</div>
            <h1 className="sb-h1" style={{ fontFamily: s.sans }}>
              <span style={{ display: 'block' }}>Anthony Halim.</span>
              <span style={{ display: 'block' }}>Finance leader. Advisor.</span>
              <span style={{ display: 'block', color: s.muted, fontWeight: 400, fontSize: '0.65em', letterSpacing: '-0.02em', lineHeight: 1.3, marginTop: 20 }}>
                Building planning systems that<br />make ambition <span style={{ color: s.accent }}>legible</span><br />for both humans and robots.
              </span>
            </h1>
            <p className="sb-lede" style={{ color: s.muted }}>{c.intro}</p>

            <div className="sb-metrics" style={{ background: 'transparent', border: 'none', borderRadius: 0 }}>
              {[
              { v: '$20M → $250M', l: 'ARR scaled at AuditBoard' },
              { v: '$3.3B', l: 'Acquisition supported' },
              { v: '15+', l: 'Board decks shipped' },
              { v: '2,000+', l: 'FTE planned for at MUFG' }].
              map((m, i) =>
              <div key={i} style={{ background: `rgba(168, 85, 247, 0.08)`, padding: '20px 22px', borderRadius: 6, border: `1px solid rgba(168, 85, 247, 0.2)` }}>
                  <div style={{ fontFamily: s.mono, fontSize: 11, color: s.muted, letterSpacing: '0.06em', marginBottom: 8 }}>0{i + 1}</div>
                  <div className="sb-metric-v">{m.v}</div>
                  <div style={{ fontSize: 12.5, color: s.muted, marginTop: 6 }}>{m.l}</div>
                </div>
              )}
            </div>
          </section>

          {/* approach */}
          <section id="section-1" className="sb-section">
            <div style={kickerB(s)}>{sep('02', 'Approach')}</div>
            <div className="sb-approach-grid">
              {c.approach.map((p, i) =>
              <div key={i} style={{ borderTop: `1px solid ${s.ink}`, paddingTop: 16 }}>
                  <div style={{ fontFamily: s.mono, fontSize: 11, color: s.muted, marginBottom: 12 }}>0{i + 1}</div>
                  <p style={{ fontSize: 16, lineHeight: 1.5, margin: 0, color: s.ink }}>{p}</p>
                </div>
              )}
            </div>
          </section>

          {/* writing */}
          <section id="section-2" className="sb-section">
            <div style={kickerB(s)}>{sep('03', 'Writing')}</div>
            <div style={{ marginTop: 24 }}>
              {c.writing.map((w, i) => {
                const isDraft = w.status && w.status !== 'Published';
                return (
                  <div key={i} className="sb-writing-row" style={{ borderTop: `1px solid ${s.rule}`, opacity: isDraft ? 0.45 : 1 }}>
                    <div style={{ fontFamily: s.mono, fontSize: 11, color: s.muted }}>0{i + 1}</div>
                    <div>
                      <div style={{ fontSize: 17, letterSpacing: '-0.01em', fontWeight: 500, color: isDraft ? s.muted : s.ink }}>
                        {w.url
                          ? <a href={w.url} style={{ color: 'inherit', textDecoration: 'none' }}>{w.title} <span style={{ color: s.accent }}>→</span></a>
                          : w.title}
                      </div>
                      {w.status &&
                        <div style={{ fontFamily: s.mono, fontSize: 10, color: s.muted, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 6 }}>
                          · {w.status}
                        </div>
                      }
                    </div>
                    <div className="sb-writing-date" style={{ fontFamily: s.mono, fontSize: 11, color: s.muted, textAlign: 'right' }}>{w.date}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* playground */}
          <section id="section-3" className="sb-section">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div style={kickerB(s)}>{sep('04', 'Playground')}</div>
              <div style={{ fontFamily: s.mono, fontSize: 11, color: s.muted }}>Experiments in motion</div>
            </div>
            <div className="sb-pg-grid">
              {c.playground.map((p, i) =>
              <div key={i} style={{
                border: `1px solid ${s.rule}`, borderRadius: 8, padding: 22,
                background: s.paper, position: 'relative', cursor: 'default',
                opacity: 0.45
              }}>
                  <div style={{
                  height: 60, marginBottom: 18, borderRadius: 4,
                  background: `repeating-linear-gradient(90deg, ${s.faint} 0 8px, transparent 8px 16px)`,
                  position: 'relative', overflow: 'hidden'
                }}>
                    <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                      <polyline points={spark(i)} fill="none" stroke={s.accent} strokeWidth="1.5" opacity="0.85" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                    <div style={{ fontFamily: s.mono, fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.accent }}>{p.tag}</div>
                    <div style={{
                    fontFamily: s.mono, fontSize: 10, color: s.muted,
                    padding: '2px 8px', border: `1px solid ${s.rule}`, borderRadius: 99
                  }}>{p.status}</div>
                  </div>
                  <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.015em', marginBottom: 8, color: s.muted }}>{p.title}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.5, color: s.muted, marginBottom: 16 }}>{p.blurb}</div>
                  <div style={{ fontFamily: s.mono, fontSize: 11, color: s.muted, letterSpacing: '0.04em' }}>
                    Not live yet
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* practice */}
          <section id="section-4" className="sb-section">
            <div style={kickerB(s)}>{sep('05', 'Practice')}</div>
            <div className="sb-practice-grid" style={{ background: 'transparent', border: 'none' }}>
              {[
              { h: 'Inside companies', items: c.workInside },
              { h: 'As an advisor', items: c.workAdvisor }].
              map((col, i) =>
              <div key={i} style={{ background: s.paper, padding: '24px 28px', borderRadius: 6, border: `1px solid ${s.rule}` }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, letterSpacing: '-0.01em' }}>{col.h}</div>
                  {col.items.map((it, j) =>
                <div key={j} style={{
                  display: 'flex', gap: 12, padding: '10px 0',
                  borderTop: j === 0 ? 'none' : `1px solid ${s.rule}`,
                  fontSize: 14, lineHeight: 1.45
                }}>
                      <span style={{ fontFamily: s.mono, color: s.muted, fontSize: 11, paddingTop: 2 }}>0{j + 1}</span>
                      <span>{it}</span>
                    </div>
                )}
                </div>
              )}
            </div>
          </section>

          {/* experience */}
          <section id="section-5" className="sb-section">
            <div style={kickerB(s)}>{sep('06', 'Experience')}</div>
            {c.experience.map((e, i) =>
            <div key={i} className="sb-exp-row" style={{
              borderTop: i === 0 ? `1px solid ${s.ink}` : `1px solid ${s.rule}`,
              marginTop: i === 0 ? 28 : 0
            }}>
                <div>
                  <div style={{ fontFamily: s.mono, fontSize: 11, color: s.muted, letterSpacing: '0.04em' }}>{e.years}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, marginTop: 6, letterSpacing: '-0.01em' }}>{e.org}</div>
                  <div style={{ fontSize: 12.5, color: s.muted, marginTop: 4 }}>{e.role}</div>
                </div>
                <div>
                  {e.bullets.map((b, j) =>
                <p key={j} style={{ fontSize: 14.5, lineHeight: 1.55, margin: '0 0 10px', color: s.ink }}>{b}</p>
                )}
                </div>
                <div className="sb-exp-ref" style={{ fontFamily: s.mono, fontSize: 10.5, color: s.muted, letterSpacing: '0.06em', textTransform: 'uppercase', textAlign: 'right' }}>
                  Ref · {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            )}
          </section>

          {/* contact */}
          <section id="section-6" className="sb-section" style={{ paddingBottom: 120 }}>
            <div style={kickerB(s)}>{sep('07', 'Contact')}</div>
            <div className="sb-contact-h">
              Working on something hard? <span style={{ color: s.accent }}>Let's talk.</span>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <a href="mailto:anthonyhalim85@gmail.com" style={{ ...ctaBtnB(s), textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Email — anthonyhalim85@gmail.com</a>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button onClick={() => { navigator.clipboard.writeText('anthonyhalim85@gmail.com'); setCopyMessage('Copied!'); setTimeout(() => setCopyMessage(''), 2000); }} style={{ ...ghostBtnB(s), textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Copy Email</button>
                {copyMessage && <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', padding: '10px 16px', background: s.accent, color: s.paper, borderRadius: 6, fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 1000, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>{copyMessage}</div>}
              </div>
              <a href={c.contact.linkedinUrl} target="_blank" rel="noopener" style={{ ...ghostBtnB(s), textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>LinkedIn ↗</a>
            </div>
            <div style={{ marginTop: 48, fontFamily: s.mono, fontSize: 11, color: s.muted, letterSpacing: '0.06em' }}>
              {c.location} · Updated May 2026
            </div>
          </section>
        </main>
      </div>
    </div>);

}

function spark(i) {
  const seeds = [
  [10, 40, 18, 35, 30, 22, 14, 18, 8, 12, 6, 4],
  [50, 48, 46, 40, 38, 32, 28, 22, 18, 14, 8, 4],
  [30, 28, 32, 26, 22, 30, 24, 20, 22, 16, 14, 12],
  [40, 36, 30, 34, 26, 28, 22, 20, 16, 14, 10, 8]];

  const ys = seeds[i % seeds.length];
  return ys.map((y, j) => `${j / (ys.length - 1) * 200},${y}`).join(' ');
}

const kickerB = (s) => ({
  fontFamily: s.mono, fontSize: 11, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: s.muted
});
const ctaBtnB = (s) => ({
  background: s.ink, color: s.paper, border: 'none',
  padding: '9px 14px', borderRadius: 6, fontSize: 13, fontWeight: 500,
  cursor: 'pointer', fontFamily: s.sans
});
const ghostBtnB = (s) => ({
  background: 'transparent', color: s.ink, border: `1px solid ${s.rule}`,
  padding: '9px 14px', borderRadius: 6, fontSize: 13, fontWeight: 500,
  cursor: 'pointer', fontFamily: s.sans
});
const kbdBtnB = (s) => ({
  background: s.faint, color: s.ink, border: `1px solid ${s.rule}`,
  padding: '7px 10px', borderRadius: 6, cursor: 'pointer', fontFamily: s.sans,
  display: 'flex', alignItems: 'center'
});

window.SwissB = SwissB;
window.swissB = swissB;