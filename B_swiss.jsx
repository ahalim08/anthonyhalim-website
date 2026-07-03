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
  accent: '#a855f7', // purple — site accent. overridden at runtime by the Tweaks accent.
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
    @media (max-width: 1100px) and (min-width: 769px) {
      .sb-exp-row{grid-template-columns:150px 1fr;gap:24px}
      .sb-exp-ref{display:none}
      .sb-metrics{grid-template-columns:repeat(2,1fr)}
    }
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


function MetricIcon({ name }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" {...p}>
      {name === 'trend' && <><polyline points="3 17 9 11 13 15 21 7"></polyline><polyline points="15 7 21 7 21 13"></polyline></>}
      {name === 'deal' && <><rect x="3" y="8" width="18" height="12" rx="2"></rect><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></>}
      {name === 'board' && <><rect x="4" y="4" width="16" height="11" rx="1"></rect><polyline points="7.5 11.5 10.5 8.5 12.5 10.5 16.5 6.5"></polyline><line x1="12" y1="2.5" x2="12" y2="4"></line><line x1="8" y1="21" x2="12" y2="15"></line><line x1="16" y1="21" x2="12" y2="15"></line></>}
      {name === 'people' && <><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1"></path><circle cx="17.5" cy="9" r="2.8"></circle><path d="M18.5 14.2a4.5 4.5 0 0 1 3 4.3v1.5"></path></>}
    </svg>
  );
}

