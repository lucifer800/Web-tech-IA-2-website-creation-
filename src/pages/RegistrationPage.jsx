import { useState, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sportImages from '../data/sportImages';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './RegistrationPage.css';

const SPORTS = [
  { name: 'Cricket', cat: 'Field', gender: 'Men', format: 'Knockout', fee: 3000, squad: 16, slug: 'cricket' },
  { name: 'Football', cat: 'Field', gender: 'Men / Women', format: 'League + KO', fee: 3500, squad: 18, slug: 'football' },
  { name: 'Athletics', cat: 'Field', gender: 'Men / Women', format: 'Heats + Finals', fee: 1500, squad: 12, slug: 'athletics' },
  { name: 'Kabaddi', cat: 'Field', gender: 'Men', format: 'Knockout', fee: 2000, squad: 12, slug: 'kabaddi' },
  { name: 'Tug of War', cat: 'Field', gender: 'Men / Women', format: 'Knockout', fee: 1500, squad: 10, slug: 'tug-of-war' },
  { name: 'Frisbee', cat: 'Field', gender: 'Mixed', format: 'League + KO', fee: 2000, squad: 14, slug: 'frisbee' },
  { name: 'Basketball', cat: 'Court', gender: 'Men / Women', format: 'League + KO', fee: 2500, squad: 12, slug: 'basketball' },
  { name: 'Volleyball', cat: 'Court', gender: 'Men / Women', format: 'Knockout', fee: 2000, squad: 12, slug: 'volleyball' },
  { name: 'Pickleball', cat: 'Court', gender: 'Doubles', format: 'Round robin', fee: 1000, squad: 4, slug: 'pickleball' },
  { name: 'Lawn Tennis', cat: 'Court', gender: 'Men / Women', format: 'Knockout', fee: 1500, squad: 4, slug: 'lawn-tennis' },
  { name: 'Badminton', cat: 'Indoor', gender: 'Men / Women', format: 'Team KO', fee: 2000, squad: 8, slug: 'badminton' },
  { name: 'Table Tennis', cat: 'Indoor', gender: 'Men / Women', format: 'Team KO', fee: 1500, squad: 6, slug: 'table-tennis' },
  { name: 'Chess', cat: 'Indoor', gender: 'Mixed team', format: 'Swiss', fee: 1000, squad: 6, slug: 'chess' },
  { name: 'Rifle Shooting', cat: 'Indoor', gender: 'Men / Women', format: 'Qual + Final', fee: 2500, squad: 4, slug: 'rifle-shooting' },
];

const STEP_LABELS = ['College', 'Sports', 'Squad & Stay', 'Review'];
const CATS = ['All', 'Field', 'Court', 'Indoor'];

function getDiscount(count) {
  if (count >= 8) return { pct: 15, label: '15% — 8+ sports' };
  if (count >= 5) return { pct: 10, label: '10% — 5+ sports' };
  if (count >= 3) return { pct: 5, label: '5% — 3+ sports' };
  return { pct: 0, label: null };
}

function fmt(n) {
  return '₹' + n.toLocaleString('en-IN');
}

/* ---------- sub-components ---------- */

function Stepper({ current }) {
  return (
    <div className="stepper">
      {STEP_LABELS.map((s, i) => {
        const cls = i === current ? 'step-item--active' : i < current ? 'step-item--done' : '';
        return (
          <div key={s} className={`step-item ${cls}`}>
            <div className="step-num">{i < current ? '✓' : i + 1}</div>
            <div className="step-label">{s}</div>
          </div>
        );
      })}
    </div>
  );
}

function SportCard({ sp, selected, onToggle }) {
  const img = sportImages[sp.slug];
  return (
    <div
      className={`sport-card ${selected ? 'sport-card--selected' : ''}`}
      onClick={() => onToggle(sp.slug)}
    >
      <div className="sport-card__img">
        {img ? (
          <img src={img} alt={sp.name} />
        ) : (
          <div className="sport-card__img-placeholder">{sp.name}</div>
        )}
        <div className="sport-card__check">{selected ? '✓' : ''}</div>
      </div>
      <div className="sport-card__body">
        <div className="sport-card__name">{sp.name}</div>
        <div className="sport-card__meta">
          <span>{sp.gender}</span>
          <span className="sport-card__fee">{fmt(sp.fee)}</span>
        </div>
      </div>
    </div>
  );
}

function FeeSummary({ selectedSlugs, accom = 0, showAccom = false }) {
  const chosen = SPORTS.filter(s => selectedSlugs.has(s.slug));
  const subtotal = chosen.reduce((sum, s) => sum + s.fee, 0);
  const disc = getDiscount(chosen.length);
  const discAmt = Math.round(subtotal * disc.pct / 100);
  const accomTotal = accom * 600;
  const total = subtotal - discAmt + accomTotal;

  return (
    <div className="fee-summary">
      <h4>Fee breakdown</h4>
      {chosen.map(s => (
        <div key={s.slug} className="fee-row">
          <dt>{s.name}</dt>
          <dd>{fmt(s.fee)}</dd>
        </div>
      ))}
      {chosen.length === 0 && (
        <div className="fee-row"><dt>No sports selected</dt><dd>—</dd></div>
      )}
      {disc.label && (
        <div className="fee-row fee-row--discount">
          <dt>Discount ({disc.label})</dt>
          <dd>−{fmt(discAmt)}</dd>
        </div>
      )}
      {showAccom && accom > 0 && (
        <div className="fee-row">
          <dt>Accommodation ({accom} × ₹600)</dt>
          <dd>{fmt(accomTotal)}</dd>
        </div>
      )}
      <div className="fee-row fee-row--total">
        <dt>Total</dt>
        <dd>{fmt(total)}</dd>
      </div>
    </div>
  );
}

/* ---------- main component ---------- */

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  // Step 1 fields
  const [college, setCollege] = useState('');
  const [city, setCity] = useState('');
  const [leader, setLeader] = useState('');
  const [designation, setDesignation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Step 2
  const [selectedSports, setSelectedSports] = useState(new Set());
  const [catFilter, setCatFilter] = useState('All');

  // Step 3
  const [squads, setSquads] = useState({});
  const [accom, setAccom] = useState(0);

  // Step 4
  const [agreed, setAgreed] = useState(false);

  const filteredSports = catFilter === 'All' ? SPORTS : SPORTS.filter(s => s.cat === catFilter);
  const chosenSports = useMemo(() => SPORTS.filter(s => selectedSports.has(s.slug)), [selectedSports]);

  const toggleSport = useCallback((slug) => {
    setSelectedSports(prev => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  }, []);

  const updateSquad = useCallback((slug, val) => {
    setSquads(prev => ({ ...prev, [slug]: val }));
  }, []);

  const canNext = () => {
    if (step === 0) return college && city && leader && phone && email;
    if (step === 1) return selectedSports.size > 0;
    if (step === 2) return true;
    return false;
  };

  const nextStep = () => { if (canNext()) setStep(s => s + 1); };
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = () => {
    if (!agreed) return;
    const id = 'EC27-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setRegId(id);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="reg-page">
          <div className="reg-wrap">
            <div className="confirmation">
              <div style={{ fontSize: '3rem' }}>🏆</div>
              <h2>Registration confirmed!</h2>
              <p>Your contingent from <strong>{college}</strong> is registered.</p>
              <div className="reg-id">{regId}</div>
              <p>A confirmation email will be sent to <strong>{email}</strong></p>
              <div className="btn-row" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                <Link to="/" className="reg-btn reg-btn--primary">Back to Energy Cup →</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="reg-page">
        <div className="reg-wrap">
          <div className="reg-header">
            <h1>Energy Cup <span>'27</span> Registration</h1>
            <p>Register your university contingent for PDEU's flagship inter-university sports fest</p>
          </div>

          <Stepper current={step} />

          {/* Step 1: College Info */}
          {step === 0 && (
            <div className="form-section">
              <h3>College & Contact Details</h3>
              <div className="form-grid">
                <div className="form-field">
                  <label>University / College name</label>
                  <input value={college} onChange={e => setCollege(e.target.value)} placeholder="e.g. PDEU, Gandhinagar" />
                </div>
                <div className="form-field">
                  <label>City</label>
                  <input value={city} onChange={e => setCity(e.target.value)} placeholder="e.g. Gandhinagar" />
                </div>
                <div className="form-field">
                  <label>Contingent leader name</label>
                  <input value={leader} onChange={e => setLeader(e.target.value)} placeholder="Full name" />
                </div>
                <div className="form-field">
                  <label>Designation</label>
                  <input value={designation} onChange={e => setDesignation(e.target.value)} placeholder="e.g. Sports Secretary" />
                </div>
                <div className="form-field">
                  <label>Phone</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210" />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="sports@university.ac.in" />
                </div>
              </div>
              <div className="btn-row" style={{ justifyContent: 'flex-end' }}>
                <button className="reg-btn reg-btn--primary" onClick={nextStep} disabled={!canNext()}>Next: Select sports →</button>
              </div>
            </div>
          )}

          {/* Step 2: Sport Selection */}
          {step === 1 && (
            <div className="form-section">
              <h3>Select sports to compete in</h3>
              <div className="sport-filters">
                {CATS.map(c => (
                  <button key={c} className={`sport-filter-btn ${catFilter === c ? 'sport-filter-btn--active' : ''}`} onClick={() => setCatFilter(c)}>{c}</button>
                ))}
                <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  {selectedSports.size} selected
                </span>
              </div>
              <div className="sport-grid">
                {filteredSports.map(sp => (
                  <SportCard key={sp.slug} sp={sp} selected={selectedSports.has(sp.slug)} onToggle={toggleSport} />
                ))}
              </div>
              <FeeSummary selectedSlugs={selectedSports} />
              <div className="btn-row">
                <button className="reg-btn reg-btn--secondary" onClick={prevStep}>← Back</button>
                <button className="reg-btn reg-btn--primary" onClick={nextStep} disabled={!canNext()}>Next: Squad details →</button>
              </div>
            </div>
          )}

          {/* Step 3: Squad & Accommodation */}
          {step === 2 && (
            <div className="form-section">
              <h3>Squad sizes & accommodation</h3>
              <div className="squad-section">
                {chosenSports.map(sp => (
                  <div key={sp.slug} className="squad-row">
                    <span>{sp.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="number"
                        min={sp.squad}
                        max={sp.squad + 6}
                        value={squads[sp.slug] || sp.squad}
                        onChange={e => updateSquad(sp.slug, Number(e.target.value))}
                      />
                      <span className="squad-hint">min {sp.squad}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="accom-row">
                <label>Accommodation (₹600 / person / night)</label>
                <input type="number" min={0} value={accom} onChange={e => setAccom(Math.max(0, Number(e.target.value)))} />
                <span className="accom-note">On-campus hostel, includes meals</span>
              </div>

              <FeeSummary selectedSlugs={selectedSports} accom={accom} showAccom={true} />

              <div className="btn-row">
                <button className="reg-btn reg-btn--secondary" onClick={prevStep}>← Back</button>
                <button className="reg-btn reg-btn--primary" onClick={nextStep}>Next: Review →</button>
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {step === 3 && (
            <div className="form-section">
              <h3>Review your registration</h3>

              <div className="summary-card">
                <h4>College details</h4>
                <div className="summary-row"><dt>College</dt><dd>{college}</dd></div>
                <div className="summary-row"><dt>City</dt><dd>{city}</dd></div>
                <div className="summary-row"><dt>Leader</dt><dd>{leader}{designation ? ` (${designation})` : ''}</dd></div>
                <div className="summary-row"><dt>Phone</dt><dd>{phone}</dd></div>
                <div className="summary-row"><dt>Email</dt><dd>{email}</dd></div>
              </div>

              <div className="summary-card">
                <h4>Sports & squad</h4>
                {chosenSports.map(sp => (
                  <div key={sp.slug} className="summary-row">
                    <dt>{sp.name}</dt>
                    <dd>{squads[sp.slug] || sp.squad} players</dd>
                  </div>
                ))}
                {accom > 0 && (
                  <div className="summary-row"><dt>Accommodation</dt><dd>{accom} people</dd></div>
                )}
              </div>

              <FeeSummary selectedSlugs={selectedSports} accom={accom} showAccom={true} />

              <label className="terms-row" onClick={() => setAgreed(a => !a)}>
                <input type="checkbox" checked={agreed} readOnly />
                <span>I confirm that the above details are correct. I understand that registration fees are non-refundable and my contingent will abide by the Energy Cup rules and code of conduct.</span>
              </label>

              <div className="btn-row">
                <button className="reg-btn reg-btn--secondary" onClick={prevStep}>← Back</button>
                <button className="reg-btn reg-btn--primary" onClick={handleSubmit} disabled={!agreed}>Submit registration</button>
              </div>
            </div>
          )}

          <div className="reg-footer">ENERGY CUP '27 · PDEU · GANDHINAGAR</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
