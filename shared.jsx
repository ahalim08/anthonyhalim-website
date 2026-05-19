// shared.jsx — content + small helpers shared across all three directions.
// Lifted from anthonyhalim.com with light edits to match a more first-person,
// conversational-but-polished voice.

const CONTENT = {
  name: 'Anthony Halim',
  location: 'Los Angeles',
  tagline: 'Building planning systems that make ambition legible for both humans and robots.',
  intro:
    'I help founders, executives, and operators make confident, data-driven decisions in an ever evolving landscape.',
  approach: [
    'Finance should function as a set of headlights — not a rear-view mirror.',
    'I build planning systems and processes that scale with the business and support confident, data-driven decisions.',
    'I partner with operators and executives — a strategic thought partner, not a back-office reporting function.',
  ],
  workInside: [
    'Board storytelling',
    'Long-range planning, annual budgeting, regular forecasting',
    'Scenario modeling & cost-benefit analyses',
    'Headcount planning and hiring',
  ],
  workAdvisor: [
    'Market analysis & storytelling',
    'Strategic and operational modeling',
    'Decision frameworks',
    'Fractional CFO / FP&A for the day-to-day',
  ],
  experience: [
    {
      org: 'A Halim Advisory',
      years: '2025 — Present',
      role: 'Founder & Advisor',
      bullets: [
        'Partner with founders and executive teams to shape early business cases for investors — TAM analyses, market entry strategy, and top-line ambition.',
        'Design multi-year planning models that connect growth, hiring velocity, and cash discipline for a clearer path.',
      ],
    },
    {
      org: 'AuditBoard',
      years: '2019 — 2025',
      role: 'Corporate FP&A Leader',
      bullets: [
        'Led corporate FP&A through rapid scale. Built the planning, reporting, and accounting infrastructure that supported growth from ~$20M to $250M+ in ARR.',
        'Partnered with go-to-market leadership on quota design, commissions, and long-range ARR forecasting. Scaled finance systems to match increasing organizational complexity.',
        'Established a forecasting cadence across the P&L, balance sheet, and cash flow — aligning executives and operators, and supporting the eventual $3.3B acquisition by Hg Capital.',
      ],
    },
    {
      org: 'MUFG Union Bank',
      years: '2011 — 2019',
      role: 'Financial Planning, Branch & Private Banking',
      bullets: [
        'Led financial planning for a large Branch and Private Banking organization — overseeing a $350M expense base and 2,000+ FTE, with a focus on technology and automation initiatives.',
        'Partnered on the launch of PurePoint Financial, a hybrid digital bank expanding MUFG’s footprint beyond the West Coast.',
        'Recognized with the firm’s Culture of Excellence Award for leading a branch distribution transformation initiative in the PNW.',
      ],
    },
    {
      org: 'PwC',
      years: '2008 — 2011',
      role: 'Audit Associate → Senior',
      bullets: [
        'Led complex audits for organizations including Toyota and UCLA Medical Center — managing cross-functional teams and large-scale controls initiatives.',
      ],
    },
  ],
  playground: [
    {
      title: 'Forecast Sandbox',
      tag: 'FP&A tool',
      blurb:
        'Sliders for growth rate, hiring pace, and gross margin → instant P&L, cash, and headcount path. Designed to demystify long-range models.',
      status: 'Prototype',
    },
    {
      title: 'Board Deck Audit',
      tag: 'AI · Finance',
      blurb:
        'Drop in a board deck PDF; an LLM scores narrative clarity, metric consistency, and surfaces the questions a sharp investor would ask.',
      status: 'Concept',
    },
    {
      title: 'Quiet Charts',
      tag: 'Design',
      blurb:
        'A small library of opinionated, low-ink chart components — built for finance dashboards that have to live on a wall.',
      status: 'Sketching',
    },
    {
      title: 'LA Spend × Crime',
      tag: 'Civic data',
      blurb:
        'An interactive layer over the LA city budget — does spending in a category correlate with the outcomes we expect? Drag the year, toggle departments.',
      status: 'In progress',
    },
  ],
  writing: [
    { title: 'Who is the customer, really?', date: 'May 2026', status: 'Published', url: '/writing/who-is-the-customer' },
    { title: 'A Booking is a Booking is a Booking (Until it Isn\'t)', date: 'May 2026', status: 'Draft' },
  ],
  contact: {
    email: 'anthonyhalim85@gmail.com',
    linkedin: 'linkedin.com/in/ahalim',
    linkedinUrl: 'https://www.linkedin.com/in/ahalim/',
  },
};

window.AH_CONTENT = CONTENT;