function SwissB({ metricStyle = 'tiles' } = {}) {
  const c = window.AH_CONTENT;
  const s = swissB;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(0);
  const [, forceUpdate] = React.useState({});
  const [copyMessage, setCopyMessage] = React.useState('');
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchInputRef = React.useRef(null);

  // ── Bookings Memo Builder (Playground inline expansion) ──
  const [builderOpen, setBuilderOpen] = React.useState(false);
  const [bmbAnswers, setBmbAnswers] = React.useState({});
  const [bmbOther, setBmbOther] = React.useState({});
  const [bmbDetails, setBmbDetails] = React.useState({});
  const [bmbStep, setBmbStep] = React.useState(0);
  const builderRef = React.useRef(null);
  const scrollToBuilder = () => setTimeout(() => {
    if (builderRef.current) {
      const top = builderRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, 120);
  React.useEffect(() => {
    try {
      const a = localStorage.getItem('bmb-answers'); if (a) setBmbAnswers(JSON.parse(a));
      const o = localStorage.getItem('bmb-other'); if (o) setBmbOther(JSON.parse(o));
      const d = localStorage.getItem('bmb-details'); if (d) setBmbDetails(JSON.parse(d));
      const st = localStorage.getItem('bmb-step'); if (st) setBmbStep(JSON.parse(st));
    } catch (e) {}
  }, []);
  React.useEffect(() => { localStorage.setItem('bmb-answers', JSON.stringify(bmbAnswers)); }, [bmbAnswers]);
  React.useEffect(() => { localStorage.setItem('bmb-other', JSON.stringify(bmbOther)); }, [bmbOther]);
  React.useEffect(() => { localStorage.setItem('bmb-details', JSON.stringify(bmbDetails)); }, [bmbDetails]);
  React.useEffect(() => { localStorage.setItem('bmb-step', JSON.stringify(bmbStep)); }, [bmbStep]);
  const toggleBuilder = () => setBuilderOpen((o) => {
    const next = !o;
    if (next) { window.location.hash = 'bookings-memo-builder'; scrollToBuilder(); }
    else { history.replaceState(null, '', window.location.pathname); }
    return next;
  });
  React.useEffect(() => {
    const check = () => { if (window.location.hash === '#bookings-memo-builder') { setBuilderOpen(true); scrollToBuilder(); } };
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
  }, []);
  
  // Search results: sections + experience items
  const searchData = [
    { type: 'section', title: 'Profile', id: 0, query: 'profile anthony halim finance leader advisor' },
    { type: 'section', title: 'Approach', id: 1, query: 'approach philosophy headlights planning systems' },
    { type: 'section', title: 'Writing', id: 2, query: 'writing articles blog posts' },
    { type: 'section', title: 'Playground', id: 3, query: 'playground projects tools experiments prototypes' },
    { type: 'section', title: 'Practice', id: 4, query: 'practice work inside advisor consulting' },
    { type: 'section', title: 'Experience', id: 5, query: 'experience work history roles career' },
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
  
  // Scroll-spy: keep sidebar index in sync while reading
  const spyLock = React.useRef(false);
  const spyTimer = React.useRef(null);
  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver((entries) => {
      if (spyLock.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.id.replace('section-', ''), 10);
          if (!isNaN(idx)) setActiveSection(idx);
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sectionsB.forEach((_, i) => {
      const el = document.getElementById(`section-${i}`);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Programmatic scroll: lock the spy until the smooth scroll settles,
  // so the index doesn't roll through intermediate sections or overshoot.
  const scrollToSection = (i, offset = 100) => {
    setActiveSection(i);
    spyLock.current = true;
    clearTimeout(spyTimer.current);
    const unlock = () => {
      spyLock.current = false;
      window.removeEventListener('scrollend', unlock);
      clearTimeout(spyTimer.current);
    };
    window.addEventListener('scrollend', unlock);
    spyTimer.current = setTimeout(unlock, 1500);
    const section = document.getElementById(`section-${i}`);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };
  
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
              <button key={i} onClick={() => { if (result.type === 'section') { scrollToSection(result.id, 100); } setSearchOpen(false); }} style={{ width: '100%', padding: '12px 20px', border: 'none', background: 'transparent', textAlign: 'left', cursor: 'pointer', borderBottom: `1px solid ${s.faint}`, transition: 'background 0.15s' }} onMouseEnter={(e) => e.target.style.background = s.faint} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
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
          <a key={i} href={`#section-${i}`} onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            scrollToSection(i, 70);
          }} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: `1px solid ${s.rule}`, fontFamily: s.mono, fontSize: 13, color: s.ink, textDecoration: 'none' }}>
                <span style={{ color: s.muted }}>{sec.n}</span>
                <span>{sec.label}</span>
              </a>
          )}
            <div style={{ marginTop: 32, padding: 14, background: s.faint, borderRadius: 6, fontFamily: s.mono, fontSize: 11, color: s.ink, lineHeight: 1.5 }}>
              <span style={{ color: '#19a974' }}>●</span> Inquire to engage
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
            scrollToSection(i, 100);
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
              <span style={{ color: '#19a974' }}>●</span> Inquire to engage
            </div>
          </div>
        </aside>

        {/* main */}
        <main className="sb-main">
          {/* hero */}
          <section id="section-0" className="sb-hero">
            <div style={kickerB(s)}>{sep('01', 'Profile')}</div>
            <h1 className="sb-h1" style={{ fontFamily: s.sans }}>
              <span style={{ display: 'block' }}>Building planning systems</span>
              <span style={{ display: 'block' }}>for <span style={{ color: s.accent }}>humans and AI.</span></span>
              <span style={{ display: 'block', color: s.muted, fontWeight: 400, fontSize: '0.65em', letterSpacing: '-0.02em', lineHeight: 1.3, marginTop: 20 }}>
                Finance leader. Advisor. Builder.
              </span>
            </h1>
            <p className="sb-lede" style={{ color: s.muted }}>{c.intro}</p>

            <div className="sb-metrics" style={{ background: 'transparent', border: 'none', borderRadius: 0 }}>
              {[
              { icon: 'trend', v: '$20M → $250M+', l: 'ARR scaled at AuditBoard', d: 'Built the FP&A foundation that supported 10x+ growth.' },
              { icon: 'deal', v: '$3.3B', l: 'Acquisition supported', d: 'Played a key role in financial modeling, diligence, and integration planning.' },
              { icon: 'board', v: '15+', l: 'Executive decks shipped', d: 'Board and investor decks that shaped strategy and unlocked outcomes.' },
              { icon: 'people', v: '2,000+', l: 'FTE planned for at MUFG', d: 'Designed workforce plans supporting 2,000+ employees across regional business units.' }].
              map((m, i) => metricStyle === 'rules' ?
              <div key={i} style={{ borderTop: `1px solid ${s.ink}`, paddingTop: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: s.mono, fontSize: 11, color: s.muted, letterSpacing: '0.06em' }}>0{i + 1}</span>
                    <span style={{ color: s.ink, display: 'inline-flex' }}><MetricIcon name={m.icon} /></span>
                  </div>
                  <div className="sb-metric-v" style={{ marginTop: 14 }}>{m.v}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: s.accent, marginTop: 8 }}>{m.l}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: s.muted, margin: '10px 0 0' }}>{m.d}</p>
                </div> :
              <div key={i} style={{ background: 'color-mix(in srgb, var(--sb-accent) 4%, transparent)', padding: '22px 22px 24px', borderRadius: 8, border: '1px solid color-mix(in srgb, var(--sb-accent) 16%, transparent)' }}>
                  <div style={{ fontFamily: s.mono, fontSize: 11, color: s.accent, letterSpacing: '0.06em' }}>0{i + 1}</div>
                  <div style={{ color: s.accent, marginTop: 14, display: 'flex' }}><MetricIcon name={m.icon} /></div>
                  <div className="sb-metric-v" style={{ marginTop: 16 }}>{m.v}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: s.accent, marginTop: 8 }}>{m.l}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: s.muted, margin: '10px 0 0' }}>{m.d}</p>
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
              {c.playground.map((p, i) => {
              const isBuilder = p.title === 'Bookings Memo Builder';
              const isLive = p.status === 'Coming Soon';
              return <div key={i} onClick={isBuilder ? toggleBuilder : undefined} style={{
                border: `1px solid ${(isLive || isBuilder) ? s.accent : s.rule}`, borderRadius: 8, padding: 22,
                background: (isBuilder && builderOpen) ? s.faint : s.paper, position: 'relative',
                cursor: isBuilder ? 'pointer' : 'default',
                opacity: isLive ? 1 : 0.45, transition: 'background 0.15s'
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
                    fontFamily: s.mono, fontSize: 10, color: isLive ? s.accent : s.muted,
                    padding: '2px 8px', border: `1px solid ${(isLive || isBuilder) ? s.accent : s.rule}`, borderRadius: 99
                  }}>{isBuilder ? (builderOpen ? 'Open' : 'Live') : p.status}</div>
                  </div>
                  <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.015em', marginBottom: 8, color: isLive ? s.ink : s.muted }}>{p.title}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.5, color: isLive ? s.ink : s.muted, marginBottom: 16 }}>{p.blurb}</div>
                  <div style={{ fontFamily: s.mono, fontSize: 11, color: (isLive || isBuilder) ? s.accent : s.muted, letterSpacing: '0.04em' }}>
                    {isBuilder ? (builderOpen ? 'Close tool ✕' : 'Launch tool →') : (isLive ? 'Nailing down' : 'Not live yet')}
                  </div>
                </div>
              })}
            </div>
            {builderOpen &&
            <div ref={builderRef} style={{ marginTop: 16, border: `1px solid ${S.accentBorder}`, borderRadius: 8, background: S.paper }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 24px', borderBottom: `1px solid ${S.rule}`, background: S.faint }}>
                <span style={{ fontFamily: S.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: S.accent, fontWeight: 600 }}>Bookings Memo Builder</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button onClick={() => { setBmbAnswers({}); setBmbOther({}); setBmbDetails({}); setBmbStep(0); ['bmb-answers','bmb-other','bmb-details','bmb-step'].forEach((k) => localStorage.removeItem(k)); }} style={{ padding: '5px 0', background: 'none', border: `1px solid ${S.rule}`, borderRadius: 6, cursor: 'pointer', fontFamily: S.sans, fontSize: 12, color: S.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, height: 30, width: 90 }}>Reset <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}><path d="M13.5 5.5A5.5 5.5 0 0 0 3 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M3.5 3.5v3h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.5 10.5A5.5 5.5 0 0 0 13 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M12.5 12.5v-3h-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                  <button onClick={toggleBuilder} style={{ padding: '5px 0', background: 'none', border: `1px solid ${S.rule}`, borderRadius: 6, cursor: 'pointer', fontFamily: S.sans, fontSize: 12, color: S.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, height: 30, width: 90 }}>Collapse <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg></button>
                </div>
              </div>
              <BuilderWidget answers={bmbAnswers} setAnswers={setBmbAnswers} step={bmbStep} setStep={setBmbStep} otherTexts={bmbOther} setOtherTexts={setBmbOther} detailInputs={bmbDetails} setDetailInputs={setBmbDetails} />
            </div>
            }
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
              {c.location} · Updated July 2026
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