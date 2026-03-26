import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// ── Icons (inline SVG components) ──────────────────────────────────────────
const Icon = ({ d, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const icons = {
  monitor:   "M2 3h20v14H2zM8 21h8M12 17v4",
  printer:   "M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z",
  wifi:      "M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01",
  shield:    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  clock:     "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2",
  phone:     "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.38 2 2 0 0 1 3.08 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z",
  chat:      "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  check:     "M20 6L9 17l-5-5",
  star:      "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  arrow:     "M5 12h14M12 5l7 7-7 7",
  menu:      "M3 12h18M3 6h18M3 18h18",
  x:         "M18 6L6 18M6 6l12 12",
  home:      "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  download:  "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  map:       "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  zap:       "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  tv:        "M33 7h-6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M8 21H16M12 17v4",
  users:     "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  mail:      "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
};

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['Services', 'Why Us', 'Testimonials', 'Pricing', 'FAQ', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="brand-icon"><Icon d={icons.zap} size={18} /></span>
          <span>Trini System<span className="brand-llc"> LLC</span></span>
        </a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
          <li><a href="tel:3479531531" className="nav-cta">Call Now</a></li>
        </ul>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
          <Icon d={open ? icons.x : icons.menu} size={22} />
        </button>
      </div>
    </nav>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="grid-lines" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Available 24/7 — All USA States</span>
        </div>
        <h1 className="hero-title">
          Tech Support<br />
          <span className="hero-accent">Done Right.</span><br />
          <span className="hero-sub">Done Fast.</span>
        </h1>
        <p className="hero-desc">
          Certified experts for PC repair, printer setup, virus removal, smart home &amp; more.
          Friendly service built for seniors &amp; everyday users — no tech jargon, just solutions.
        </p>
        <div className="hero-actions">
          <a href="https://tawk.to/chat/69333876f66a4c198b427a1c/1jbo193t5" target="_blank" rel="noreferrer" className="btn-primary">
            <Icon d={icons.chat} size={18} /> Start Live Chat
          </a>
          <a href="tel:3479531531" className="btn-ghost">
            <Icon d={icons.phone} size={18} /> 347-953-1531
          </a>
        </div>
        <div className="hero-stats">
          {[['24/7', 'Remote Support'], ['All 50', 'US States'], ['5★', 'Rated Service']].map(([val, label]) => (
            <div className="stat" key={label}>
              <span className="stat-val">{val}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="device-card">
          <div className="device-screen">
            <div className="screen-bar" />
            <div className="screen-content">
              <div className="sc-line w80" />
              <div className="sc-line w60" />
              <div className="sc-line w90" />
              <div className="sc-line w50" />
              <div className="sc-pulse" />
            </div>
          </div>
          <div className="device-foot" />
          <div className="badge-float badge-f1"><Icon d={icons.check} size={14} /> Fixed!</div>
          <div className="badge-float badge-f2"><Icon d={icons.shield} size={14} /> Secure</div>
          <div className="badge-float badge-f3"><Icon d={icons.zap} size={14} /> Fast</div>
        </div>
      </div>
    </section>
  );
}

// ── Services ────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: icons.monitor,
    title: 'PC & Laptop Repair',
    color: '#6ee7f7',
    items: ['Virus & Malware Removal', 'Speed & Cleanup Tune-up', 'Windows 11 Setup', 'Software Installation', 'Gaming Setup', 'QuickBooks & TurboTax', 'Microsoft Office', 'Video Conferencing Setup'],
  },
  {
    icon: icons.printer,
    title: 'Printer Repair & Setup',
    color: '#a78bfa',
    items: ['HP · Canon · Epson', 'Wireless Printing Setup', 'Driver Installation', 'Paper Jam Fix', 'Ink Issues', 'Scanner Problems', 'Same-day Service'],
  },
  {
    icon: icons.wifi,
    title: 'Smart Home & Devices',
    color: '#34d399',
    items: ['WiFi Routers Setup', 'Smart TVs', 'Smart Cameras', 'Alexa & Google Home', 'Smart Plugs', 'AI Systems', 'Home Office Setup'],
  },
  {
    icon: icons.shield,
    title: 'Antivirus & Security',
    color: '#fb923c',
    items: ['Norton & McAfee Setup', 'Malware Removal', 'Privacy Configuration', 'Discount Coupons', 'Best Rates Guaranteed', 'Browser Protection'],
  },
  {
    icon: icons.clock,
    title: '24/7 Remote Support',
    color: '#f472b6',
    items: ['Phone Support', 'Live Chat', 'Email Assistance', 'Remote Desktop Access', 'Instant Connection', 'No Appointment Needed'],
  },
  {
    icon: icons.map,
    title: 'GPS & Specialty',
    color: '#fbbf24',
    items: ['GPS Device Updates', 'Security Camera Software', 'Genealogy Website Help', 'Financial Login Issues', 'Sony Camera Firmware', 'Custom Setup Requests'],
  },
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">What We Fix</span>
          <h2>Our Services</h2>
          <p>From daily tech hiccups to complex setups — we handle it all remotely, fast.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title} style={{ '--accent': s.color }}>
              <div className="service-icon"><Icon d={s.icon} size={24} /></div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map(i => <li key={i}><Icon d={icons.check} size={14} />{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Us ──────────────────────────────────────────────────────────────────
const WHY = [
  { icon: icons.zap, title: 'No Membership', desc: 'Pay only for what you need. No subscriptions, no surprise fees — ever.' },
  { icon: icons.users, title: 'Senior-Friendly', desc: 'We speak clearly, go step by step, and stay patient until you\'re fully satisfied.' },
  { icon: icons.check, title: 'Transparent Pricing', desc: 'Flat fees for common problems. You know the cost before we start.' },
  { icon: icons.shield, title: 'Real Technicians', desc: 'Certified professionals — not bots or outsourced scripts.' },
  { icon: icons.map, title: 'All 50 States', desc: 'Full USA coverage with remote access — no travel needed.' },
  { icon: icons.clock, title: '24/7 Availability', desc: 'Day or night, weekdays or weekends — we\'re always here.' },
];

function WhyUs() {
  return (
    <section className="section why-us" id="why-us">
      <div className="section-inner">
        <div className="section-head light">
          <span className="section-tag alt">Why Choose Us</span>
          <h2>Better Than Geek Squad</h2>
          <p>No membership. No waiting in line. Real help, real fast, from real people.</p>
        </div>
        <div className="why-grid">
          {WHY.map(w => (
            <div className="why-card" key={w.title}>
              <div className="why-icon"><Icon d={w.icon} size={22} /></div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="why-cta">
          <p className="why-quote">"Trusted by the community, loved by seniors — Corona's top-rated tech support."</p>
          <a href="tel:3479531531" className="btn-primary">
            <Icon d={icons.phone} size={18} /> Call 347-953-1531
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ─────────────────────────────────────────────────────────────
const REVIEWS = [
  { name: 'Corey Hawkins', stars: 5, text: 'James was incredibly patient and made everything easy. Absolutely the best experience I\'ve had with a tech company. Some of the best customer service I\'ve ever had!' },
  { name: 'Leslie Park', stars: 5, text: 'Very helpful in finding and resolving problems. Reaching them was easy, and everything was handled smoothly. Quick, simple, and effective support.' },
  { name: 'Mary Steil', stars: 5, text: 'Things got a little complicated, but James was outstanding throughout. If he helps you, you\'re in great hands — truly above and beyond!' },
  { name: 'Mark Starrett', stars: 5, text: 'They went above and beyond to get my GPS updated correctly. Professional and reliable every step of the way. Much thanks to the whole team!' },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % REVIEWS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section testimonials" id="testimonials">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">Happy Clients</span>
          <h2>What People Say</h2>
        </div>
        <div className="reviews-track">
          {REVIEWS.map((r, i) => (
            <div className={`review-card ${i === active ? 'active' : ''}`} key={r.name}>
              <div className="review-stars">
                {[...Array(r.stars)].map((_, j) => <Icon key={j} d={icons.star} size={16} />)}
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">— {r.name}</div>
            </div>
          ))}
        </div>
        <div className="review-dots">
          {REVIEWS.map((_, i) => (
            <button key={i} className={`dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing ──────────────────────────────────────────────────────────────────
const PLANS = [
  { name: 'Quick Fix', price: 'Pay Per Issue', desc: 'Perfect for one-time problems', features: ['Single issue resolution', 'Remote access support', 'No ongoing commitment', 'All devices covered'] },
  { name: 'Popular', price: 'Best Value', desc: 'Most chosen by our clients', highlight: true, features: ['Virus removal + tune-up', 'Printer setup included', 'Priority response time', 'Follow-up check included', 'Senior-friendly pace'] },
  { name: 'Full Setup', price: 'Custom Quote', desc: 'For complex home/office needs', features: ['Home office complete setup', 'Multiple device config', 'Smart home integration', 'Security suite setup', 'Ongoing support option'] },
];

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="section-inner">
        <div className="section-head light">
          <span className="section-tag alt">Simple Pricing</span>
          <h2>Transparent & Affordable</h2>
          <p>Flat fees for common problems. Call us for an exact quote — no surprises.</p>
        </div>
        <div className="pricing-grid">
          {PLANS.map(p => (
            <div className={`pricing-card ${p.highlight ? 'highlight' : ''}`} key={p.name}>
              {p.highlight && <div className="pricing-badge">Most Popular</div>}
              <h3>{p.name}</h3>
              <div className="pricing-price">{p.price}</div>
              <p className="pricing-desc">{p.desc}</p>
              <ul className="pricing-features">
                {p.features.map(f => <li key={f}><Icon d={icons.check} size={15} />{f}</li>)}
              </ul>
              <a href="tel:3479531531" className={p.highlight ? 'btn-primary' : 'btn-outline'}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Do I need a membership or contract?', a: 'No. You pay only for the help you get — no subscriptions, no ongoing fees, no contracts. Simple as that.' },
  { q: 'What devices do you support?', a: 'PCs, Laptops, Printers (HP, Epson, Canon), Smart Devices, Routers, Smart TVs, GPS units — just ask and we\'ll let you know!' },
  { q: 'Is your service available across the USA?', a: 'Yes! We support clients in every U.S. state, 24 hours a day, 7 days a week, via remote desktop connection.' },
  { q: 'Is this good for seniors or beginners?', a: 'Absolutely. We speak clearly, go step by step, avoid tech jargon, and stay patient until you\'re completely satisfied.' },
  { q: 'How does remote support work?', a: 'Simply call or chat with us. We\'ll guide you to download a secure remote tool, connect to your device, and fix the problem — you can watch everything we do.' },
  { q: 'How fast can you fix my problem?', a: 'Most issues are resolved within minutes to a few hours, depending on complexity. No shipping, no waiting days.' },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section faq" id="faq">
      <div className="section-inner faq-inner">
        <div className="section-head">
          <span className="section-tag">Got Questions?</span>
          <h2>Frequently Asked</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <span className="faq-arrow">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: '01', icon: icons.chat, title: 'Contact Us', desc: 'Call, chat, or email — describe your problem in plain language.' },
    { num: '02', icon: icons.monitor, title: 'We Connect', desc: 'We securely access your device remotely and start diagnosing immediately.' },
    { num: '03', icon: icons.check, title: 'Problem Solved', desc: 'Issue fixed, device optimized — usually within minutes to hours.' },
  ];
  return (
    <section className="section how-it-works">
      <div className="section-inner">
        <div className="section-head light">
          <span className="section-tag alt">Easy Process</span>
          <h2>How It Works</h2>
          <p>3 simple steps to get your tech working again.</p>
        </div>
        <div className="steps-row">
          {steps.map((s, i) => (
            <React.Fragment key={s.num}>
              <div className="step-card">
                <div className="step-num">{s.num}</div>
                <div className="step-icon"><Icon d={s.icon} size={26} /></div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="step-arrow"><Icon d={icons.arrow} size={24} /></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact / CTA ─────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-inner contact-inner">
        <div className="contact-text">
          <span className="section-tag">Get In Touch</span>
          <h2>Ready to Fix It?</h2>
          <p>Reach us today. No waiting, no jargon — just fast, friendly tech help.</p>
          <div className="contact-details">
            <a href="tel:3479531531" className="contact-link">
              <Icon d={icons.phone} size={20} /> 347-953-1531
            </a>
            <a href="mailto:trinisystemllc@gmail.com" className="contact-link">
              <Icon d={icons.mail} size={20} /> trinisystemllc@gmail.com
            </a>
            <span className="contact-link">
              <Icon d={icons.map} size={20} /> Corona, Queens, NY — Remote USA-wide
            </span>
          </div>
        </div>
        <div className="contact-actions">
          <a href="https://tawk.to/chat/69333876f66a4c198b427a1c/1jbo193t5" target="_blank" rel="noreferrer" className="btn-primary large">
            <Icon d={icons.chat} size={20} /> Start Live Chat
          </a>
          <a href="tel:3479531531" className="btn-ghost large">
            <Icon d={icons.phone} size={20} /> Call Now
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrK6q4zQ10ak6VYRRNHdqV9bSbz6YB6H4LWDovCcAGP9YsBQ/viewform" target="_blank" rel="noreferrer" className="btn-outline large">
            Contact Form
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-icon"><Icon d={icons.zap} size={16} /></span>
          <span>Trini System LLC</span>
        </div>
        <p className="footer-disc">
          © 2025–2026 Trini System LLC · Independent tech support. Not affiliated with HP, Microsoft, Sony, Garmin, or other brands.
        </p>
        <div className="footer-links">
          <a href="https://sites.google.com/view/trinisystemllc/Trini-System-LLC-Disclaimer-Policies" target="_blank" rel="noreferrer">Disclaimer & Policies</a>
          <a href="https://sites.google.com/view/trinisystemllc/Trini-system-llc-terms-and-support-notice" target="_blank" rel="noreferrer">Terms & Support Notice</a>
          <a href="mailto:trinisystemllc@gmail.com">trinisystemllc@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
