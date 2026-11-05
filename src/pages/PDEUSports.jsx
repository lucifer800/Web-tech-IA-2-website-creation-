import { useState } from 'react';
import { Link } from 'react-router-dom';
import { events, matches, statusMap, achievements, stories, navLinks, footerCols } from '../data/pdeuSports';
import { sports, categories } from '../data/sports';
import useCountdown from '../hooks/useCountdown';
import './PDEUSports.css';

function PDEUSports() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState('upcoming');
  const [sportFilter, setSportFilter] = useState('All sports');
  const [activeCat, setActiveCat] = useState('All');
  const clock = useCountdown();

  const filteredMatches = matches
    .filter(m => (mode === 'upcoming' ? m.s !== 'final' : m.s === 'final'))
    .filter(m => sportFilter === 'All sports' || m.sport === sportFilter);

  const filteredSports = activeCat === 'All' ? sports : sports.filter(s => s.cat === activeCat);
  const sportOptions = ['All sports', ...sports.map(s => s.name)];

  return (
    <div className="pdeu">
      <div className="pdeu__topbar">
        <span>Sports Committee · OSAIL</span>
        <div className="pdeu__topbar-links">
          <a href="https://pdeu.ac.in/" target="_blank" rel="noreferrer">pdeu.ac.in ↗</a>
          <a href="#footer">Instagram</a>
          <a href="#footer">YouTube</a>
        </div>
      </div>

      <nav className="pdeu__nav">
        <Link to="/pdeu-sports" className="pdeu__nav-brand">
          <span className="pdeu__nav-logo">PDEU</span>
          <span className="pdeu__nav-divider" />
          <span className="pdeu__nav-label">SPORTS</span>
        </Link>
        <div className="pdeu__nav-links">
          {navLinks.map(l => (
            l.href === '/' ? <Link key={l.label} to="/">{l.label}</Link>
            : <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="pdeu__nav-actions">
          <a href="#events" className="pdeu__nav-cta">Register</a>
          <button className="pdeu__nav-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="pdeu__mobile-menu">
          {navLinks.map(l => (
            l.href === '/' ? <Link key={l.label} to="/" onClick={() => setMenuOpen(false)}>{l.label}</Link>
            : <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}

      <header className="pdeu__hero">
        <div className="pdeu__hero-bg" />
        <div className="pdeu__hero-tag">[ HERO · PDEU athletes ]</div>
        <div className="pdeu__hero-overlay" />
        <div className="pdeu__hero-content">
          <div className="pdeu__hero-pre"><span className="pdeu__hero-line" />OFFICIAL HOME OF PDEU SPORTS</div>
          <h1 className="pdeu__hero-title">Where PDEU<br /><span className="pdeu__hero-accent">competes.</span></h1>
          <p className="pdeu__hero-desc">Fixtures, results, teams and tournaments from Pandit Deendayal Energy University — home of the Energy Cup.</p>
          <div className="pdeu__hero-actions">
            <a href="#sports" className="pdeu__cta pdeu__cta--fill">Explore our sports</a>
            <Link to="/" className="pdeu__cta pdeu__cta--ghost">Energy Cup '27 →</Link>
          </div>
        </div>
      </header>

      <section id="events" className="pdeu__events">
        <div className="pdeu__section-tag pdeu__section-tag--blue">TOURNAMENTS & EVENTS</div>
        <h2 className="pdeu__section-title pdeu__section-title--dark">On the calendar</h2>
        <div className="pdeu__events-grid">
          <article className="pdeu__ec-card">
            <div className="pdeu__ec-image"><span className="pdeu__ec-photo-tag">[ Energy Cup '26 opening ceremony ]</span><span className="pdeu__ec-badge">FLAGSHIP</span></div>
            <div className="pdeu__ec-body">
              <div className="pdeu__ec-meta">INTER-UNIVERSITY SPORTS FEST · MULTI-SPORT</div>
              <h3 className="pdeu__ec-name">Energy Cup <span className="pdeu__hero-accent">'27</span></h3>
              <div className="pdeu__ec-info">
                <div className="pdeu__ec-info-cell"><div className="pdeu__ec-info-label">DATES</div><div>8–14 Feb 2027</div></div>
                <div className="pdeu__ec-info-cell"><div className="pdeu__ec-info-label">VENUE</div><div>PDEU, Gandhinagar</div></div>
                <div className="pdeu__ec-info-cell"><div className="pdeu__ec-info-label">ENTRIES</div><div className="pdeu__hero-accent">Opening soon</div></div>
              </div>
              <div className="pdeu__ec-clock">
                {clock.map(c => (
                  <div key={c.label} className="pdeu__ec-clock-unit">
                    <span className="pdeu__ec-clock-val">{c.value}</span>
                    <span className="pdeu__ec-clock-label">{c.label}</span>
                  </div>
                ))}
              </div>
              <div className="pdeu__ec-actions">
                <Link to="/" className="pdeu__cta pdeu__cta--fill">Visit the fest site →</Link>
                <span className="pdeu__ec-note">Last edition: 29 Jan – 4 Feb 2026</span>
              </div>
            </div>
          </article>
          <div className="pdeu__events-list">
            {events.map(e => (
              <article key={e.name} className="pdeu__event-row">
                <div className="pdeu__event-thumb">photo</div>
                <div className="pdeu__event-info">
                  <div className="pdeu__section-tag pdeu__section-tag--blue">{e.kind}</div>
                  <div className="pdeu__event-name">{e.name}</div>
                  <div className="pdeu__event-meta"><span>{e.sport}</span><span className="pdeu__event-status">{e.status}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fixtures" className="pdeu__fixtures">
        <div className="pdeu__fixtures-header">
          <div>
            <div className="pdeu__section-tag pdeu__section-tag--gold">FIXTURES & RESULTS</div>
            <h2 className="pdeu__section-title">Match centre</h2>
          </div>
          <div className="pdeu__fixtures-controls">
            <div className="pdeu__mode-toggle">
              <button className={`pdeu__mode-btn ${mode === 'upcoming' ? 'pdeu__mode-btn--active' : ''}`} onClick={() => setMode('upcoming')}>Upcoming</button>
              <button className={`pdeu__mode-btn ${mode === 'results' ? 'pdeu__mode-btn--active' : ''}`} onClick={() => setMode('results')}>Results</button>
            </div>
            <select className="pdeu__sport-select" value={sportFilter} onChange={e => setSportFilter(e.target.value)}>
              {sportOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div className="pdeu__match-list">
          {filteredMatches.map((m, i) => {
            const st = statusMap[m.s];
            return (
              <div key={i} className="pdeu__match-row">
                <div className="pdeu__match-date"><span>{m.date}</span><span className="pdeu__match-sport">{m.sport}</span></div>
                <div className="pdeu__match-teams"><span className="pdeu__match-name">{m.teams}</span><span className="pdeu__match-venue">{m.venue}</span></div>
                <div className="pdeu__match-result">
                  <span className="pdeu__match-score">{m.score || '—'}</span>
                  <span className="pdeu__match-status" style={{ background: st.bg, color: st.fg }}>{st.text}</span>
                </div>
              </div>
            );
          })}
          {filteredMatches.length === 0 && <div className="pdeu__match-empty">No matches to show for this filter.</div>}
        </div>
      </section>

      <section id="news" className="pdeu__news">
        <div className="pdeu__section-tag pdeu__section-tag--blue">NEWS</div>
        <h2 className="pdeu__section-title pdeu__section-title--dark">From the field</h2>
        <div className="pdeu__news-grid">
          <a href="#news" className="pdeu__news-featured">
            <div className="pdeu__news-featured-img"><span className="pdeu__news-photo-tag">[ Energy Cup 2026 closing ceremony ]</span></div>
            <div className="pdeu__news-featured-tag">ENERGY CUP 2026 · RECAP</div>
            <h3 className="pdeu__news-featured-title">Seven days of competition: Energy Cup 2026 in review</h3>
            <p className="pdeu__news-featured-desc">Held 29 January – 4 February 2026 on the PDEU campus.</p>
          </a>
          <div className="pdeu__news-sidebar">
            {stories.map(s => (
              <a key={s.title} href="#news" className="pdeu__news-story">
                <div className="pdeu__news-story-img" />
                <div><span className="pdeu__section-tag pdeu__section-tag--blue">{s.tag}</span><span className="pdeu__news-story-title">{s.title}</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="sports" className="pdeu__sports">
        <div className="pdeu__sports-header">
          <div>
            <div className="pdeu__section-tag pdeu__section-tag--gold">SPORTS & TEAMS</div>
            <h2 className="pdeu__section-title">{sports.length} sports at PDEU</h2>
          </div>
          <div className="pdeu__sports-filters">
            {categories.map(cat => (
              <button key={cat} className={`pdeu__sports-filter ${activeCat === cat ? 'pdeu__sports-filter--active' : ''}`} onClick={() => setActiveCat(cat)}>{cat}</button>
            ))}
          </div>
        </div>
        <div className="pdeu__sports-grid">
          {filteredSports.map(sp => (
            <a key={sp.slug} href="#sports" className="pdeu__sport-card">
              <div className="pdeu__sport-card-img"><span className="pdeu__sport-card-tag">[ team photo ]</span><span className="pdeu__sport-card-num">{sp.n}</span></div>
              <div className="pdeu__sport-card-body"><div><div className="pdeu__sport-card-name">{sp.name}</div><div className="pdeu__sport-card-cat">{sp.cat}</div></div><span className="pdeu__sport-card-arrow">→</span></div>
            </a>
          ))}
        </div>
      </section>

      <section id="achievements" className="pdeu__achievements">
        <div className="pdeu__section-tag pdeu__section-tag--gold">ACHIEVEMENTS</div>
        <h2 className="pdeu__section-title">A sporting tradition</h2>
        <div className="pdeu__achievements-grid">
          {achievements.map(a => (
            <div key={a.heading} className="pdeu__achievement">
              <div className="pdeu__achievement-big" style={{ color: a.color }}>{a.big}</div>
              <div className="pdeu__achievement-heading">{a.heading}</div>
              <p className="pdeu__achievement-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="footer" className="pdeu__footer">
        <div className="pdeu__footer-grid">
          <div className="pdeu__footer-brand">
            <div className="pdeu__footer-logo">PDEU</div>
            <p className="pdeu__footer-address">Sports Committee, OSAIL<br />Knowledge Corridor, Raisan,<br />Gandhinagar, Gujarat</p>
          </div>
          {footerCols.map(col => (
            <div key={col.h} className="pdeu__footer-col">
              <div className="pdeu__footer-col-title">{col.h}</div>
              {col.items.map(it => (
                it.href === '/' ? <Link key={it.label} to="/">{it.label}</Link>
                : <a key={it.label} href={it.href}>{it.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="pdeu__footer-bottom"><span>© Pandit Deendayal Energy University</span><span>Formerly Pandit Deendayal Petroleum University</span></div>
      </footer>
    </div>
  );
}

export default PDEUSports;
